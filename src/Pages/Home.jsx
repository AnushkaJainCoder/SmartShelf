import axios from "axios";
import { useEffect, useState } from "react"
import Book from "../Components/Book";
// import from "./"
import { useNavigate } from "react-router-dom";
import '../index.css'
// C:\Users\anushka.jain\Desktop\smartshelf\public\data.json
// import data from '../data/data.json';
// import data from '../data';
// import 


export default function HomePage(){

    const [books, setBooks] = useState([]);
    // const [text, setText] = useState('');
    
    const navigate = useNavigate();
    // const [books, setBooks] = useState([]);

    
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBooks(data.items));
        console.log(books);
        
        // const fetchBooks = async() =>{
        //     // try{
        //         // const res =await fetch('/data.json')
        //         // const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=of`);
        //         // setBooks(res.data.items)
        //         // const data = await res.json();
        //         setBooks(data.items);
        //     // }
        //     // catch(err){
                
        //     // }
            
        // }
        // fetchBooks();
        // setBooks(data.items);

        
    },[]);


    return (
        <>
            <h1>Available books</h1>
            {/* <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/> */}
             <button onClick={() => navigate('/search')}>Search</button>
             
             <div className="book-container">
             {books.map(b =>(
                <p key={b.id}>
                    {b.id}
                    {/* <Book 
                        b = {b} 
                        title = {b.volumeInfo.title }
                        author = {b.volumeInfo.authors}
                        image = {b.volumeInfo.imageLinks.thumbnail}/> */}
                    
                </p>
             ))}
                {/* {books.items.map((b)=>(
                    <p key={b.id}> */}
                        {/* {b.volumeInfo.authors} */}
                    {/* <Book 
                        b = {b} 
                        title = {b.volumeInfo.title }
                        author = {b.volumeInfo.authors}
                        image = {b.volumeInfo.imageLinks.thumbnail}/> */}
                    {/* </p>
                ))} */}

            </div>
        </>
    )
}