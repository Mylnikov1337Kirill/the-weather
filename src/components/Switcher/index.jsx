import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';

import { vibrate } from '../../utils/navigatorApi';

import { PROPS } from '../../consts/component-props';

import styles from './styles/Switcher.module.css';

const Switcher = ({ checked, onChange }) => {
  const iconWrapperClasses = [styles['icon-wrapper']];

  if (checked) {
    iconWrapperClasses.push(styles.checked);
  }

  return (
    <label className={ styles.wrapper }>
      <input
        type='checkbox'
        checked={ checked }
        onChange={ ({ target: { checked }}) => {
          onChange(checked);
          vibrate();
        } }
      />
      <div className={ iconWrapperClasses.join(' ') }>
        <Icon type={ PROPS.ICON.SIMPLE_SUN } className={ `${styles.icon}`} />
        <Icon type={ PROPS.ICON.SIMPLE_MOON } className={ `${styles.icon}`} />
      </div>
    </label>
  );
};

Switcher.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { Switcher };
