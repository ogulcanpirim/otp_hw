import { createMMKV } from 'react-native-mmkv';
import type { Storage } from 'redux-persist';

const storage = createMMKV({ id: 'redux-persist' });

/**
 * redux-persist storage adapter for MMKV (already in the project template).
 */
export const reduxPersistStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = storage.getString(key);
    return Promise.resolve(value ?? null);
  },
  removeItem: (key) => {
    storage.remove(key);
    return Promise.resolve();
  },
};
