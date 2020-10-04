import React from 'react';

const GameHubListItem = (props) => {
  const { info = {} } = props;

  return (
    <div className="gamehub-list-item">
      <div className="gamehub-list-item__wrapper">
        <img className="gamehub-list-item__img" src={info.img} alt="avatar" />
        <div  className="gamehub-list-item__content">
          <span className="gamehub-list-item__content__title">{info.title}</span>
          <span className="gamehub-list-item__content__desc">{info.desc}</span>
        </div>
      </div>
      {info.icon && (
        <img className="gamehub-list-item__add-user" src={require("../assets/add-user-icon.png")} alt="addUser" />
      )}
    </div>
  );
};

export default GameHubListItem;
