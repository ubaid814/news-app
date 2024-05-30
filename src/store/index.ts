import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './slices';



/** Below the store has been created with these options:
* - The slice reducers were automatically passed to combineReducers()
* - redux-thunk were added as middleware
* - The Redux DevTools Extension is disabled for production
* - This should not include applyMiddleware() or the Redux DevTools Extension composeWithDevTools,
*   as those are already handled by configureStore
*/
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default () => {
  const persistor = persistStore(store);
  return { store, persistor };
};
