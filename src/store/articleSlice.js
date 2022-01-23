/* eslint-disable no-param-reassign,arrow-body-style,no-unused-vars */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getCookie from '../utilites/getCookie';

export const fetchGetArticles = createAsyncThunk(
  'articles/fetchGetArticles',
  async ({ limit, offset }, { rejectWithValue }) =>
    axios
      .get(`https://kata.academy:8021/api/articles`, {
        params: {
          limit,
          offset,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        return rejectWithValue(err.message);
      })
);
export const fetchSingleArticle = createAsyncThunk('articles/fetchSingleArticle', async (slug, { rejectWithValue }) =>
  axios
    .get(`https://kata.academy:8021/api/articles/${slug}`)
    .then((res) => res.data)
    .catch((err) => {
      console.log('error loading single article (from fetch)', err?.response);
      return rejectWithValue({ status: err.response.status, statusText: err.response.statusText });
    })
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
      .catch((err) => {
        return rejectWithValue(err.message);
      });
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
      .catch((err) => {
        return rejectWithValue(err.message);
      });
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
    .catch((err) => {
      return rejectWithValue(err.message);
    })
);
const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    singleArticle: null,
    articlesCount: null,
    requestStatus: '',
  },
  reducers: {},
  extraReducers: {
    // Запрос отправлен
    [fetchGetArticles.pending]: (state, action) => {
      state.requestStatus = 'pending';
    },
    [fetchSingleArticle.pending]: (state, action) => {
      state.requestStatus = 'pending';
    },
    [fetchCreateArticle.pending]: (state, action) => {
      state.requestStatus = 'pending';
    },
    [fetchEditArticle.pending]: (state, action) => {
      state.requestStatus = 'pending';
    },
    [fetchDeleteArticle.pending]: (state, action) => {
      state.requestStatus = 'pending';
    },
    // Успешный запрос
    [fetchGetArticles.fulfilled]: (state, action) => {
      state.articles = [...action.payload.articles];
      state.articlesCount = action.payload.articlesCount;
      state.requestStatus = 'fulfilled';
    },
    [fetchSingleArticle.fulfilled]: (state, action) => {
      state.singleArticle = { ...action.payload.article };
      state.requestStatus = 'fulfilled';
    },

    [fetchCreateArticle.fulfilled]: (state) => {
      console.log('article created');
      state.requestStatus = 'fulfilled';
    },

    [fetchEditArticle.fulfilled]: (state) => {
      console.log('article edit');
      state.requestStatus = 'fulfilled';
    },

    [fetchDeleteArticle.fulfilled]: (state) => {
      console.log('delete article successful');
      state.requestStatus = 'fulfilled';
    },
    // Ошибка в запросе
    [fetchGetArticles.rejected]: (state, action) => {
      console.log('Articles list loading error!!!', action.payload.status);
      state.requestStatus = 'rejected';
    },
    [fetchSingleArticle.rejected]: (state, action) => {
      console.log('Single article loading error!!!', action.payload.status);
      console.log('Single article loading error!!!', action.payload.statusText);
      state.requestStatus = 'rejected';
    },
    [fetchCreateArticle.rejected]: (state, action) => {
      console.log('Article not created, error!!!', action.payload.errors);
      state.requestStatus = 'rejected';
    },
    [fetchEditArticle.rejected]: (state, action) => {
      console.log('Article not created, error!!!', action.payload.errors);
      state.requestStatus = 'rejected';
    },

    [fetchDeleteArticle.rejected]: (state, action) => {
      console.log('Article not deleted, error!!!', action.payload.errors);
      state.requestStatus = 'rejected';
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = articleSlice.actions;

export default articleSlice.reducer;
