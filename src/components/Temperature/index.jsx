import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab';

const Temperature = ({ forecast }) => {
  return (
    <Tab>
      <h1>{ forecast.name }</h1>
      <h2>{ forecast.measures.temp } &#8451;</h2>
      <span>{ forecast.weather_description }, ощущается как { forecast.measures.feels_like } &#8451;</span>
    </Tab>
  );
};

Temperature.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export { Temperature };
