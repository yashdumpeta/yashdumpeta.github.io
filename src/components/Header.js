import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import './Header.css';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'projects'];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="header-wrapper">
            <nav className="nav-pill">
                <div className="nav-left">
                    <a className="nav-name" href="#home" onClick={scrollToTop}>
                        Yash Dumpeta
                    </a>
                </div>
                <div className="nav-right">
                    <div className="nav-links">
                        <a 
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                            href="#home" 
                            onClick={(e) => scrollToSection(e, 'home')}
                        >
                            Home
                        </a>
                        <a 
                            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} 
                            href="#experience" 
                            onClick={(e) => scrollToSection(e, 'experience')}
                        >
                            Experience
                        </a>
                        <a 
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} 
                            href="#projects" 
                            onClick={(e) => scrollToSection(e, 'projects')}
                        >
                            Projects
                        </a>
                        <a className="nav-link" href="/YD - Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                    <div className="social-icons">
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
                </div>
            </nav>
        </div>
    );
}

export default Header;
