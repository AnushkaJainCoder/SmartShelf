
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import BookSearchPage from './Pages/BookSearchPage'

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path='/search' element = { <BookSearchPage />}>
          </Route>
        </Routes>
     </Router>
    </>
  )
}

export default App

