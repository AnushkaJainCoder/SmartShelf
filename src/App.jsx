
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import BookSearchPage from './Pages/BookSearchPage'
import HomePage from "./Trash/Home";
import BookProvider from "./Book Provider/BookProvider";
import Shelf from "./Pages/Shelf";

function App() {
  return (
    <>
      <BookProvider>
        <Router>
          <Routes>
            <Route path='/books' element={<BookSearchPage />}>
            </Route>
          </Routes>

          <Routes>
            <Route path='/home' element={<Shelf />}>
            </Route>
          </Routes>

        </Router>
      </BookProvider>
    </>

  )
}

export default App

