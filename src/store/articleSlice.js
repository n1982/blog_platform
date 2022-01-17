/* eslint-disable no-param-reassign,arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ limit, offset }, { rejectWithValue }) =>
    axios
      .get(`https://kata.academy:8021/api/articles`, {
        params: {
          limit,
          offset,
        },
      })
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.message))
);
export const fetchSingleArticle = createAsyncThunk('articles/fetchSingleArticle', async (slug, { rejectWithValue }) =>
  axios
    .get(`https://kata.academy:8021/api/articles/${slug}`)
    .then((res) => res.data)
    .catch((err) => rejectWithValue(err.message))
);

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    singleArticle: null,
    articlesCount: null,
  },
  reducers: {},
  extraReducers: {
    [fetchArticles.fulfilled]: (state, action) => {
      state.articles = [...action.payload.articles];
      state.articlesCount = action.payload.articlesCount;
    },
    [fetchSingleArticle.fulfilled]: (state, action) => {
      state.singleArticle = { ...action.payload.article };
    },

    [fetchArticles.rejected]: () => {
      console.log('Error!');
    },
    [fetchSingleArticle.rejected]: () => {
      console.log('Error!');
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = articleSlice.actions;

export default articleSlice.reducer;
