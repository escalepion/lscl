import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header-container">
        <nav className="navbar-nav">
          <div className="navbar__pp">
            <img src={require('../assets/avatars/black-pp.png')} alt="avatar" />
          </div>
          <ul className="navbar__list">
            <li className="active">
              <img src={require('../assets/icn-home.png')} alt="playstore" />
              <a href="/">Home</a>
            </li>
            <li><img src={require('../assets/inc-games.png')} alt="playstore" /><a href="/">Social</a></li>
            <li><img src={require('../assets/inc-market.png')} alt="playstore" /><a href="/">Market</a></li>
            <li><img src={require('../assets/inc-tournements.png')} alt="playstore" /><a href="/">Toutnements</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
