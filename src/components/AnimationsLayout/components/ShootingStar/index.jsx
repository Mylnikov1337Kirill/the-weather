import React from 'react';

import { Icon } from '../../../Icon';

import { getRandomBetween } from '../../../../utils/random';

import { PROPS } from '../../../../consts/component-props';

import styles from './styles/ShootingStar.module.css';

const randomizeStyles = () => {
  const size = getRandomBetween(3, 6);
  const rightOffsetStart = getRandomBetween(10, 90);

  return {
    width: `${size}vw`,
    height: `${size}vh`,
    right: `${rightOffsetStart}%`,
    top: `${getRandomBetween(1, 30) * getRandomBetween(1, 3)}%`,
  }
};

const ShootingStar = () => {
  return (
    <Icon type={ PROPS.ICON.STAR } className={ styles.wrapper } style={ { ...randomizeStyles() }} />
  );
};


export { ShootingStar };
