import { createContext, useState } from "react";
import '../index.css';

export const BookShelfContext = createContext();

export default function DropDown({book}){

    const [selectedOption, setSelectedOption] = useState();
    // const wtr = [];
    // const read = [];
    // const curr = [];

    // const [wtr, setwtr] = useState([]);
    // const [read, setread] = useState([]);
    // const [curr, setcurr] = useState([]);
    


    // if(selectedOption === 'Want to read'){
    //     setwtr((prev) => [...prev, book]);
    // }
    // else if(selectedOption === 'Read'){
    //     setread((prev) => [...prev, book]);
    // }
    // else if(selectedOption === 'Currently Reading'){
    //     // curr.push(book);
    //     setcurr((prev) => [...prev, book]);
    // }
    
    const handleChange = (e) =>{
        setSelectedOption(e.target.value )
        console.log(selectedOption);
        
        // console.log(wtr);
        // console.log(read);
        // console.log(curr);       
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