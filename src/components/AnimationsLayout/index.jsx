import React, { useContext, useState, useEffect } from 'react';

import { ThemeContext } from '../App';

import { ShootingStar } from './components/ShootingStar';

import { THEMES } from '../../consts/themes';

import { getRandomBetween } from '../../utils/random';

import styles from './styles/AnimationsLayout.module.css';

const AnimationsLayout = () => {
  const [objectsCount, setObjectsCount] = useState(getRandomBetween(5, 9));
  const { value } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => setObjectsCount(getRandomBetween(5, 9)), 1000 * 90);

    return () => clearTimeout(timer);
  }, []);

  if (value === THEMES.NIGHT) {
    return (
      <div className={ styles.wrapper }>
        {
          [...Array(objectsCount).keys()].map(k => (
            <ShootingStar key={ k } />
          ))
        }
      </div>
    );
  }

  return null;
};

export { AnimationsLayout };
