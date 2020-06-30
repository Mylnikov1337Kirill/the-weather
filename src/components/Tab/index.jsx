import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Tab.module.css';

const Tab = ({ children }) => (
  <div className={ styles.wrapper }>
    { children }
  </div>
);

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Tab };
