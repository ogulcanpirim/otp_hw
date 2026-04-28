import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { marketApi } from './api/marketApi';
import { reduxPersistStorage } from './persistStorage';
import { languageReducer } from './slices/languageSlice';
import { shoppingListReducer } from './slices/shoppingListSlice';
import { themeReducer } from './slices/themeSlice';
import { userWalletReducer } from './slices/userWalletSlice';

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
  userWallet: userWalletReducer,
  theme: themeReducer,
  language: languageReducer,
  [marketApi.reducerPath]: marketApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: reduxPersistStorage,
  whitelist: ['shoppingList', 'userWallet', 'theme', 'language'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(marketApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
