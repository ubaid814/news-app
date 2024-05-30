import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppService } from '../../services/app';
import { getBaseUrl, getProxyUrl } from '../selectors/features/app';

/**
 * Just an example below that how we will create asynchronous actions
 * Mostly these actions used to make an Api call and returns response to the reducers
 * to update the data in the reducers
 */

const appService = new AppService();

export const fetchSources = createAsyncThunk<TObject, TObject, IActionOptions>(
  'app/fetchSources',
  async (_requestPayload: Record<string, string>, thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const proxyUrl = getProxyUrl(thunkAPI.getState());
    const response = await appService.fetchSources(baseUrl,proxyUrl);

    if (response.error) {
      return thunkAPI.rejectWithValue({ ...response.error });
    }

    return response?.data;
  }
);

export const fetchArticles = createAsyncThunk<TObject, TObject, IActionOptions>(
  'app/fetchArticles',
  async (_requestPayload: Record<string, string>, thunkAPI) => {
    const baseUrl = getBaseUrl(thunkAPI.getState());
    const proxyUrl = getProxyUrl(thunkAPI.getState());
    const response = await appService.fetchArticles(baseUrl,proxyUrl, _requestPayload);

    if (response.error) {
      return thunkAPI.rejectWithValue({ ...response.error });
    }

    return response?.data;
  }
);