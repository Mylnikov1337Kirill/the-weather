import React, { useEffect, useState, useCallback, useRef } from 'react';

import { Api } from '../../services/api';
import { Store } from '../../services/storage';

import './styles/index.css';

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

    setForecast(lastUpdate);
  }, []);


  useEffect(() => {
    loadData();

    timerRef.current = {
      id: setTimeout(loadData, refresh_rate),
    };

    return () => clearTimeout(timerRef.current.id);
  }, []);

  console.log(forecast);

  const tempContent = forecast && (
    <div>
      <h2>{ forecast.measures.temp } &#8451;</h2>
      <span>Ощущается как { forecast.measures.feels_like }</span>
    </div>
  );
  return (
    <div className='wrapper'>
      { tempContent }
    </div>
  );
};

export { Weather };
