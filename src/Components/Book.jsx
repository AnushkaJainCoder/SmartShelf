import DropDown from "./DropDown";
import '../index.css'


export default function Book({b, title, author, image}){
    // const han
    return(
        
        <div className="card">
             
             <img src={image} />
             <DropDown  book = {b}  />
            <div>{title}</div>
            <div className="auth" style={{color: 'rgb(182 181 181)'}}>{author}</div>
           
           
        </div>
           

        
    )
}