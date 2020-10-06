import React from 'react';

const Bottom = () => {
  return (
    <div className="bottom">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <span className="bottom_text">Copyright © 2020. All Rights Reserved.</span>
            <span className="bottom_text">Use of this Web site constitutes acceptance of the Terms and Conditions and Privacy policy. All</span>
            <span className="bottom_text">copyrights, trade marks, service marks belong to the corresponding owners.</span>
          </div>
          <div className="col-6">
            <div className="bottom__pay">
              <img className="bottom__pay__visa" src={require('../assets/visa.png')} alt="playstore" />
              <img className="bottom__pay__mastercard" src={require('../assets/mastercard.png')} alt="playstore" />
              <img src={require('../assets/paypal.png')} alt="playstore" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
