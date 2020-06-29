import { openDB, deleteDB } from 'idb';

import { mapWeatherResponse } from './utils';
import config from '../../config/config';
const { db_version, refresh_rate } = config;

const DB_NAME = 'the-weather-db';
const STORE_NAME = 'store';


class StorageService {
  constructor() {
    this.state = {
      lastUpdate: null,
    };
  }

  async getLastUpdate(loadData = async () => {}) {
    deleteDB(DB_NAME)
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
      const req = storeTransaction.add(actualData);

      await req;
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
  }
}

const Store = new StorageService();

export { Store };
