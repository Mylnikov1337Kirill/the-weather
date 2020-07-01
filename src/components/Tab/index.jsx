import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../App';

import styles from './styles/Tab.module.css';

const Tab = ({ children }) => {
  const { value } = useContext(ThemeContext);
  const classNames = [styles.wrapper, styles[value]];

  return (
    <div className={ classNames.join(' ') }>
      { children }
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Tab };
