import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer-left">&copy; {new Date().getFullYear()} Харьков</h4>
      <h4 className="footer-right">Гардероб</h4>
    </footer>
  );
};

export default Footer;
