import { createContext, useContext, useState } from "react"

export const BookContext = createContext();

export default function BookProvider ({children}){

    const [wtr, setwtr] = useState([]);
    const [read, setread] = useState([]);
    const [curr, setcurr] = useState([]);
    const isBookInCategory = (arr,book) => arr.some(b => b.id === book.id)
        
    const addBookToCat = (book, category) =>{
        
        if(category === 'Want to read' && !isBookInCategory(wtr, book)){
            
            const readFilter = read.filter(b => {
                const volumeInfo1 = b.volumeInfo || {};
                const title1 = volumeInfo1.title || '';
                const volumeInfo2 = book.volumeInfo || {};
                const title2 = volumeInfo2.title || '';
                            
                            return title1.toLowerCase()!==title2.toLowerCase();
                        });
            const currFilter = curr.filter(b => {
                const volumeInfo1 = b.volumeInfo || {};
                const title1 = volumeInfo1.title || '';
                const volumeInfo2 = book.volumeInfo || {};
                const title2 = volumeInfo2.title || '';
                            
                            return title1.toLowerCase()!==title2.toLowerCase();
            });
                // read.filter()

                setread(readFilter);
                setcurr(currFilter)
                setwtr((prev) => [...prev, book]);
                console.log("book added successfully");
                console.log(wtr);
            }
        else if(category === 'Read' && !isBookInCategory(read, book)){
            
            const wtrFilter = wtr.filter(b => {
                const volumeInfo1 = b.volumeInfo || {};
                const title1 = volumeInfo1.title || '';
                const volumeInfo2 = book.volumeInfo || {};
                const title2 = volumeInfo2.title || '';
                            
                            return title1.toLowerCase()!==title2.toLowerCase();
                        });
            const currFilter = curr.filter(b => {
                const volumeInfo1 = b.volumeInfo || {};
                const title1 = volumeInfo1.title || '';
                const volumeInfo2 = book.volumeInfo || {};
                const title2 = volumeInfo2.title || '';
                            
                            return title1.toLowerCase()!==title2.toLowerCase();
            });
                // read.filter()

                setwtr(wtrFilter);
                setcurr(currFilter)
            

                setread((prev) => [...prev, book]);
        }
        else if(category === 'Currently Reading' &&  !isBookInCategory(curr, book)){
            // curr.push(book);
            const wtrFilter = wtr.filter(b => {
                const volumeInfo1 = b.volumeInfo || {};
                const title1 = volumeInfo1.title || '';
                const volumeInfo2 = book.volumeInfo || {};
                const title2 = volumeInfo2.title || '';
                            
                            return title1.toLowerCase()!==title2.toLowerCase();
                        });
            const readFilter = read.filter(b => {
                const volumeInfo1 = b.volumeInfo || {};
                const title1 = volumeInfo1.title || '';
                const volumeInfo2 = book.volumeInfo || {};
                const title2 = volumeInfo2.title || '';
                            
                            return title1.toLowerCase()!==title2.toLowerCase();
            });
                // read.filter()

                setwtr(wtrFilter);
                setread(readFilter);

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


    return (
        <>
            <BookContext.Provider value = {{wtr, read, curr, addBookToCat, removeBookToCateg}}>
                {children}
            </BookContext.Provider>
        </>
    )
}