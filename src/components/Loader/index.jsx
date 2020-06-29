import React from 'react';

import { Icon } from '../Icon';

import { PROPS } from '../../consts/component-props';

import styles from './styles/Loader.module.css';

const Loader = () => (
  <div className={ styles.wrapper }>
    <div className={ styles.inner }>
      <div className={ styles.front }>
        <Icon type={ PROPS.ICON.SUN } className={ `${styles.first} ${styles.icon}`}/>
        <Icon type={ PROPS.ICON.RAINDROP } className={ `${styles.second} ${styles.icon}`}/>
      </div>
      <div className={ styles.back }>
        <Icon type={ PROPS.ICON.WIND } className={ `${styles.icon} `} />
      </div>
    </div>
  </div>
);

export { Loader };
