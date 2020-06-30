import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Store } from "../../services/storage";
import { Api } from "../../services/api";

import { Tab } from '../Tab';
import { Loader } from '../Loader';
import { Carousel } from '../Carousel';
import { Temperature } from '../Temperature';
import { Pressure } from '../Pressure';
import { Humidity } from '../Humidity';


import config from '../../config/config';
const { refresh_rate } = config;

const App = () => {
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
    <div style={ { width: '100%', height: '100%', 'overflowX': 'hidden' } }>
      <Carousel>
        <Pressure forecast={ forecast } />
        <Temperature forecast={ forecast } />
        <Humidity forecast={ forecast } />
      </Carousel>
    </div>
  );
};

export default App;
