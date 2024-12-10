import axios from "axios";
import { useEffect, useState } from "react"
import Book from "../Components/Book";
import { useNavigate } from "react-router-dom";
import '../index.css'

export default function HomePage(){

    const [books, setBooks] = useState([]);
    // const [text, setText] = useState('');
    
    const navigate = useNavigate();
    // const [books, setBooks] = useState([]);

    
    useEffect(()=>{
        const fetchBooks = async() =>{
            // try{
                const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=of`);
                setBooks(res.data.items)
            // }
            // catch(err){
                
            // }
            
        }
        fetchBooks();
        
    },[]);


    return (
        <>
            <h1>Available books</h1>
            {/* <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/> */}
             <button onClick={() => navigate('/search')}>Search</button>
             
             <div className="book-container">
                {books.map((b)=>(
                    <p key={b.id}>
                    <Book 
                        b = {b} 
                        title = {b.volumeInfo.title}
                        author = {b.volumeInfo.authors}
                        image = {b.volumeInfo.imageLinks.thumbnail}/>
                    </p>
                ))}

            </div>
        </>
    )
}