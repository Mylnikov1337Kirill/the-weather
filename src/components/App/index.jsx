import React, { useCallback, useEffect, useState } from 'react';

import { Store } from '../../services/storage';
import { Api } from '../../services/api';

import { Tab } from '../Tab';
import { Loader } from '../Loader';
import { Carousel } from '../Carousel';
import { Temperature } from '../Temperature';
import { Pressure } from '../Pressure';
import { Humidity } from '../Humidity';
import { Switcher } from '../Switcher';
import { AnimationsLayout } from '../AnimationsLayout';

import { THEMES } from '../../consts/themes';

import styles from './styles/App.module.css';

import config from '../../config/config';
const { refresh_rate } = config;

const getDefaultTheme = () => {
  const currentHour = new Date().getHours();

  if (currentHour < 19 && currentHour > 5) {
    return THEMES.DAY;
  }

  return THEMES.NIGHT;
};

const ThemeContext = React.createContext('');

const loadData = async () =>
  await Store.getLastUpdate(
    async () => {
      try {
        const geolocation = await Api.geolocation.getPosition();
        return Api.weather.load(geolocation);
      } catch (e) {
        return Api.weather.load();
      }
    }
  );

const App = () => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const lastUpdate = await loadData();
    setLoading(false);

    setForecast(lastUpdate);
  }, []);

  useEffect(() => {
    fetchData();

    const timer = setTimeout(fetchData, refresh_rate);

    return () => clearTimeout(timer);
  }, [fetchData]);

  if (loading) {
    return (
      <Tab>
        <Loader />
      </Tab>
    );
  }

  if (!forecast) {
    return null;
  }

  return (
    <ThemeContext.Provider value={ { value: theme, updateValue: setTheme } }>
      <div className={ `${styles.app } ${styles[theme]}`}>
        <AnimationsLayout />
        <div className={ styles['theme-switcher'] }>
          <Switcher
            onChange={ (v) => {
              setTheme(v ? THEMES.DAY : THEMES.NIGHT);
              Store.clearAnimationLayoutPoints();
            } }
            checked={ theme === THEMES.DAY }
          />
        </div>
        <Carousel>
          <Pressure forecast={ forecast } />
          <Temperature forecast={ forecast } />
          <Humidity forecast={ forecast } />
        </Carousel>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

export { ThemeContext };
