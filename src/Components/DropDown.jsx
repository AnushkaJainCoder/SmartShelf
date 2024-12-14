import { createContext, useContext, useEffect, useState } from "react";
import '../index.css';
import { BookContext } from "../Book Provider/BookProvider";


export default function DropDown({ book }) {

    const [selectedOption, setSelectedOption] = useState('');
    const { addBookToCat, removeBookToCateg } = useContext(BookContext);

    const handleChange = (e) => {
        const category = e.target.value;
        const prevCateg = selectedOption;
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

                <select onChange={handleChange} className="dropdown-select">

                    <option ><span className="icon"  >▼</span></option>
                    <option value='Currently ' disabled>Move to....</option>
                    <option >Currently Reading</option>
                    <option >Want to read</option>
                    <option >Read</option>
                    <option >None</option>

                </select>
            </div>
        </>
    )
}