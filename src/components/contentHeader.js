import React from 'react'

const ContentHeader = (props) => {
  const { title = '', description = '', buttonText = '', className: customClassName = '' } = props;

  return (
    <div className={`content-header ${customClassName}`}>
      <div className="content-header__wrapper">
        <div className="content-header__content">
          <h3 className="content-header__title">{title}</h3>
          <span className="content-header__description">{description}</span>
        </div>
        <button className="line-button">{buttonText}</button>
      </div>
      <div className="content-header__seperator" />
    </div>
  );
};

export default ContentHeader;
