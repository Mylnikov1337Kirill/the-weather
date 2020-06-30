import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Carousel.module.css';

const getProperEvent = (e) => e.changedTouches ? e.changedTouches[0] : e;

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const startPointCoord = useRef({});
  const lock = (e) => {
    startPointCoord.current.value = getProperEvent(e).clientX;
  };

  const move = (e) => {
    const startValue = startPointCoord.current.value;

    if(startValue || startValue === 0) {
      const dx = getProperEvent(e).clientX - startValue;
      const s = Math.sign(dx);

      if ((currentSlide === 0 && s > 0) || (currentSlide === 2 && s < 0)) {
        return startPointCoord.current.value = null;
      }

      setCurrentSlide(currentSlide - s);
      startPointCoord.current.value = null;
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', lock);
    document.addEventListener('touchstart', lock);
    document.addEventListener('mouseup', move);
    document.addEventListener('touchend', move);

    return () => {
      document.removeEventListener('mousedown', lock);
      document.removeEventListener('touchstart', lock);
      document.removeEventListener('mouseup', move);
      document.removeEventListener('touchend', move);
    }
  });

  const appTranslateAttr = { transform: `translate(${currentSlide * -100 }%)`};

  return (
    <div className={ styles.carousel } style={ { ...appTranslateAttr } }>
      { children }
    </div>
  )
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Carousel };
