import axios from "axios";
import { useEffect, useState } from "react"
import Book from "../Components/Book";

export default function HomePage(){

    const [books, setBooks] = useState([]);
    const [text, setText] = useState('');
    // const [books, setBooks] = useState([]);

    const searchBookFilter = async() =>{
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
        setBooks(res.data.items);
    }
    useEffect(()=>{
        // const res = axios.get('https://www.googleapis.com/books/v1/volumes?q=quilting');
        // setBooks(res.data.items)
    },[])

    return (
        <>
            <h1>Available books</h1>
            <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/>
             <button onClick={searchBookFilter}>Search</button>
             
            <ul>
                {books.map((b)=>(
                    <li key={b.id}>
                    <Book 
                        b = {b} 
                        title = {b.volumeInfo.title}
                        author = {b.volumeInfo.authors}
                        image = {b.volumeInfo.imageLinks.thumbnail}/>
                    </li>
                ))}

            </ul>
        </>
    )
}