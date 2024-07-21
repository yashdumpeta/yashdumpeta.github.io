import React from 'react'
import '../components/footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div id='footer-name'>Yash Dumpeta</div>
      <div id='footer-right'>
        <a href='https://github.com/yashdumpeta' target='_blank' rel="noopener noreferrer">
          <FaGithub id='github-logo' />
        </a>
        <a href='https://www.linkedin.com/in/ydumpeta/' target='_blank' rel="noopener noreferrer">
          <FaLinkedin id='linkedin-logo' />
        </a>
      </div>
    </footer>
  )
}

export default Footer