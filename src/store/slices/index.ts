import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localforage from 'localforage';

import { entitiesReducer } from './entities';
import { featuresReducer } from './features';


/*
Local Forage for Indexed DB
*/
localforage.config({
  driver: localforage.INDEXEDDB,
  name: "NEWS_AGGREGATOR_WEB_APP",
  version: 1.0,
  size: 4980736,
  storeName: "NEWS_AGGREGATOR_WEB_STORE"
})


/**
 * Redux Persist is a library that allows saving a Redux store in the local storage of an application,
 * So that application data don't lost when it relaunch.
 * As we have seprated our reducers into features and entities,
 * So for both features and entities we have to define seprate persistor configs too
 * to persist nested reducers
 */


const persistConfig = {
  key: 'NEWS AGRREGATOR',
  storage: localforage,
  blacklist: [],
};

const reducers = combineReducers({
  entities: entitiesReducer,
  features: featuresReducer,
})


const rootReducer = persistReducer(persistConfig, reducers)

export default rootReducer;
