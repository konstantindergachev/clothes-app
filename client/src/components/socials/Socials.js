import React from 'react';
import image from '../../images/sprite.svg';
import './Socials.scss';

const Socials = () => {
  return (
    <ul className="social__list">
      <li className="social__item">
        <a
          href="https://www.facebook.com/people/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD-%D0%94%D0%B5%D1%80%D0%B3%D0%B0%D1%87%D1%91%D0%B2/100003527152401"
          target="_blank"
          className="contact__link"
          rel="noopener noreferrer"
        >
          <svg className="social__svg">
            <use xlinkHref={`${image}#facebook`} />
          </svg>
          <span>Мой facebook</span>
        </a>
      </li>
      <li className="social__item">
        <a
          href="https://github.com/konstantindergachev"
          target="_blank"
          className="contact__link"
          rel="noopener noreferrer"
        >
          <svg className="social__svg">
            <use xlinkHref={`${image}#github`} />
          </svg>
          <span>Мой github</span>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
