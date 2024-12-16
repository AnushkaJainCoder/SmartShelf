import { createContext, useContext, useEffect, useState } from "react";
import '../index.css';
import { BookContext } from "../Book Provider/BookProvider";


export default function DropDown({ book }) {

    const [selectedOption, setSelectedOption] = useState('');
    const { addBookToCat, removeBookToCateg } = useContext(BookContext);

    const handleChange = (e) => {
        const category = e.target.value;
        setSelectedOption(category);
        if (category === 'None') {
            removeBookToCateg(book)
        }

        else if (book.id) {
            addBookToCat(book, category)
            console.log(category, book);
        }
    }

    return (
        <>
            <div className="dropdown">

                <span className="icon"  >▼</span>

                <select onChange={handleChange} className="dropdown-select" value={selectedOption}>

                    <option ><span className="icon"  >▼</span></option>
                    <option value='' disabled>Move to....</option>
                    <option value='Currently Reading'>Currently Reading</option>
                    <option value='Want to read'>Want to read</option>
                    <option value='Read'>Read</option>
                    <option value='None'>None</option>

                </select>
            </div>
        </>
    )
}