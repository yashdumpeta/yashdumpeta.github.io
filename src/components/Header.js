import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaSun, FaMoon } from 'react-icons/fa6';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        if (typeof document !== 'undefined') {
            return document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'dark';
        }
        return 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) {}
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = ['home', 'experience', 'projects', 'skills'];
            const scrollPosition = window.scrollY + 120;

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
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={`minimal-header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
            <div className="header-inner">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="header-brand">
                    <span className="brand-dot"></span>
                    <span className="brand-name">Yash Dumpeta</span>
                </a>

                <nav className="header-nav">
                    <a
                        href="#home"
                        className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={(e) => scrollToSection(e, 'home')}
                    >
                        About
                    </a>
                    <a
                        href="#experience"
                        className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}
                        onClick={(e) => scrollToSection(e, 'experience')}
                    >
                        Experience
                    </a>
                    <a
                        href="#projects"
                        className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={(e) => scrollToSection(e, 'projects')}
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}
                        onClick={(e) => scrollToSection(e, 'skills')}
                    >
                        Skills
                    </a>
                </nav>

                <div className="header-actions">
                    <button
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? <FaSun className="btn-icon theme-sun" /> : <FaMoon className="btn-icon theme-moon" />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
