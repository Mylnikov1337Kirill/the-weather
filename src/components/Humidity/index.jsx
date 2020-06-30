import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab';

const Humidity = ({ forecast }) => (
  <Tab>
    <h1>Влажность</h1>
    <h2>{ forecast.measures.humidity }%</h2>
  </Tab>
);

Humidity.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export { Humidity };
