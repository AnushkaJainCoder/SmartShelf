import axios from "axios";
import { useState } from "react"
import DropDown from "./DropDown";

export default function SearchBook(){
    const [text, setText] = useState('');
    const [books, setBooks] = useState([]);

    const searchBookFilter = async() =>{
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
        setBooks(res.data.items);
    }
    // const [books, setBooks] = 
    return (
        <>
             <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/>
             <button onClick={searchBookFilter}>Search</button>
             <ul>
                {books.map((b) =>(

                   <li key={b.id}>
                    {b.volumeInfo.title}
                    {b.volumeInfo.authors}
                    {/* {b.imageLinks.thumbnail && } */}
                    <img src={b.volumeInfo.imageLinks.thumbnail} />
                    <DropDown item = {b}/>
                    
                    

                   </li>
                ))}
             </ul>
   
        </>
    )
}