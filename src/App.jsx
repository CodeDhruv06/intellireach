import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/loading_screen.jsx'
import Home from './pages/home.jsx'
import {About} from './pages/about.jsx'
import {Contact} from './pages/contact.jsx'
import {Services} from './pages/services.jsx'
import {Blogs} from './pages/blogs.jsx'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loading" element={<LoadingScreen/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
