import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../App';

import { vibrate } from '../../utils/navigatorApi';

import styles from './styles/Breadcrumbs.module.css';

const BreadCrumbs = ({ items, value, onChange }) => {
  const { value: theme } = useContext(ThemeContext);

  const itemsContent = [...Array(items).keys()].map((i) => {
    const itemClasses = [styles.item, styles[theme]];

    if (value === i) {
      itemClasses.push(styles.active);
    }

    return (
      <button
        key={ i }
        className={ itemClasses.join(' ') }
        onClick={ () => {
          onChange(i);
          vibrate();
        } }
      />
    )
  });

  return (
    <div className={ styles.wrapper }>
      { itemsContent }
    </div>
  );
};

BreadCrumbs.propTypes = {
  items: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { BreadCrumbs };
