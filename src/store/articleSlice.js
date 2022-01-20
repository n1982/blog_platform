/* eslint-disable no-param-reassign,arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCookie from '../utilites/getCookie';

export const fetchGetArticles = createAsyncThunk(
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

export const fetchCreateArticle = createAsyncThunk(
  'articles/fetchCreateArticle',
  async ({ title, description, body, tagList }, { rejectWithValue }) => {
    axios
      .post(
        `https://kata.academy:8021/api/articles`,
        {
          article: {
            title,
            description,
            body,
            tagList,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${getCookie('token')}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.message));
  }
);

export const fetchEditArticle = createAsyncThunk(
  'articles/fetchEditArticle',
  async ({ slug, title, description, body, tagList }, { rejectWithValue }) => {
    axios
      .put(
        `https://kata.academy:8021/api/articles/${slug}`,
        {
          article: {
            title,
            description,
            body,
            tagList,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${getCookie('token')}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.message));
  }
);

export const fetchDeleteArticle = createAsyncThunk('articles/fetchDeleteArticle', async (slug, { rejectWithValue }) =>
  axios
    .delete(`https://kata.academy:8021/api/articles/${slug}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${getCookie('token')}`,
      },
    })
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
    [fetchGetArticles.fulfilled]: (state, action) => {
      state.articles = [...action.payload.articles];
      state.articlesCount = action.payload.articlesCount;
    },
    [fetchSingleArticle.fulfilled]: (state, action) => {
      state.singleArticle = { ...action.payload.article };
    },

    [fetchCreateArticle.fulfilled]: () => {
      console.log('article created');
    },

    [fetchEditArticle.fulfilled]: () => {
      console.log('article edit');
    },

    [fetchDeleteArticle.fulfilled]: () => {
      console.log('delete article successful');
    },

    [fetchGetArticles.rejected]: () => {
      console.log('Articles list loading error!!!');
    },
    [fetchSingleArticle.rejected]: () => {
      console.log('Single article loading error!!!');
    },
    [fetchCreateArticle.rejected]: () => {
      console.log('Article not created, error!!!');
    },
    [fetchEditArticle.rejected]: () => {
      console.log('Article not created, error!!!');
    },

    [fetchDeleteArticle.rejected]: () => {
      console.log('Article not deleted, error!!!');
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = articleSlice.actions;

export default articleSlice.reducer;
