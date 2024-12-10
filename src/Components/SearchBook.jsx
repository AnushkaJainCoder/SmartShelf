import axios from "axios";
import { useState } from "react"
// import DropDown from "./DropDown";
import Book from "./Book";
import '../index.css'
// import { useNavigate } from "react-router-dom";

export default function SearchBook(){
    const [text, setText] = useState('');
    const [books, setBooks] = useState([]);
    // const navigate = useNavigate();

    const searchBookFilter = async() =>{
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
        setBooks(res.data.items);
    }
    // const [books, setBooks] = 
    return (
        <>
         {/* <button onClick={() => navigate('/')}>Back to shelf</button> */}
           
             <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/>
             <button onClick={searchBookFilter}>Search</button>
             <div style={{}}>
                {books.map((b) =>(

                   <p key={b.id}>
                    <Book 
                    b = {b} 
                    title = {b.volumeInfo.title}
                    author = {b.volumeInfo.authors}
                    image = {b.volumeInfo.imageLinks.thumbnail}/>
                    
                    {/* {b.volumeInfo.title}
                    {b.volumeInfo.authors} */}
                    {/* {b.imageLinks.thumbnail && } */}
                    {/* <img src={b.volumeInfo.imageLinks.thumbnail} />
                    <DropDown item = {b}/> */}
                    
                    

                   </p>
                ))}
             </div>
   
        </>
    )
}