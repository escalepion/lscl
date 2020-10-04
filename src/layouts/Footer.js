import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer__container">
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <span className="footer__title">LA3EB</span>
                <span className="footer_list-item">About Us</span>
                <span className="footer_list-item">Careers</span>
                <span className="footer_list-item">Newsroom</span>
                <span className="footer_list-item">Contact</span>
              </div>
              <div className="col-4">
                <span className="footer__title">HELP</span>
                <span className="footer_list-item">Support Hub</span>
                <span className="footer_list-item">How to activate Games</span>
                <span className="footer_list-item">Terms & Conditions</span>
                <span className="footer_list-item">Privacy & Cookies</span>
                <span className="footer_list-item">Returns & Refunds</span>
              </div>
              <div className="col-5">
                <span className="footer__title">BUSINESS</span>
                <span className="footer_list-item">Business Center</span>
                <span className="footer_list-item">Selling on LA3EB</span>
                <span className="footer_list-item">Developer & Publisher</span>
                <span className="footer_list-item">Marketing Partnership</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-5">
                <div className="getapp">
                  <div className="getapp__avatar">
                    <img src={require('../assets/avatars/black-pp.png')} alt="avatar" />
                  </div>
                  <div className="getapp__content">
                    <span className="getapp__title">Install the app</span>
                    <span className="getapp__desc">Get great deals on games wherever you go!</span>
                  </div>
                </div>
              </div>
              <div className="col-4 getapp__playstore-wrapper">
                <div className="getapp__playstore">
                  <div className="getapp__playstore__img">
                    <img src={require('../assets/playstore.png')} alt="playstore" />
                  </div>
                  <div className="getapp__playstore__content">
                    <span className="getapp__playstore__text">Get it on</span>
                    <span className="getapp__playstore__text">Google Play©</span>
                  </div>
                </div>
              </div>
              <div className="col-3 getapp__playstore-wrapper">
                <div className="getapp__playstore">
                  <div className="getapp__playstore__img">
                    <img src={require('../assets/apple.png')} alt="playstore" />
                  </div>
                  <div className="getapp__playstore__content">
                    <span className="getapp__playstore__text">Download on the</span>
                    <span className="getapp__playstore__text">App Store®</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
