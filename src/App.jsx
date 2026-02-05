
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx' 
import './App.css'

export default function App() {
  return (

      <>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/gallery">Gallery</Link>{' '}
          <Link to="/about">About</Link>{' '}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} /> 
        </Routes>
      </>

 
  )
}

