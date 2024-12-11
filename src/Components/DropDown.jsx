import { useState } from "react";
import '../index.css';

export default function DropDown(){

    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (e) =>{
        setSelectedOption(e.target.value )
    }

    return (
        <>
        <div className="dropdown">
            <select >
                <option value={selectedOption} onChange={handleChange}>,</option>
                <option >Currently reading.</option>
                <option >Want to read</option>
                <option >Read</option>
                <option >None</option>
            </select>
        </div>
            
        </>
    )
}