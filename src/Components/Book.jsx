import DropDown from "./DropDown";
import '../index.css'

export default function Book({ b, title, author, image }) {
    // const auth = 

    return (
        <div className="card">
            <img src={image} />
            <DropDown book={b} />
            <div>{title}</div>
            <div className="auth" style={{ color: 'rgb(225 53 53)' }}>{author}</div>
        </div>
    )
}