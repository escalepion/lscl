import React from 'react';

const GameCard = (props) => {
  const { data = {} } = props;

  return (
    <div className="gameCard">
      <img className="gameCard__image" src={data.image} alt="gamecard" />
      <p className="gameCard__title">{data.title1}</p>
      <p className="gameCard__title">{data.title2}</p>
      <span className="gameCard__main-price">{data.price}</span>
      <span className="gameCard__discount-price">{data.price}</span>
      <span className="gameCard__off-price">{data.discount}</span>
      <button className="gameCard__button">Pre Order</button>
    </div>
  );
};

export default GameCard;
