import React from 'react'
import './LandingPage.css'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import '../components/footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const LandingPage = () => {

  const scrollTop = () => {
    document.getElementById('intro-box').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-container">
      <IntroSection />
      <AboutSection />
      <SkillSection />
      <div className='footer-container'>
        <div id='footer-left'>
          <button id='scroll-top' onClick={scrollTop}> ↗</button>
        </div>
        <div id='footer-name'> Yash Dumpeta</div>
        <div id='footer-right'>
          <a href='https://github.com/yashdumpeta' target='_blank'>
            <FaGithub id='github-logo' />
          </a>
          <a href='https://www.linkedin.com/in/ydumpeta/' target='_blank'>
            <FaLinkedin id='linkedin-logo' />
          </a>
        </div>
      </div>
    </div>
  );
}



export default LandingPage
