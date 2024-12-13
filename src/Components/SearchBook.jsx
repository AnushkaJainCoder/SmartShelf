import axios from "axios";
import { useEffect, useState } from "react"
// import DropDown from "./DropDown";
import Book from "./Book";
import '../index.css'

import '@fortawesome/fontawesome-free/css/all.css';
// import { useNavigate } from "react-router-dom";

export default function SearchBook() {
    const [text, setText] = useState('');
    const [filterbooks, setFilterBooks] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    const [res, showres] = useState(false);
    const [search, setsearch] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const generateUniqueKey = (book, index) => `${book.id}-${index}`



    // const navigate = useNavigate();

    useEffect(() => {
        fetch('/data.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.items);
                setAllBooks(data.items);

            })
    }, [])

    const searchBookFilter = () => {
        const fb = allBooks.filter(book => {
            const volumeInfo = book.volumeInfo || {};
            const title = volumeInfo.title || '';
            if (typeof title === 'string') {
                return title.toLowerCase().includes(text.toLowerCase());
            }
            return false;

        });
        setFilterBooks(fb);
        showres(true);
        setsearch(true);
        // const(set)
        // console.log(filterbooks);

    }

    const handleInputChange = (e) => {
        const value = e.target.value;
        setText(e.target.value); 
        setsearch(false);

        if(value){
            const filtersugg = allBooks.filter( b =>{
                const volumeInfo = b.volumeInfo || {};
                const title = volumeInfo.title || '';
                return title.toLowerCase().includes(value.toLowerCase());
            }).map(b => b.volumeInfo.title);
            setSuggestions(filtersugg);
            console.log(filtersugg);
            
        }
        else{
            setSuggestions([]);
        }
        

    }

    const handleSuggestionClick = (s) =>{
        setText(s);
        setSuggestions([]);
        searchBookFilter(s);
    }
    // }

    const result = 'Result: ' + text;

    return (
        <>

            <div className="search-container">
                <input
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    placeholder="Web Development"
                    className="search-input"
                />
                <button
                    onClick={searchBookFilter}
                    className="search-button"
                >
                    <i className="fas fa-search"></i>
                </button>
            </div>

            {
                suggestions.length>0 && (
                    <div className="suggestions-dropdown">
                        {
                            suggestions.map((suggestions, index) => (
                                <div key={index} 
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(suggestions)}>
                                    {suggestions}
                                </div>

                            ))
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


            {/* <h1>behrfh</h1> */}
            <div className="book-container">
                {filterbooks.length === 0 && search ?
                    <div className="no-book-found">
                        <p>Sorry, no book found</p>
                    </div>

                    : (filterbooks.map((b) => {
                        const volumeInfo = b.volumeInfo || {};
                        const title = volumeInfo.title || 'No title';
                        const authors = volumeInfo.authors || 'Unknown';
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
                    }))
                }

            </div>

        </>
    )
}