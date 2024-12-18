import { useNavigate } from "react-router-dom"
import SearchBook from "../Components/SearchBook";
import Navbar from "../Components/Navbar";

export default function BookSearchPage() {

    const navigate = useNavigate();

    return (
        <div>
            <button
                onClick={() => navigate('/home')}
                className="back-button"
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <Navbar />
            <SearchBook />
        </div>
    )
}