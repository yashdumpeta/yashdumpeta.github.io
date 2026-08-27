import React from 'react';
import '../components/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-title">Yash Dumpeta</p>
          <p className="footer-sys-status">
            <span className="sys-key">sys.status:</span> <span className="sys-value">open to early-career roles</span>
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-built-with">
            <span className="sys-key">built_with:</span> [react, tailwind, next] &bull; &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
