/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://kata.academy:8022/api/articles?limit=${limit}&${offset}`);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    tags: [],
  },
  reducers: {},
  extraReducers: {
    [fetchArticles.fulfilled]: (state, action) => {
      state.articles = [...state.articles, ...action.payload.articles];
    },
    [fetchArticles.rejected]: () => {
      console.log('Error!');
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = articleSlice.actions;

export default articleSlice.reducer;
