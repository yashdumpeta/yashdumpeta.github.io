import React from 'react'
import './IntroSection.css'
import prof from '../assets/images/prof.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const IntroSection = () => {
    const direct_to_about_section = () => {
        document.getElementById('about-container').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="section intro-section" id='intro-box'>
            <div className="intro-container">
                <div className="intro-content">
                    <h1 className='name'>Yash Dumpeta</h1>
                    <p className='college'>Junior studying Computer Science @ University of Michigan - Ann Arbor </p>
                    <div id='socials'>
                        <a href='https://github.com/yashdumpeta'>
                            <FaGithub id='github-logo' />
                        </a>
                        <a href='https://www.linkedin.com/in/ydumpeta/'>
                            <FaLinkedin id='linkedin-logo' />
                        </a>
                    </div>
                    <button className="scroll_to_about" onClick={direct_to_about_section}><strong> ⌄ </strong></button>
                </div>
                <div className="intro-image">
                    <img src={prof} alt="Yash Dumpeta" />
                </div>
            </div>
        </div>
    )
}

export default IntroSection