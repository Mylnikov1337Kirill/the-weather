import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './styles/App.module.css';

import { Store } from "../../services/storage";
import { Api } from "../../services/api";

import { Tab } from '../Tab';
import { Loader } from '../Loader';
import { Temperature } from '../Temperature';
import { Pressure } from '../Pressure';
import { Humidity } from '../Humidity';

import config from '../../config/config';
const { refresh_rate } = config;

const getProperEvent = (e) => e.changedTouches ? e.changedTouches[0] : e;

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [loading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const timerRef = useRef({});
  const startPointCoord = useRef({});

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

  const lock = (e) => {
    startPointCoord.current.value = getProperEvent(e).clientX;
  };

  const move = (e) => {
    const startValue = startPointCoord.current.value;

    if(startValue || startValue === 0) {
      const dx = getProperEvent(e).clientX - startValue;
      const s = Math.sign(dx);

      console.log(s);

      if ((currentSlide === 0 && s > 0) || (currentSlide === 2 && s < 0)) {
        console.log('here');
        return startPointCoord.current.value = null;
      }

      setCurrentSlide(currentSlide - s);
      startPointCoord.current.value = null;
    }
  };

  useEffect(() => {
    loadData();

    timerRef.current = {
      id: setTimeout(loadData, refresh_rate),
    };

    return () => clearTimeout(timerRef.current.id);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', lock);
    document.addEventListener('touchstart', lock);
    document.addEventListener('mouseup', move);
    document.addEventListener('touchend', move);

    return () => {
      document.removeEventListener('mousedown', lock);
      document.removeEventListener('touchstart', lock);
      document.removeEventListener('mouseup', move);
      document.removeEventListener('touchend', move);
    }
  });

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

  const appTranslateAttr = { transform: `translate(${currentSlide * -100 }%)`};

  return (
    <div className={ styles.app } style={ { ...appTranslateAttr } }>
      <Pressure forecast={ forecast } />
      <Temperature forecast={ forecast } />
      <Humidity forecast={ forecast } />
    </div>
  );
};

export default App;
