import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="contact-us__wrapper">
          <span className="contact-us__title">Get your best games deals first</span>
          <div className="contact-us__input">
            <input placeholder="Enter your email" />
          </div>
          <button className="contact-us__subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
