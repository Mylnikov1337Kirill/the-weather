import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../../Icon';

import { PROPS } from '../../../../consts/component-props';

import styles from './styles/ShootingStar.module.css';

const ShootingStar = ({ style }) => {
  return (
    <Icon type={ PROPS.ICON.STAR } className={ styles.wrapper } style={ style } />
  );
};

ShootingStar.propTypes = {
  style: PropTypes.object.isRequired,
};

export { ShootingStar };
