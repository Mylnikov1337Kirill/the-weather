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

import styles from './styles/App.module.css';

import config from '../../config/config';
import {THEMES} from "../../consts/themes";
const { refresh_rate } = config;

const getDefaultTheme = () => {
  const currentHour = new Date().getHours();

  if (currentHour < 19 && currentHour > 5) {
    return THEMES.DAY;
  }

  return THEMES.NIGHT;
};

const ThemeContext = React.createContext('');

const App = () => {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    const lastUpdate = await Store.getLastUpdate(
      async () => {
        try {
          const geolocation = await Api.geolocation.getPosition();
          return Api.weather.load(geolocation);
        } catch (e) {
          return Api.weather.load();
        }
      }
    );
    setLoading(false);

    setForecast(lastUpdate);
  }, []);

  useEffect(() => {
    loadData();

    const timer =  setTimeout(loadData, refresh_rate);

    return () => clearTimeout(timer);
  }, []);

  if (!forecast && loading) {
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
