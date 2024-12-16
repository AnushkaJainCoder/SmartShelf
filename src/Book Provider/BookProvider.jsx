import { createContext, useCallback, useContext, useState } from "react"

export const BookContext = createContext();

export default function BookProvider({ children }) {

    const [wtr, setwtr] = useState([]);
    const [read, setread] = useState([]);
    const [curr, setcurr] = useState([]);

    const isBookInCategory = useCallback((arr, book) => arr.some(b => b.id === book.id), []);

    const filterOutBooks = useCallback((arr, book) => {
        const volumeInfo2 = book.volumeInfo || {};
        const title2 = volumeInfo2.title || '';
        return arr.filter(b => {
            const volumeInfo1 = b.volumeInfo || {};
            const title1 = volumeInfo1.title || '';
            return title1.toLowerCase() !== title2.toLowerCase();
        })
    }, []);

    const addBookToCat = useCallback((book, category) => {

        if (category === 'Want to read' && !isBookInCategory(wtr, book)) {

            setread(prev => filterOutBooks(prev, book));
            setcurr(prev => filterOutBooks(prev, book))
            setwtr((prev) => [...prev, book]);
            console.log("book added successfully");
            console.log(wtr);

        }
        else if (category === 'Read' && !isBookInCategory(read, book)) {

            setwtr(prev => filterOutBooks(prev, book));
            setcurr(prev => filterOutBooks(prev, book))
            setread((prev) => [...prev, book]);

        }
        else if (category === 'Currently Reading' && !isBookInCategory(curr, book)) {

            setwtr(prev => filterOutBooks(prev, book));
            setread(prev => filterOutBooks(prev, book));
            setcurr((prev) => [...prev, book]);

        }
    }, [wtr, read, curr, isBookInCategory]);

    const removeBookToCateg = (book, category) => {
        setwtr((prev) => prev.filter(b => b.id !== book.id));
        setread((prev) => prev.filter(b => b.id !== book.id));
        setcurr((prev) => prev.filter(b => b.id !== book.id));
    }

    return (
        <>
            <BookContext.Provider value={{ wtr, read, curr, addBookToCat, removeBookToCateg }}>
                {children}
            </BookContext.Provider>
        </>
    )
}