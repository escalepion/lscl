import React from 'react';

const Carousel = (props) => {
  const {
    carouselItems = [],
    activeCarouselItem = 0,
    setCarouselItem,
    currentCarouselItem,
    previousCarouselItem,
    nextCarouselItem,
    onPrevClick,
    onNextClick
  } = props;

  return (
    <div className="carousel">
      {previousCarouselItem && (
        <div className="carousel__preImg">
          <img src={previousCarouselItem.img} alt="playstore" />
        </div>
      )}
      {currentCarouselItem ? (
        <div className="carousel__img">
          <span onClick={onPrevClick} className="carousel__button prev">PREV</span>
          <img src={currentCarouselItem && currentCarouselItem.img} alt="playstore" />
          <div className="carousel__text-container">
            <span className="carousel__text">{currentCarouselItem && currentCarouselItem.text}</span>
          </div>
          <div className="carousel__bullets">
            {carouselItems.map((element, i) => {
              let bulletClass = 'carousel__bullet';
              if (i === activeCarouselItem) {
                bulletClass = 'carousel__bullet active'
              }
              return (
                <div onClick={() => setCarouselItem(i)} key="i" className={bulletClass} />
              );
          })}
          </div>
          <span onClick={onNextClick} className="carousel__button next">NEXT</span>
          <div className="carousel__img__shadow"></div>
        </div>
      ) : undefined}
      <div className="carousel__level1"></div>
      <div className="carousel__level2"></div>
      {nextCarouselItem && (
        <div className="carousel__nextImg">
          <img src={nextCarouselItem.img} alt="playstore" />
        </div>
      )}
    </div>
  );
};

export default Carousel;
