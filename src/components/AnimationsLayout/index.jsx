import React, { useContext, useState, useEffect } from 'react';

import { ThemeContext } from '../App';

import { ShootingStar } from './components/ShootingStar';

import { THEMES } from '../../consts/themes';

import { getRandomBetween } from '../../utils/random';

import styles from './styles/AnimationsLayout.module.css';
import { Store } from '../../services/storage';

const randomizeStyles = () => {
  const size = getRandomBetween(3, 6);

  const { right, top } = Store.generateCoords();

  return {
    width: `${size}vw`,
    height: `${size}vh`,
    right: `${right}%`,
    top: `${top}%`,
  }
};

const AnimationsLayout = () => {
  const [objectsCount, setObjectsCount] = useState(getRandomBetween(14, 23));
  const { value } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      Store.clearAnimationLayoutPoints();
      setObjectsCount(getRandomBetween(14, 23));
    }, 1000 * 90);

    return () => clearTimeout(timer);
  }, []);

  if (value === THEMES.NIGHT) {
    return (
      <div className={ styles.wrapper }>
        {
          [...Array(objectsCount).keys()].map(k => (
            <ShootingStar key={ k } style={ { ...randomizeStyles() }} />
          ))
        }
      </div>
    );
  }

  return null;
};

export { AnimationsLayout };
