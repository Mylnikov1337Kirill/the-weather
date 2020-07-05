import React from 'react';
import PropTypes from 'prop-types';

import { PROPS } from '../../consts/component-props';
import { WindIcon } from './components/SmileyWind';
import { SunIcon } from './components/SmileySun';
import { SmileyRainDrop } from './components/SmileyRainDrop';
import { SimpleMoon } from './components/SimpleMoon';
import { SimpleSun } from './components/SimpleSun';
import { Star } from './components/Star';
import { Clouds } from './components/Clouds';
import { Clouds1 } from './components/Clouds1';

const getIconByType = (type) => ({
  [PROPS.ICON.WIND]: WindIcon,
  [PROPS.ICON.SUN]: SunIcon,
  [PROPS.ICON.RAINDROP]: SmileyRainDrop,
  [PROPS.ICON.SIMPLE_MOON]: SimpleMoon,
  [PROPS.ICON.SIMPLE_SUN]: SimpleSun,
  [PROPS.ICON.STAR]: Star,
  [PROPS.ICON.CLOUDS]: Clouds,
  [PROPS.ICON.CLOUDS1]: Clouds1
})[type];

const Icon = ({ type, className, style }) => {
  try {
    const Component = getIconByType(type);

    return <Component className={ className } style={ style } />
  } catch (e) {
    console.error(`icon with type ${type} has no appropriate component`);
    return null;
  }
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.values(PROPS.ICON))
};

export { Icon };
