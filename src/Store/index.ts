import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import api from '../Services/Api/api';
import common from './Common';
import loader from './Loader';
import user from './User';
import meal from './MealData';
import health from './Health';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const reducers = combineReducers({
  common,
  loader,
  user,
  meal,
  health,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);
    return middlewares;
  },
});

const persistor = persistStore(store);
setupListeners(store.dispatch);
// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
