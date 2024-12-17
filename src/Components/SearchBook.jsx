import axios from "axios";
import { useEffect, useMemo, useState } from "react"
// import DropDown from "./DropDown";
import Book from "./Book";
import '../index.css'

import '@fortawesome/fontawesome-free/css/all.css';
import { useCallback } from "react";

export default function SearchBook() {
    const [text, setText] = useState('');
    const [filterbooks, setFilterBooks] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    const [res, showres] = useState(false);
    const [search, setsearch] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [Loading, setLoading] = useState(true);
    // const generateUniqueKey = useMemo(
    //     () => {
    //         return (book, index) => `${book.id}-${index}`
    //     }, []);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const res = await fetch('/data.json')
                if (!res.ok) {
                    throw new Error('Network response not ok');
                }
                const data = await res.json();
                setAllBooks(data.items);
                setFilterBooks(data.items);
            }
            catch (err) {
                console.log(err);
            }
            finally{
                setLoading(false);
            }
        };
        fetchBooks();

    }, [])

    const searchBookFilter = useCallback((searchText) => {
        const fb = allBooks.filter(book => {
            const volumeInfo = book.volumeInfo || {};
            const title = volumeInfo.title || '';
            if (typeof title === 'string') {
                return title.toLowerCase().includes(searchText.toLowerCase());
            }
            return false;

        });
        setFilterBooks(fb);
        showres(true);
        setsearch(true);
        setSuggestions([])

    }, [allBooks]);

    const filterSuggestionBlock = useCallback(() => {
        const filtersugg = allBooks.filter(b => {
            const volumeInfo = b.volumeInfo || {};
            const title = volumeInfo.title || '';
            return title.toLowerCase().includes(value.toLowerCase());
        }).map(b => b.volumeInfo.title);
        setSuggestions(filtersugg);
        console.log(filtersugg);
    }, [allBooks]);

    const handleInputChange = useCallback((e) => {
        const value = e.target.value;
        setText(e.target.value);
        setsearch(false);

        if (value) {
            filterSuggestionBlock

        }
        else {
            setSuggestions([]);
        }
    }, [filterSuggestionBlock])

    const handleSuggestionClick = (suggestion) => {
        setText(suggestion);
        setSuggestions([]);
        searchBookFilter(suggestion);
    }

    const result = 'Result: ' + text;

    const filteredBooks = useMemo(() => (
        
        filterbooks.map((b) => {
            const volumeInfo = b.volumeInfo || {};
            const title = volumeInfo.title || 'No title';
            const authors = volumeInfo.authors || 'Unknown Author';
            const imageLinks = volumeInfo.imageLinks || 'No link';
            const image = imageLinks.thumbnail || 'No image';

            return (
                <div key={b.id}>

                    <Book
                        b={b}
                        title={title}
                        author={authors}
                        image={image} />
                </div>
            )
        })),[filterbooks]);

        const suggestionsBlock = useMemo(()=>(
            suggestions.map((suggestions, index) => (
                <div key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestions)}>
                    {suggestions}
                </div>

            ))
        ),[suggestions]);
    

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    placeholder="Search your favourite book...."
                    className="search-input"
                />

                <button
                    onClick={() => searchBookFilter(text)}
                    className="search-button"
                >
                    <i className="fas fa-search"></i>
                </button>

            </div>

            {
                suggestions.length > 0 && (
                    <div className="suggestions-dropdown">
                        {
                           suggestionsBlock
                        }
                    </div>
                )
            }

            {
                res && search ?
                    <div>
                        <p className="result">{result}</p>
                        <p className="bor"></p>
                    </div>
                    : ''
            }

            <div className="book-container">
                {
                    Loading?(
                        <div className="no-book-found">
                            <p>Loading books, please wait....</p>
                        </div>
                    ):
                    (filterbooks.length === 0 && search ?
                        <div className="no-book-found">
                            <p>Sorry, no book found</p>
                        </div>
    
                        : filteredBooks
                    )
                }
                

            </div>

        </>
    )
}