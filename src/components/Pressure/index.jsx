import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab';

const Pressure = ({ forecast: { measures: { pressure } } }) => {
  return (
    <Tab>
      <h1>А/д</h1>
      <h2>{ pressure }</h2>
      <span>мм рт ст</span>
    </Tab>
  )
};

Pressure.propTypes = {
  forecast: PropTypes.object.isRequired
};

export { Pressure };
