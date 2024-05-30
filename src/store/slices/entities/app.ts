import { createSlice } from '@reduxjs/toolkit';
import { fetchSources, fetchArticles } from '../../thunks';


/**
 * An example of creating entity slices, reducers and INITIAL_STATE.
 */
interface AppState {
  sources: string[];
  articles: TArticle[];
  totalResults: number;
 }

const INITIAL_STATE : AppState = {
  sources: [],
  articles: [],
  totalResults: 0
};

export const appEntitySlice = createSlice({
  // A name, used in action types
  name: 'app',
  // The initial state for the reducer
  initialState: INITIAL_STATE,
  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    resetAppData: state => {
      state.sources = [];
      state.articles =[];
      state.totalResults = 0;
    },
  },
  // A "builder callback" function used to add more reducers
  extraReducers: builder => {
    builder.addCase(fetchSources.fulfilled, (state, action) => {
      state.sources = action.payload?.sources;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload?.articles;
      state.totalResults = action.payload?.totalResults;
    });
  },
});

export const appEntityReducer = appEntitySlice.reducer;
