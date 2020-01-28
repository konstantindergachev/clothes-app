import React from 'react';
import Address from '../../components/address/Address';
import Socials from '../../components/socials/Socials';
import './ContactPage.scss';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-page__left">
        <h2 className="contact__subtitle">Адрес:</h2>
        <Address />
        <h2 className="contact__subtitle">Социальные сети:</h2>
        <Socials />
      </div>
      <div className="contact-page__right">
        <h2 className="contact__subtitle">Карта:</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.352371601221!2d36.21467041584549!3d50.00475032725963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a11c0f88a23b%3A0x7cca87f9ebfee48c!2z0JrQu9C-0YfQutC-0LLRgdC60LDRjyDRg9C7LiwgMTAx0JAsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1580145407421!5m2!1sru!2sua"
          allowFullScreen=""
          title="This is a unique title"
        />
      </div>
    </div>
  );
};

export default ContactPage;
