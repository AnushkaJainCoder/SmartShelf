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
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log(data.items); 
            setBooks(data.items); 
        })
        .catch(err => console.error("Error fetching data:", err));
}, []);
        // fetch('/data.json')
        // .then(res => res.json())
        // .then(data => setBooks(data.items));
        // console.log(books);
        // console.log(books[0].accessInfo.country);
        
        
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

        
    // },[]);


    return (
        <>
            <h1 style={{color:"aliceblue"}}>Available books</h1>
            {/* <input type="text" value = {text} onChange={(e) => setText(e.target.value)}  placeholder="Search..."/> */}
             <button onClick={() => navigate('/search')}>Search</button>
             
             <div className="book-container">
             {books.map((b) =>{
                const volumeInfo = b.volumeInfo || {};
                const title = volumeInfo.title || 'No title';
                const authors = volumeInfo.authors || 'Unknown';
                const imageLinks = volumeInfo.imageLinks || 'No link';
                const image = imageLinks.thumbnail || 'No image';
                
                return(
                    <div key={b.id}>
                        {/* {title}
                        {authors} */}
                         <Book 
                        b = {b} 
                        title = {title }
                        author = {authors}
                        image = {image}/>
                    </div>
                )
             })}
                

                
                {/* <div key={b.id}>
                    {b.id}
                    {b.volumeInfo.title}
                     */}
                    
                
                {/* <p>Authors: {b.volumeInfo.authors ? b.volumeInfo.authors.join(', ') : 'Unknown Author'}</p> */}
                {/* <img src={b.volumeInfo.imageLinks?.thumbnail} alt={b.volumeInfo.title} /> Display the book image */}
            {/* </div> */}
             {/* ))} */}
                {/* {books.items.map((b)=>(
                    <p key={b.id}> */}
                        {/* {b.volumeInfo.authors} */}
                   
                    {/* </p>    
                ))} */}

            </div>
        </>
    )
}