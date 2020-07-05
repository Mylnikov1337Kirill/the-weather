import { openDB, deleteDB } from 'idb';

import { mapWeatherResponse } from './utils';
import config from '../../config/config';
import {getRandomBetween} from "../../utils/random";
import {findNearest, findNearestPoint} from "../../utils/nearest";
const { db_version, refresh_rate } = config;

const DB_NAME = 'the-weather-db';
const STORE_NAME = 'store';

class StorageService {
  constructor() {
    this.state = {
      lastUpdate: null,
      animationLayoutPoints: [],
    };
  }

  async getLastUpdate(loadData = async () => {}) {
    const { lastUpdate } = this.state;
    const currentTime = Date.now();

    let actualLastUpdate = null;

    if (lastUpdate) {
      actualLastUpdate = lastUpdate;
    } else {
      actualLastUpdate = await this.readFromDb(
        IDBKeyRange.bound(currentTime - refresh_rate, currentTime, true, true )
      );
    }

    if (!actualLastUpdate || (actualLastUpdate && currentTime - actualLastUpdate.timestamp >= refresh_rate )) {
      const res = await loadData();

      await this.writeToDb(mapWeatherResponse(res));

      return this.state.lastUpdate;
    }

    return actualLastUpdate;
  }

  openConnection = async () => {
    return openDB(DB_NAME, db_version, {
      upgrade(database) {
        if (database.version === 0 || !database.objectStoreNames.contains(STORE_NAME)) {
          database.createObjectStore(STORE_NAME, { keyPath: 'timestamp' });
        } else if (db_version !== database.version) {
          database.close();
          document.location.reload();
        }
      }
    });
  };

  readFromDb = async (query) => {
    try {
      const db = await this.openConnection();

      const storeTransaction = db.transaction(STORE_NAME).objectStore(STORE_NAME);

      return storeTransaction.get(query);
    } catch (e) {
      console.log(e);

      return Promise.reject();
    }
  };

  writeToDb = async (data = { }) => {
    try {
      const db = await this.openConnection();
      const storeTransaction = db.transaction(STORE_NAME, 'readwrite').objectStore(STORE_NAME);

      const actualData = { ...data, timestamp: Date.now() };
      await storeTransaction.add(actualData);

      this.state = {
        ...this.state,
        lastUpdate: actualData,
      };

      db.close();

      return Promise.resolve();
    } catch (e) {
      console.log(e);

      return Promise.reject();
    }
  };

  savePoint = (point) => {
    this.state = {
      ...this.state,
      animationLayoutPoints: [
        ...this.state.animationLayoutPoints,
        { ...point }
      ],
    };
  };

  actualizeCoords = (point) => {
    const { animationLayoutPoints } = this.state;

    const nearestPoint = findNearestPoint(animationLayoutPoints, point);

    if (!nearestPoint) {
      return point;
    }

    const xTooClose = Math.abs(point.x - nearestPoint.x) < 4;
    const yTooClose = Math.abs(point.y - nearestPoint.y) < 20;

    if (xTooClose && yTooClose) {
      const direction = Math.round(Math.random());
      const newX = xTooClose ? point.x + (direction ? getRandomBetween(1, 3) : -getRandomBetween(1, 3)) : point.x;
      const newY = yTooClose ? point.y + (direction ? getRandomBetween(5, 8) : -getRandomBetween(5, 8)) : point.y;
      return this.actualizeCoords({ x: newX, y: newY });
    }

    return point;
  };

  generateCoords = () => {
    const { x, y } = this.actualizeCoords({ x: getRandomBetween(10, 90), y: getRandomBetween(12, 20) * getRandomBetween(1, 3) });

    this.savePoint({ x, y });
    return { top: y, right: x };
  };

  clearAnimationLayoutPoints = () => {
    this.state = {
      ...this.state,
      animationLayoutPoints: [],
    }
  };
}

const Store = new StorageService();

export { Store };
