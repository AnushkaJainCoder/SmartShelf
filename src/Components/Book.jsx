import DropDown from "./DropDown";
import '../index.css'


export default function Book({b, title, author, image}){
    return(
        
        <div className="card">
             <img src={image} />
            <div>{title}</div>
            <div>{author}</div>
           
            <DropDown item = {b} />
        </div>
           

        
    )
}