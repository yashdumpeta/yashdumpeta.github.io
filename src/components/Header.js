import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    const back_home = (event) => {
        if (location.pathname === '/') {
            event.preventDefault(); // Prevent the default link behavior
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="main-container">
            <header>
                <nav className="navbar">
                    <div className="navbar-left">
                        <Link className="home-button" to="/" onClick={back_home}>
                            yash d
                        </Link>
                    </div>
                    <div className="navbar-right">
                        <Link className='home' to="/">Home</Link>
                        <Link className='Experience' to="/experience">Experience</Link>
                        <Link className='Projects' to="/projects">Projects</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
