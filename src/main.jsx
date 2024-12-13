import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BookProvider from './Book Provider/BookProvider.jsx'



createRoot(document.getElementById('root')).render(
  <BookProvider >
    <App />
  </BookProvider>
)
