import DropDown from "./DropDown";
import '../index.css'

export default function Book({ b, title, author, image }) {
    // const auth = 

    return (
        <div className="card">
            <img src={image} />
            <DropDown book={b} />
            <div style={{fontSize: '20px'}}>{title}</div>
            <div className="auth" style={{ color: 'rgb(0 255 241)', fontSize: '12px',  fontWeight: '400'}}><i>~{author}</i></div>
        </div>
    )
}