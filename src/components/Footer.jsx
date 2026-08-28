import React, { useState, useEffect } from 'react';
import '../components/footer.css';

const fullText = "open to early-career roles";

const Footer = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 75);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 15000); // Wait 15 seconds before deleting
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 1200); // Pause 1.2s before typing again
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-title">Yash Dumpeta</p>
          <p className="footer-sys-status">
            <span className="sys-key">sys.status:</span>{' '}
            <span className="sys-value">
              {displayText}
              <span className="terminal-cursor">▋</span>
            </span>
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-copyright">&copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
