import { useContext } from "react";
import Book from "../Components/Book";
import { BookContext } from "../Components/BookProvider";
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
            <div>
            <h2>Want to Read</h2>
            <p className="bor"></p>
             <div className="book-container">
                
                <div>
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
            
            </div>
            <br />
            <div>
            <h2>Read</h2>
            <p className="bor"></p>
             <div className="book-container">
                
                <div>
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
            
            </div>
            <br />
            <div>
            <h2>Curr</h2>
            <p className="bor"></p>
             <div className="book-container">
                
                <div>
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
            
            </div>
            
            {/* </div> */}
            <button className="circular-button" onClick={() => navigate('/search')}>
                <i className="fas fa-plus"></i>
            </button> 
        </>
    );
}