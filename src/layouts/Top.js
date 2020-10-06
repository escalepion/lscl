import React from 'react';

const Top = () => {
  return(
    <div className="top">
      <div className="header-container">
        <div className="top__wrapper">
          <div className="top__input">
            <input type="text" placeholder="Search games, gears, accessories.." />
          </div>
          <div className="top__icons">
            <img src={require('../assets/icn-profile.png')} alt="playstore" />
            <img className="top__icons__wallet" src={require('../assets/icn-wallet.png')} alt="playstore" />
            <div className="top__seperator" />
            <div className="top__icons__bell">
              <img src={require('../assets/icn-bell.png')} alt="playstore" />
            </div>
            <img className="top__icons__wallet-2" src={require('../assets/icn-wallet.png')} alt="playstore" />
            <img className="top__icons__bag" src={require('../assets/icn-shopping.png')} alt="playstore" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Top;
