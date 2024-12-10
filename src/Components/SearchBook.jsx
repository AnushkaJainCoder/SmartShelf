import { useState } from "react"

export default function SearchBook(){
    const [text, setText] = useState('');
    // const [books, setBooks] = 
    return (
        <>
             <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/>
             <button onClick={SearchBook}
   
        </>
    )
}