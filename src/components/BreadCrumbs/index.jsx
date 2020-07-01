import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Breadcrumbs.module.css';

const BreadCrumbs = ({ items, value, onChange }) => {
  const itemsContent = [...Array(items).keys()].map((i) => {
    const itemClasses = [styles.item];

    if (value === i) {
      itemClasses.push(styles.active);
    }

    return (
      <button
        key={ i }
        className={ itemClasses.join(' ') }
        onClick={ () => onChange(i) }
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
