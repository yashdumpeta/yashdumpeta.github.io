import React from 'react'
import '../components/footer.css'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="footer-content">
        <div className='footer-name serif'>Yash Dumpeta</div>
        <div className='footer-socials'>
          <a href='https://github.com/yashdumpeta' target='_blank' rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/ydumpeta/' target='_blank' rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href='mailto:ydumpeta@gmail.com' className="social-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <p>&copy; 2025 Yash Dumpeta. All rights reserved.</p>
      </div> */}
    </footer>
  )
}

export default Footer
