import { useState } from "react";
import '../index.css';

export default function DropDown({book}){

    const [selectedOption, setSelectedOption] = useState();
    const wtr = [];
    const read = [];
    const curr = [];


    if(selectedOption === 'Want to read'){
        wtr.push(book);
    }
    else if(selectedOption === 'Read'){
        read.push(book);
    }
    else if(selectedOption === 'Currently Reading'){
        curr.push(book);
    }
    
    const handleChange = (e) =>{
        setSelectedOption(e.target.value )
    }

    return (
        <>
        <div className="dropdown">
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