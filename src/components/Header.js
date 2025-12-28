import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import logoImage from '../assets/images/Gemini_Generated_Image_sjnrf1sjnrf1sjnr.png';
import './Header.css';

const Header = () => {
    const location = useLocation();

    const back_home = (event) => {
        if (location.pathname === '/') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="header-wrapper">
            <nav className="nav-pill">
                <div className="nav-left">
                    <Link className="nav-link home-link" to="/" onClick={back_home}>
                        <img src={logoImage} alt="Yash Dumpeta" className="logo-image" />
                    </Link>
                </div>
                <div className="nav-center">
                    <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                    <Link className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`} to="/experience">Experience</Link>
                    <Link className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">Projects</Link>
                    <a className="nav-link" href="/YD - Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>
                <div className="nav-right">
                    <a href="https://github.com/yashdumpeta" target="_blank" rel="noreferrer" className="social-icon">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/ydumpeta/" target="_blank" rel="noreferrer" className="social-icon">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/yashdumpeta" target="_blank" rel="noreferrer" className="social-icon">
                        <FaXTwitter />
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Header;
