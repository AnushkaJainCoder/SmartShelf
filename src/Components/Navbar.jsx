import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
        <nav className="navbar"> 
            <div className="navbar-container"> 
                <Link to="/home" className="navbar-logo">Home</Link> 
                
                <Link to="/books" className="navbar-item">All Books</Link>
            </div>
        </nav>
        </>
        
    )
}