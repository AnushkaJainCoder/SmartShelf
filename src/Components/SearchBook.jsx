import React, { useEffect, useMemo, useState, useCallback } from "react";
import Book from "./Book";
import Navbar from "./Navbar";
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default function SearchBook() {
    const [text, setText] = useState('');
    const [filterbooks, setFilterBooks] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    const [res, showres] = useState(false);
    const [search, setsearch] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            try {
                const res = await fetch('/data.json');
                if (!res.ok) {
                    throw new Error('Network response not ok');
                }
                const data = await res.json();
                setAllBooks(data.items);
                setFilterBooks(data.items);
            } catch (err) {
                console.log(err);
            } finally {
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
        setSuggestions([]);
    }, [allBooks]);

    const filterSuggestionBlock = useCallback((value) => {
        const filtersugg = allBooks.filter(b => {
            const volumeInfo = b.volumeInfo || {};
            const title = volumeInfo.title || '';
            return title.toLowerCase().includes(value.toLowerCase());
        }).map(b => b.volumeInfo.title);
        setSuggestions(filtersugg);
    }, [allBooks]);

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
            const imageLinks = volumeInfo.imageLinks || {};
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
        })), [filterbooks]);

    const suggestionsBlock = useMemo(() => (
        suggestions.map((suggestion, index) => (
            <div key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
            </div>
        ))
    ), [suggestions]);

    const handleSearch = useCallback((value) => {
        setText(value);
        setsearch(false);
        if (value) {
            filterSuggestionBlock(value);
        } else {
            setSuggestions([]);
            setFilterBooks(allBooks);
        }
    }, [filterSuggestionBlock, allBooks]);

    return (
        <>
            <Navbar onSearch={handleSearch} />

            {suggestions.length > 0 && (
                <div className="suggestions-dropdown">
                    {suggestionsBlock}
                </div>
            )}

            {res && search && (
                <div>
                    <p className="result">{result}</p>
                    <p className="bor"></p>
                </div>
            )}

            <div className="book-container" style={{ paddingTop: '60px' }}>
                {Loading ? (
                    <div className="no-book-found">
                        <p>Loading books, please wait....</p>
                    </div>
                ) : (
                    filterbooks.length === 0 && search ? (
                        <div className="no-book-found">
                            <p>Sorry, no book found</p>
                        </div>
                    ) : (
                        filteredBooks
                    )
                )}
            </div>
        </>
    );
}
