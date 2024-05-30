import { combineReducers } from 'redux';
import { appFeatureReducer } from './app';
import { appFilterReducer } from './filters';


const featuresReducer = combineReducers({
  app: appFeatureReducer,
  filters: appFilterReducer,
  /**
   * More feature reducers will be added here
   */
});

export { featuresReducer };
