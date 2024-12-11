import { useContext, useState } from "react"

export const BookContext = useContext();

export default function BookProvider ({children}){

    const [wtr, setwtr] = useState([]);
    const [read, setread] = useState([]);
    const [curr, setcurr] = useState([]);
    


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

    return (
        <>
            <BookContext.Provider value = {{wtr, read, curr}}>
                <children />
            </BookContext.Provider>
        </>
    )
}