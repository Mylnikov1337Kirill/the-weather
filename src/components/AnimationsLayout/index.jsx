import React, { useContext, useState, useEffect } from 'react';

import { Icon } from '../Icon';

import { ThemeContext } from '../App';

import { THEMES } from '../../consts/themes';

import { getRandomBetween } from '../../utils/random';

import styles from './styles/AnimationsLayout.module.css';
import { Store } from '../../services/storage';
import { PROPS } from '../../consts/component-props';

const randomizeStyles = (theme) => {
  const size = theme === THEMES.NIGHT ? getRandomBetween(3, 6) : getRandomBetween(25, 38);

  const { right, top } = Store.generateCoords();

  return {
    width: `${size}vw`,
    height: `${size}vh`,
    right: `${right}%`,
    top: `${top}%`,
  }
};

const AnimationsLayout = () => {
  const { value: theme } = useContext(ThemeContext);
  const [objectsCount, setObjectsCount] = useState(theme === THEMES.NIGHT ? getRandomBetween(17, 26) : getRandomBetween(2, 3));

  useEffect(() => {
    Store.clearAnimationLayoutPoints();
    setObjectsCount(theme === THEMES.NIGHT ? getRandomBetween(17, 26) : getRandomBetween(2, 3));
  }, [theme]);

  if (theme === THEMES.NIGHT) {
    return (
      <div className={ styles.wrapper }>
        {
          [...Array(objectsCount).keys()].map(k => (
            <Icon key={ k } type={ PROPS.ICON.STAR } className={ styles.object } style={ { ...randomizeStyles(theme) } } />
          ))
        }
      </div>
    );
  }

  return (
    <div className={ styles.wrapper }>
      {
        [...Array(objectsCount).keys()].map(k => (
          <Icon key={ k } type={ PROPS.ICON.CLOUDS } className={ styles.object } style={ { ...randomizeStyles(theme) } } />
        ))
      }
      {
        [...Array(objectsCount).keys()].map(k => (
          <Icon key={ k } type={ PROPS.ICON.CLOUDS1 } className={ styles.object } style={ { ...randomizeStyles(theme) } } />
        ))
      }
    </div>
  );
};

export { AnimationsLayout };
