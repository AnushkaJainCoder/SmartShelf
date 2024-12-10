
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import BookSearchPage from './Pages/BookSearchPage'
import HomePage from "./Pages/Home";

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/search' element = { <BookSearchPage />}>
          </Route>
        </Routes>
        <Routes>
          <Route path='/' element = { <HomePage />}>
          </Route>
        </Routes>
     </Router>
    </>
  )
}

export default App

