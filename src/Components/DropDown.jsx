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
            <select value={selectedOption} onChange={handleChange} className="dropdown-select">
                <option ><span className="icon"  >▼</span></option>
                <option >Want to read</option>
                <option >Read</option>
                <option >None</option>
            </select>
        </div>
            
        </>
    )
}