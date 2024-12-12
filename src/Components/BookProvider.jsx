import { createContext, useContext, useState } from "react"

export const BookContext = createContext();

export default function BookProvider ({children}){

    const [wtr, setwtr] = useState([]);
    const [read, setread] = useState([]);
    const [curr, setcurr] = useState([]);
    const isBookInCategory = (arr,book) => arr.some(b => b.id === book.id)
        
    const addBookToCat = (book, category) =>{
        
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
    const removeBookToCateg = (book, category) =>{


            setwtr((prev) => prev.filter(b => b.id !== book.id))
        // }
        // else if(category === 'Read' ){
            setread((prev) => prev.filter(b => b.id !== book.id))
        // }
        // else if(category === 'Currently Reading' ){
            // curr.push(book);
            setcurr((prev) => prev.filter(b => b.id !== book.id))
        // }

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
            <BookContext.Provider value = {{wtr, read, curr, addBookToCat, removeBookToCateg}}>
                {children}
            </BookContext.Provider>
        </>
    )
}