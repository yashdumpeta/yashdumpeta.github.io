import React from 'react'
import './AboutSection.css'


const AboutSection = () => {

    const direct_to_about_section = () => {
        document.getElementById('skill-container').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="section about-section">
            <div id="about-container">
                <h1 className="title-header"> 👋 About me </h1>
                <p id='description'>
                    <strong><span id='name-highlight'>Yash Dumpeta</span></strong> 
                    <br />
                    <span id='degree-text'>B.S.E in Computer Science and Engineering</span>
                    <br />
                    <br />
                    I'm interested in building AI-driven solutions to demanding and challenging problems
                    <br />
                    <br />
                    Passionate about working at the intersection of Tech and Entrepreneurship, a place where I can thrive through my range of coursework and practical experience in both domains. 
                    {/* An aspiring <strong>Software Engineer</strong> with proficiency in a <strong>range of programming languages,</strong> both in <strong>front-end & back-end.</strong> */}
                    <br />
                    <br />
                    {/* Passionate about building technology-driven solutions that are both functional and enhance user experience. */}
                </p>
                <button className="scroll_to_about" onClick={direct_to_about_section}><strong> ⌄ </strong></button>
            </div>
        </div>
    )
}

export default AboutSection
