import DropDown from "./DropDown";
import '../index.css'


export default function Book({b, title, author, image}){
    return(
        
        <div className="card">
            <div>{title}</div>
            <div>{author}</div>
            <img src={image} />
            <DropDown item = {b} />
        </div>
           

        
    )
}