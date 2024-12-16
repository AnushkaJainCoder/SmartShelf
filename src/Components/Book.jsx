import DropDown from "./DropDown";
import '../index.css'


const Book = React.memo(({ b, title, author, image })  =>{
    // const auth = 

    return (
        <div className="card">
            <img src={image} />
            <DropDown book={b} />
            <div style={{fontSize: '20px'}}>{title}</div>
            <div className="auth" style={{ color: 'rgb(255 222 222)', fontSize: '12px', fontWeight: '700'}}><i>~{author}</i></div>
        </div>
    )
});

export default Book;