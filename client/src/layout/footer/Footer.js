import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <h4 className="footer-left">
        &copy; {new Date().toISOString().split('-')[0]} Харьков
      </h4>
      <h4 className="footer-right">Гардероб</h4>
    </footer>
  );
};

export default Footer;
