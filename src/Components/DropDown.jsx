import { useState } from "react"

export default function DropDown(){

    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (e) =>{
        setSelectedOption(e.target.value )
    }

    return (
        <>
            <select>
            <option value={selectedOption} onChange={handleChange}>Move to...</option>
            <option >Currently reading.</option>
            <option >Want to read</option>
            <option >Read</option>
            <option >None</option>
            
                
            </select>
        </>
    )
}