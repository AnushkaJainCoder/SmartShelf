import { useContext } from "react"
import Book from "../Components/Book"

export default function Shelf({books, onCategoryChange}){
    const {wtr, read, curr} = useContext()
    return(
        <>
            {
                <h1>

                </h1>
                // Object.keys(categories).map((category) => (
                //     <div key={category}>
                //         <h2>{categories[category]}</h2>
                //         <ul>
                //             {books.filter((b) => b.category === category)
                //             .map((book) => (
                //                 <Book key={book.id} book={book} onCategoryChange={onCategoryChange} />
                //             ))}
                //         </ul>
                //     </div>
                // ))
            }
        </>
    )
}