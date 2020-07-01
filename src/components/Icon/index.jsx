import React from 'react';
import PropTypes from 'prop-types';

import { PROPS } from '../../consts/component-props';
import { WindIcon } from './components/SmileyWind';
import { SunIcon } from './components/SmileySun';
import { SmileyRainDrop } from './components/SmileyRainDrop';

const getIconByType = (type) => ({
  [PROPS.ICON.WIND]: WindIcon,
  [PROPS.ICON.SUN]: SunIcon,
  [PROPS.ICON.RAINDROP]: SmileyRainDrop,
})[type];

const Icon = ({ type, className }) => {
  try {
    const Component = getIconByType(type);

    return <Component className={ className } />
  } catch (e) {
    console.error(`icon with type ${type} has no appropriate component`);
    return null;
  }
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.values(PROPS.ICON))
};

export { Icon };
