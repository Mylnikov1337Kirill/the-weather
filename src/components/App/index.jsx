import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Store } from '../../services/storage';
import { Api } from '../../services/api';

import { Tab } from '../Tab';
import { Loader } from '../Loader';
import { Carousel } from '../Carousel';
import { Temperature } from '../Temperature';
import { Pressure } from '../Pressure';
import { Humidity } from '../Humidity';

import config from '../../config/config';
import {THEMES} from "../../consts/themes";
const { refresh_rate } = config;

const appStyles = { width: '100%', height: '100%', 'overflowX': 'hidden' };

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

  const timerRef = useRef({});

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

    timerRef.current = {
      id: setTimeout(loadData, refresh_rate),
    };

    return () => clearTimeout(timerRef.current.id);
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
    <div style={ appStyles }>
      <ThemeContext.Provider value={ { value: theme, updateValue: setTheme } }>
        <Carousel>
          <Pressure forecast={ forecast } />
          <Temperature forecast={ forecast } />
          <Humidity forecast={ forecast } />
        </Carousel>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;

export { ThemeContext };
