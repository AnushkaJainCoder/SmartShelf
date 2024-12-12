
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import BookSearchPage from './Pages/BookSearchPage'
import HomePage from "./Pages/Home";
import BookProvider from "./Components/BookProvider";
import Shelf from "./Pages/Shelf";

function App() {
  return (
    <>
    <BookProvider>
      <Router>
          <Routes>
            <Route path='/search' element = { <BookSearchPage />}>
            </Route>
          </Routes>
          {/* <Routes>
            <Route path='/' element = { <HomePage />}>
            </Route>
          </Routes> */}
          <Routes>
            <Route path='/' element = { <Shelf />}>
            </Route>
          </Routes>
          
      </Router>
     </BookProvider>
    </>
    
  )
}

export default App

