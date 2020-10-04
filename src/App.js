import React, { useState } from 'react';

import './styles/main.scss';

import carouselItems from './datas/carouselItems';
import Top from './layouts/Top';
import Navbar from './layouts/NavBar';
import Carousel from './layouts/Carousel';
import GamesHub from './layouts/GamesHub';
import ContactUs from './layouts/ContactUs';
import Footer from './layouts/Footer';
import Bottom from './layouts/Bottom';

function App() {
  const initialNextCarouselItem = carouselItems.length === 1 ? false : carouselItems[2];
  const [activeCarouselItem, setActiveCarouselItem] = useState(1);
  const [currentCarouselItem, setCurrentCarouselItem] = useState(carouselItems[1]);
  const [previousCarouselItem, setPreviousCarouselItem] = useState(carouselItems[0]);
  const [nextCarouselItem, setNextCarouselItem] = useState(initialNextCarouselItem);

  const setCarouselItem = (index) => {
    setActiveCarouselItem(index);

    //to make the carousel fadein enable 
    setCurrentCarouselItem(false);
    setTimeout(() => {
      setCurrentCarouselItem(carouselItems[index]);
    }, 0);
    
    if(index !== 0) {
      setPreviousCarouselItem(carouselItems[index - 1]);
    }else{
      setPreviousCarouselItem(false);
    }
    if(index !== carouselItems.length-1) {
      setNextCarouselItem(carouselItems[index+1]);
    }else{
      setNextCarouselItem(false);
    }
  }
  const onPrevClick = () => {
    if(activeCarouselItem !== 0) {
      setCarouselItem(activeCarouselItem-1)
    }
  }
  const onNextClick = () => {
    if(activeCarouselItem !== carouselItems.length-1) {
      setCarouselItem(activeCarouselItem+1)
    }
  }
  return (
    <div>
      <Top />
      <Navbar />
      <Carousel
        setCarouselItem={setCarouselItem}
        carouselItems={carouselItems}
        activeCarouselItem={activeCarouselItem}
        currentCarouselItem={currentCarouselItem}
        previousCarouselItem={previousCarouselItem}
        nextCarouselItem={nextCarouselItem}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
      <GamesHub />
      <ContactUs />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
