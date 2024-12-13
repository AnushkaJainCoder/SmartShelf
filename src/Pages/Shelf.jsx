import { useContext } from "react";
import Book from "../Components/Book";
import { BookContext } from "../Book Provider/BookProvider";
import { useNavigate } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
// import '../shelf.css'
import '../index.css'

export default function Shelf() {
    const { wtr, read, curr } = useContext(BookContext);
    const navigate = useNavigate();

    console.log("Want to Read:", wtr);
    console.log("Read:", read);
    console.log("Currently Reading:", curr);

    const generateUniqueKey = (book, index) => `${book.id}-${index}`

    return (
        <>
            <div className="shelf-container">
            <div className="shelf-section">
                    <div className="section-header">
                        <h2>Currently reading</h2>
                    </div>
                    <p className="bor"></p>
                    <div className="book-container">
                        {curr.map((b, index) => {
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
                        })}
                    </div>
                </div>
               <br />
                <div className="shelf-section">
                    <div className="section-header">
                        <h2>Want to Read</h2>
                    </div>
                    {/* <h2 >Want to Read</h2> */}
                    <p className="bor"></p>
                    <div className="book-container">
                        {wtr.map((b, index) => {
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
                        })}
                    </div>
                </div>
                <br />
                <div className="shelf-section">
                    <div className="section-header">
                        <h2>Read</h2>
                    </div>
                    <p className="bor"></p>
                    <div className="book-container">
                        {read.map((b, index) => {
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
                        })}
                    </div>
                </div>
                <br />
                <button className="circular-button" onClick={() => navigate('/search')}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
        </>
    );
}