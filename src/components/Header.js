import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const back_home = (event) => {
        if (location.pathname === '/') {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.querySelector('.menu-icon').classList.toggle('open');
    };

    return (
        <div className="header-container" id='header-id'>
            <header>
                <nav className="navbar">
                    <div className="navbar-left">
                        <Link className="home-button" to="/" onClick={back_home}>
                            Yash Dumpeta
                        </Link>
                    </div>
                    <div className={`navbar-right ${isMenuOpen ? 'show' : ''}`}>
                        <Link className='home' to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link className='Experience' to="/experience" onClick={() => setIsMenuOpen(false)}>Experience</Link>
                        <Link className='Projects' to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        ☰
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;