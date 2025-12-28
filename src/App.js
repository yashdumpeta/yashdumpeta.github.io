import React, { useEffect } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';

// Component to handle hash-based scroll on page load
const ScrollToHash = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  
  return null;
};

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experience" element={<Navigate to="/#experience" replace />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
