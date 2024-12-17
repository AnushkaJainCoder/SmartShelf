import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({onSearch}) {

     const [text, setText] = useState('');

    const handleInputChange = useCallback((e) => {
            const value = e.target.value;
            setText(e.target.value);
            onSearch(value);
        }, [onSearch]);
        
    return (
        <>
        <nav className="navbar"> 
            <div className="navbar-container"> 
                <div>
                <Link to="/home" className="navbar-logo">Home</Link> 

                <Link to="/books" className="navbar-item">All Books</Link>
                </div>
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
            </div>
        </nav>
        </>
        
    )
}