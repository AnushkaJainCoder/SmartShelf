import { createContext, useContext, useState } from "react"

export const BookContext = createContext();

export default function BookProvider ({children}){

    const [wtr, setwtr] = useState([]);
    const [read, setread] = useState([]);
    const [curr, setcurr] = useState([]);
    
    const addBookToCat = (book, category) =>{
        const isBookInCategory = (arr) => arr.some(b => b.id === book.id)
        
        if(category === 'Want to read' && !isBookInCategory(wtr)){
                setwtr((prev) => [...prev, book]);
                console.log("book added successfully");
                console.log(wtr);
            }
        else if(category === 'Read' && !isBookInCategory(read)){
            setread((prev) => [...prev, book]);
        }
        else if(category === 'Currently Reading' &&  !isBookInCategory(curr)){
            // curr.push(book);
            setcurr((prev) => [...prev, book]);
        }
    }

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
            <BookContext.Provider value = {{wtr, read, curr, addBookToCat}}>
                {children}
            </BookContext.Provider>
        </>
    )
}