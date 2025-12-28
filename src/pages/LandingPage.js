import React from 'react';
import './LandingPage.css';
import prof2 from '../assets/images/prof-pic2.jpg';
import SkillSection from '../components/SkillSection';
import { FaArrowRight } from 'react-icons/fa6';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="bento-grid">
        {/* Identity Card */}
        <div className="bento-card identity-card">
          <h1 className="name">Yash Dumpeta</h1>
          <p className="college serif">C.S.E @ University of Michigan</p>
          <div className="bio-container">
            <p className="bio-text">
                I'm a Full-Stack Developer with a focus on Frontend. I specialize in creating engaging user interfaces and building robust AI-driven applications.
            </p>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bento-card profile-card">
          <img src={prof2} alt="Yash Dumpeta" className="profile-img" />
        </div>

        {/* Skills Card */}
        <div className="bento-card skills-card">
          <h2 className="card-title serif">Skills</h2>
          <SkillSection isBento />
        </div>

        {/* Resume Card */}
        <div className="bento-card resume-card">
          <div className="resume-content">
            <h2 className="card-title serif">Resume</h2>
            <p>More details about my career</p>
          </div>
          <a href="/YD - Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            Open <FaArrowRight />
          </a>
        </div>

        {/* Experience Link Card */}
        <div className="bento-card cta-card">
          <h2 className="card-title serif">My Projects</h2>
          <p>Check out what I've been building lately.</p>
          <a href="/projects" className="cta-link">
            View Projects <FaArrowRight />
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default LandingPage;
