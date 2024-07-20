import React from 'react'
import './AboutSection.css'


const AboutSection = () => {
    return (
        <div className="section about-section">
            <div id="about-container">
                <h1 className="title-header"> 👋 About me </h1>
                <p id='description'>
                    My name is <strong><span id='name-highlight'>Yash Dumpeta</span></strong> and I'm currently a <span id='junior-highlight'>Junior</span> pursuing a B.S.E. in Computer Science @ <strong>University of Michigan in Ann Arbor</strong> - 〽️.
                    <br />
                    <br />
                    An aspiring <strong>Software Engineer</strong> with proficiency in a <strong>range of programming languages,</strong> both in <strong>front-end & back-end.</strong>
                    <br />
                    <br />
                    Passionate about building technology-driven solutions that are both functional and enhance user experience. 
                </p>
            </div>
        </div>
    )
}

export default AboutSection
