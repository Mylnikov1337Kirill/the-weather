import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab';
import { BreadCrumbs } from '../BreadCrumbs';

import styles from './styles/Carousel.module.css';

const getProperEvent = (e) => e.changedTouches ? e.changedTouches[0] : e;

const defaultTouchEventCoords = { start: 0, move: 0 };

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const touchEventCoords = useRef({ ...defaultTouchEventCoords });
  const itemsCount = children.length;
  const lock = (e) => {
    touchEventCoords.current = { ...defaultTouchEventCoords, start: getProperEvent(e).clientX };

    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
  };

  const release = (e) => {
    const startValue = touchEventCoords.current.start;

    if(startValue || startValue === 0) {
      const dx = getProperEvent(e).clientX - startValue;
      const s = Math.sign(dx);

      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);

      if ((currentSlide === 0 && s > 0) || (currentSlide === itemsCount - 1 && s < 0)) {
        return;
      }

      setCurrentSlide(currentSlide - s);
    }
  };

  const move = (e) => {
    // rethink this next time
    touchEventCoords.current = { ...touchEventCoords.current, move: getProperEvent(e).clientX };
  };

  useEffect(() => {
    document.addEventListener('mousedown', lock);
    document.addEventListener('touchstart', lock);
    document.addEventListener('mouseup', release);
    document.addEventListener('touchend', release);

    return () => {
      document.removeEventListener('mousedown', lock);
      document.removeEventListener('touchstart', lock);
      document.removeEventListener('mouseup', release);
      document.removeEventListener('touchend', release);
    }
  });

  const appTranslateAttr = { transform: `translate(${currentSlide * -100 }%)`};

  return (
    <Tab>
      <div style={ { ...appTranslateAttr } } className={ styles.carousel }>
        { children }
      </div>
      <div className={ styles.breadcrumbs }>
        <BreadCrumbs value={ currentSlide } onChange={ setCurrentSlide } items={ itemsCount } />
      </div>
    </Tab>
  )
};

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Carousel };
