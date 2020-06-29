import React, { useEffect, useState, useCallback, useRef } from 'react';

import { Loader } from '../Loader';
import { Api } from '../../services/api';
import { Store } from '../../services/storage';

import styles from './styles/Weather.module.css';

import config from '../../config/config';
const { refresh_rate } = config;

const Weather = () => {
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

  const tempContent = forecast && (
    <div className={ styles.wrapper }>
      <h1>{ forecast.name }</h1>
      <h2>{ forecast.measures.temp } &#8451;</h2>
      <span>{ forecast.weather_description }, ощущается как { forecast.measures.feels_like } &#8451;</span>
    </div>
  );

  if (!forecast && loading) {
    return (
      <div className={ styles.wrapper }>
        <Loader />
      </div>
    );
  }

  return (
    <>
      { tempContent }
    </>
  );
};

export { Weather };
