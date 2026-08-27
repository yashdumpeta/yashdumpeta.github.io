import React from 'react';
import '../components/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-text">
            Designed &amp; Developed by <span className="footer-author">Yash Dumpeta</span>
          </p>
          <p className="footer-subtext">
            Built with React &amp; Tailwind principles
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
