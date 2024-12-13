import { useEffect, useState } from "react"
import Book from "../Components/Book";
// import from "./"
import { useNavigate } from "react-router-dom";
import '../index.css'

export default function HomePage() {

    const [books, setBooks] = useState([]);
    // const [text, setText] = useState('');

    const navigate = useNavigate();
    // const [books, setBooks] = useState([]);


    useEffect(() => {
        fetch('/data.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data.items);
                setBooks(data.items);
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);
    
    return (
        <>
            <h1 style={{ color: "aliceblue" }}>Available books</h1>
            {/* <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/> */}
            <button onClick={() => navigate('/search')}>Search</button>

            <div className="book-container">
                {books.map((b) => {
                    const volumeInfo = b.volumeInfo || {};
                    const title = volumeInfo.title || 'No title';
                    const authors = volumeInfo.authors || 'Unknown';
                    const imageLinks = volumeInfo.imageLinks || 'No link';
                    const image = imageLinks.thumbnail || 'No image';

                    return (
                        <div key={b.id}>
                            {/* {title}
                        {authors} */}
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