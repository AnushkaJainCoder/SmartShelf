
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import BookSearchPage from './Pages/BookSearchPage'
import HomePage from "./Trash/Home";
import BookProvider from "./Book Provider/BookProvider";
import Shelf from "./Pages/Shelf";

function App() {
  return (
    <div className="background-image">
      <BookProvider>
        <Router>
          <Routes>
            <Route path='/books' element={<BookSearchPage />} />
            <Route path='/home' element={<Shelf />} />
            <Route path='/' element={<Navigate to='/home' replace />} />
          </Routes>
        </Router>
      </BookProvider>
    </div>

  )
}

export default App

