import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'
import './App.css'
import LoadingScreen from './components/loading_screen.jsx'
import Home from './pages/home.jsx'
import {About} from './pages/about.jsx'
import {Contact} from './pages/contact.jsx'
import {Services} from './pages/services.jsx'
import {Blogs} from './pages/blogs.jsx'
import {Navbar} from './components/navbar.jsx'

// Module-level variable to track if initial loading is done
let hasLoadedOnce = false;

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(!hasLoadedOnce && location.pathname === '/');
  
  const handleLoadingComplete = () => {
    hasLoadedOnce = true;
    setLoading(false);
  };

  // Show loading screen only on home page first visit
  if (loading && location.pathname === '/') {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <Navbar loading={loading} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/loading" element={<LoadingScreen/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
