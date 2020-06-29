import React from 'react';
import PropTypes from 'prop-types';

import { PROPS } from '../../consts/component-props';
import { WindIcon } from './components/Wind';
import { SunIcon } from './components/Sun';
import { RainDrop } from './components/RainDrop';

const getIconByType = (type) => ({
  [PROPS.ICON.WIND]: WindIcon,
  [PROPS.ICON.SUN]: SunIcon,
  [PROPS.ICON.RAINDROP]: RainDrop,
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
