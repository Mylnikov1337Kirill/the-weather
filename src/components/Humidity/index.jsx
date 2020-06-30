import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '../Tab';

const preparePrecipitationContent = (snow, rain) => {
  if (!snow && !rain) {
    return 'Без осадков';
  }
};

const Humidity = ({ forecast: { measures: { humidity }, snow, rain } }) => {
  const precipitationContent = <span>{ preparePrecipitationContent(snow, rain) }</span>;
  return (
    <Tab>
      <h1>Влажность</h1>
      <h2>{ humidity }%</h2>
      { precipitationContent }
    </Tab>
  );
};

Humidity.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export { Humidity };
