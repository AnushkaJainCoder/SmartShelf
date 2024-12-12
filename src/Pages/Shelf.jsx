import { useContext } from "react";
import Book from "../Components/Book";
import { BookContext } from "../Components/BookProvider";
import { useNavigate } from "react-router-dom";

export default function Shelf() {
    const { wtr, read, curr } = useContext(BookContext);
    const navigate = useNavigate();

    console.log("Want to Read:", wtr);
    console.log("Read:", read);
    console.log("Currently Reading:", curr);

    return (
        <>
             <div className="book-container">
                <h2>Want to Read</h2>
                {wtr.map((b) => {
                    const volumeInfo = b.volumeInfo || {};
                    const title = volumeInfo.title || 'No title';
                    const authors = volumeInfo.authors || ['Unknown'];
                    const imageLinks = volumeInfo.imageLinks || {};
                    const image = imageLinks.thumbnail || 'No image';

                    return (
                        <div key={b.id}>
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
            <div className="book-container">
                <h2>Read</h2>
                {read.map((b) => {
                    const volumeInfo = b.volumeInfo || {};
                    const title = volumeInfo.title || 'No title';
                    const authors = volumeInfo.authors || ['Unknown'];
                    const imageLinks = volumeInfo.imageLinks || {};
                    const image = imageLinks.thumbnail || 'No image';

                    return (
                        <div key={b.id}>
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
            <div className="book-container">
                <h2>Currently Reading</h2>
                {curr.map((b) => {
                    const volumeInfo = b.volumeInfo || {};
                    const title = volumeInfo.title || 'No title';
                    const authors = volumeInfo.authors || ['Unknown'];
                    const imageLinks = volumeInfo.imageLinks || {};
                    const image = imageLinks.thumbnail || 'No image';

                    return (
                        <div key={b.id}>
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
            <button onClick={() => navigate('/search')}>Search</button>
              
        </>
    );
}