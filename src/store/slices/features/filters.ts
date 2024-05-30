import { createSlice } from '@reduxjs/toolkit';
/**
 * An example of creating feature slices, reducers and INITIAL_STATE.
 */

interface AppState {
  q: string;
  sources: string| undefined;
  category: string | undefined;
  from: Date | undefined;
  to: Date | undefined;
  page: number;
  pageSize: number;
}


const INITIAL_STATE: AppState = {
    q: 'all',
    sources: undefined,
    category: undefined,
    from: undefined,
    to: undefined,
    page: 1,
    pageSize: 25
};


export const appFilterSlice = createSlice({
  // A name, used in action types
  name: 'filters',
  // The initial state for the reducer
  initialState: INITIAL_STATE,
  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    setQuery: (state, action) => {
      state.q = action.payload;
      state.page = 1;
    },
    setSources: (state, action) => {
      state.sources = action.payload;
      state.page = 1;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      state.page = 1;
    },
    setFrom: (state, action) => {
      state.from = action.payload;
      state.page = 1;
    },
    setTo: (state, action) => {
      state.to = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.page = 1;
      state.pageSize = action.payload;
    },
    resetFilters: (state) => {
        state.q = 'all';
        state.sources = undefined;
        state.category = undefined;
        state.from = undefined;
        state.to = undefined;
        state.page = 1;
        state.pageSize = 25;
    }
  },
});

export const {
    setQuery,
    setSources,
    setCategory,
    setFrom,
    setTo,
    setPage,
    setPageSize,
    resetFilters
} = appFilterSlice.actions;
export const appFilterReducer = appFilterSlice.reducer;
