
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
// import SearchBook from './Components/SearchBook'
import BookSearchPage from './Pages/BookSearchPage'


function App() {
  // const [count, gitsetCount] = useState(0)

  return (
    <>
     {/* <SearchBook /> */}
     <Router>
        <Routes>
          <Route path='/' element = { <BookSearchPage />}>
          </Route>
        </Routes>
     </Router>
     {/* <BookSearchPage /> */}
     {/* helloh */}
    </>
  )
}

export default App

