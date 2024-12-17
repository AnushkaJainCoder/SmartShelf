import { useCallback, useContext, useMemo } from "react";
import Book from "../Components/Book";
import { BookContext } from "../Book Provider/BookProvider";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
// import '../shelf.css'
import '../index.css'
import Navbar from "../Components/Navbar";

export default function Shelf() {
    const { wtr, read, curr } = useContext(BookContext);
    const navigate = useNavigate();

    console.log("Want to Read:", wtr);
    console.log("Read:", read);
    console.log("Currently Reading:", curr);

    const generateUniqueKey = useCallback((book, index) => `${book.id}-${index}`,[]);

    const displayBooks = useCallback((books)=>{
        return books.map((b, index) => {
            const volumeInfo = b.volumeInfo || {};
            const title = volumeInfo.title || 'No title';
            const authors = volumeInfo.authors || ['Unknown'];
            const imageLinks = volumeInfo.imageLinks || {};
            const image = imageLinks.thumbnail || 'No image';

            return (
                <div key={generateUniqueKey(b, index)}>
                    <Book
                        b={b}
                        title={title}
                        author={authors}
                        image={image}
                    />
                </div>
            );
        })
    },[generateUniqueKey]);

    const renderBookSection = (title, books) => (
        <div className="shelf-section">
            <div className="section-header">
                <h2>{title}</h2>
            </div>
            <p className="bor"></p>
            <div className="book-container">
                {displayBooks(books)}
            </div>
        </div>

    )

    return (
        <div style={{paddingTop: '80px'}}>
             <Navbar />
            <div>
                {renderBookSection('Continue....', curr)}
                {renderBookSection('Want to Read', wtr)}
                {renderBookSection('Read Done', read)}
                <button className="circular-button" onClick={() => navigate('/books')}>
                    <i className="fas fa-plus"></i>
                </button>
            </div >
        </div>
    );
}