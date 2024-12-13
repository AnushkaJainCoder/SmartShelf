import DropDown from "./DropDown";
import '../index.css'

export default function Book({ b, title, author, image }) {
    // const auth = 

    return (
        <div className="card">
            <img src={image} />
            <DropDown book={b} />
            <div style={{fontSize: '20px'}}>{title}</div>
            <div className="auth" style={{ color: 'rgb(225 53 53)', fontSize: '12px'}}><i>~{author}</i></div>
        </div>
    )
}