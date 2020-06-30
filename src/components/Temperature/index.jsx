import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab';

const Temperature = ({ forecast: { name, measures: { temp, feels_like }, weather_description, updatedAt } }) => (
  <Tab>
    <h1>{ name }</h1>
    <h2>{ temp } &#8451;</h2>
    <span>{ weather_description }, ощущается как { feels_like } &#8451;</span>
  </Tab>
);

Temperature.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export { Temperature };
