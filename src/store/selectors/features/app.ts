import { createSelector } from 'reselect';

/**
 *
 * @param state
 * Implementation of memoized selectors using reselect to get particular data out of store.
 */

const appFeatureSelector = (state: TReduxState) => state.features.app;

export const getBaseUrl = createSelector(appFeatureSelector, app => app.baseUrl);
export const getProxyUrl = createSelector(appFeatureSelector, app => app.proxyUrl);
export const getApiKey = createSelector(appFeatureSelector, app => app.apiKey);
export const getCategories = createSelector(appFeatureSelector, app => app.category);