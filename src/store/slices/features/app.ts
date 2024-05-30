import { createSlice } from '@reduxjs/toolkit';
import { fetchArticles, fetchSources } from '../../thunks';
/**
 * An example of creating feature slices, reducers and INITIAL_STATE.
 */

interface AppState {
  baseUrl: string;
  apiKey: string;
  proxyUrl: string;
  category: string[];
  selectedCategory: string | undefined;
  validationStates: {
    isLoading: boolean;
    error: null | string;
  };
}


const INITIAL_STATE: AppState = {
  baseUrl: import.meta.env.VITE_NEWS_API_URL || '',
  apiKey: import.meta.env.VITE_NEWS_API_KEY || '',
  proxyUrl: import.meta.env.VITE_NEWS_API_PROXY_URL || '',
  selectedCategory: undefined,
  category: ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
  validationStates: {
    isLoading: false,
    error: null,
  },
};


export const appFeatureSlice = createSlice({
  // A name, used in action types
  name: 'app',
  // The initial state for the reducer
  initialState: INITIAL_STATE,
  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    toggleLoading: state => {
      state.validationStates.isLoading = true;
    },
  },
  // A "builder callback" function used to add more reducers
  extraReducers: builder => {
    builder.addCase(fetchSources.pending, state => {
      state.validationStates.isLoading = true;
    });
    builder.addCase(fetchSources.fulfilled, state => {
      state.validationStates = {
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(fetchSources.rejected, state => {
      state.validationStates.error = null;
    });
    builder.addCase(fetchArticles.pending, state => {
      state.validationStates.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, state => {
      state.validationStates = {
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(fetchArticles.rejected, state => {
      state.validationStates.error = null;
    });
  },
});

export const {
  toggleLoading,
} = appFeatureSlice.actions;
export const appFeatureReducer = appFeatureSlice.reducer;
