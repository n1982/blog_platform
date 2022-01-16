/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ limit, offset }, { rejectWithValue }) =>
    axios
      .get(`http://kata.academy:8022/api/articles`, {
        params: {
          limit,
          offset,
        },
      })
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.message))

  /* try {
      const res = await fetch(`http://kata.academy:8022/api/articles?limit=${limit}&offset=${offset}`);
      if (!res.ok) {
        throw new Error(`${res.status}`);
      }
      return await res.json();
    } catch (err) {
      return rejectWithValue(err.message);
    } */
);

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    articlesCount: null,
  },
  reducers: {},
  extraReducers: {
    [fetchArticles.fulfilled]: (state, action) => {
      console.log('Action', action);
      state.articles = [...action.payload.articles];
      state.articlesCount = action.payload.articlesCount;
    },
    [fetchArticles.rejected]: () => {
      console.log('Error!');
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = articleSlice.actions;

export default articleSlice.reducer;
