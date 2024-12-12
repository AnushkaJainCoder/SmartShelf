import { useNavigate } from "react-router-dom"
import SearchBook from "../Components/SearchBook";

export default function BookSearchPage() {

    const navigate = useNavigate();

    return (
        <>
            <button
                onClick={() => navigate('/')}
                className="back-button"
            >
                <i className="fas fa-arrow-left"></i>
            </button>
            <SearchBook />
        </>
    )
}