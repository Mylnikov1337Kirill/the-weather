import React, { useContext, useState, useEffect } from 'react';

import { ThemeContext } from '../App';

import { ShootingStar } from './components/ShootingStar';

import {THEMES} from "../../consts/themes";

const getDefaultBetween = (start, end) =>  Math.floor(Math.random() * (end - start + 1)) + start;

const AnimationsLayout = () => {
  const [objectsCount, setObjectsCount] = useState(getDefaultBetween(5, 9));
  const { value } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => setObjectsCount(getDefaultBetween(5, 9)), 1000 * 90);

    return () => clearTimeout(timer);
  }, []);

  if (value === THEMES.NIGHT) {
    return (
      <div>

      </div>
    );
  }

  return null;
};

export { AnimationsLayout };
