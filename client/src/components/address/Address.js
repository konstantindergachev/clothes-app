import React from 'react';
import image from '../../images/sprite.svg';
import './Address.scss';

const Address = () => {
  return (
    <ul className="address__list">
      <li className="address__item">
        <p className="contact__link">
          <svg className="address__svg">
            <use xlinkHref={`${image}#globe`} />
          </svg>
          <span>Европа - Украина</span>
        </p>
      </li>
      <li className="address__item">
        <p className="contact__link">
          <svg className="address__svg">
            <use xlinkHref={`${image}#home`} />
          </svg>
          <span>61022 Харьков, ул. Клочковская 101-А</span>
        </p>
      </li>
      <li className="address__item">
        <a
          href="https://mail.google.com"
          target="_blank"
          className="contact__link"
          rel="noopener noreferrer"
        >
          <svg className="address__svg">
            <use xlinkHref={`${image}#email`} />
          </svg>
          <span>dergachevkonstantin@gmail.com</span>
        </a>
      </li>
    </ul>
  );
};

export default Address;
