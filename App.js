import React from 'react';
import './App.css';
import LandingPage from './src/pages/LandingPage'
import ExperiencePage from './src/pages/ExperiencePage';
import ProjectPage from './src/pages/Projects';
import Header from './src/components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return ( 
    <div className="app-container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/projects" element={<ProjectPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
