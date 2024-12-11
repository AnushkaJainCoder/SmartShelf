import axios from "axios";
import { useEffect, useState } from "react"
// import DropDown from "./DropDown";
import Book from "./Book";
import '../index.css'
// import { useNavigate } from "react-router-dom";

export default function SearchBook() {
    const [text, setText] = useState('');
    const [filterbooks, setFilterBooks] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
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
        // const(set)
        // console.log(filterbooks);
        
    }

    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Search..." />
            <button onClick={searchBookFilter}>Search</button>
            <div className="book-container">
                {filterbooks.map((b) => {
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
                })}

            </div>

        </>
    )
}