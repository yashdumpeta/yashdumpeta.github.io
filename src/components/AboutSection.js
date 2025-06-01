import React from 'react'
import './AboutSection.css'


const AboutSection = () => {

    const direct_to_about_section = () => {
        document.getElementById('skill-container').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="section about-section">
            <div id="about-container">
                <div className="morse-pattern">
                    <div className="dot"></div>
                    <div className="dot space"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot space"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot space"></div>
                    <div className="dot"></div>
                    <div className="dot space"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="morse-pattern">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot space"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot space"></div>
                    <div className="dot"></div>
                    <div className="dot space"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <p id='description'>
                    <strong><span id='name-highlight'>Yash Dumpeta</span></strong>
                    <br />
                    <span id='degree-text'>B.S.E in Computer Science and Engineering</span>
                    <br />
                    <br />
                    <span id='about-text'>I'm interested in building AI-driven solutions to demanding and challenging problems.</span>
                    <br />
                    <br />
                    <span id='about-text'>Passionate about working at the intersection of Tech and Entrepreneurship, a place where I can thrive through my range of coursework and practical experience in both domains.</span>
                    <br />
                    <br />
                </p>
                <button className="scroll_to_about" onClick={direct_to_about_section}><strong> ⌄ </strong></button>
            </div>
        </div>
    )
}

export default AboutSection
