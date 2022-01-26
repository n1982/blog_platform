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
        return rejectWithValue({ status: err.response.status, statusText: err.response.statusText });
      })
);
export const fetchSingleArticle = createAsyncThunk('articles/fetchSingleArticle', async (slug, { rejectWithValue }) =>
  axios
    .get(`https://kata.academy:8021/api/articles/${slug}`)
    .then((res) => res.data)
    .catch((err) => {
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
        return rejectWithValue({ status: err.response.status, statusText: err.response.statusText });
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
      return rejectWithValue({ status: err.response.status, statusText: err.response.statusText });
    })
);

export const fetchSetFavoriteArticle = createAsyncThunk(
  'articles/fetchSetFavoriteArticle',
  async (slug, { rejectWithValue }) =>
    axios
      .post(
        `https://kata.academy:8021/api/articles/${slug}/favorite`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${getCookie('token')}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        return rejectWithValue({ status: err.response.status, statusText: err.response.statusText });
      })
);

export const fetchDeleteFavoriteArticle = createAsyncThunk(
  'articles/fetchDeleteFavoriteArticle',
  async (slug, { rejectWithValue }) =>
    axios
      .delete(`https://kata.academy:8021/api/articles/${slug}/favorite`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${getCookie('token')}`,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        return rejectWithValue({ status: err.response.status, statusText: err.response.statusText });
      })
);

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    singleArticle: null,
    articlesCount: null,
    articleRequestStatus: '',
    errorArticleServer: null,
    articleIsCreated: false,
  },
  reducers: {},
  extraReducers: {
    // Запрос отправлен
    [fetchGetArticles.pending]: (state, action) => {
      state.articleRequestStatus = 'pending';
      state.errorArticleServer = null;
      state.articleIsCreated = false;
    },
    [fetchSingleArticle.pending]: (state, action) => {
      state.articleRequestStatus = 'pending';
      state.errorArticleServer = null;
      state.articleIsCreated = false;
    },
    [fetchCreateArticle.pending]: (state, action) => {
      state.articleRequestStatus = 'pending';
      state.errorArticleServer = null;
      state.articleIsCreated = false;
    },
    [fetchEditArticle.pending]: (state, action) => {
      state.articleRequestStatus = 'pending';
      state.errorArticleServer = null;
      state.articleIsCreated = false;
    },
    [fetchDeleteArticle.pending]: (state, action) => {
      state.articleRequestStatus = 'pending';
      state.errorArticleServer = null;
    },
    [fetchSetFavoriteArticle.pending]: (state, action) => {
      console.log('Отправка запроса на добавление в избранное');
    },
    [fetchDeleteFavoriteArticle.pending]: (state, action) => {
      console.log('Отправка запроса на удаление из избранного');
    },
    // Успешный запрос
    [fetchGetArticles.fulfilled]: (state, action) => {
      state.articles = [...action.payload.articles];
      state.articlesCount = action.payload.articlesCount;
      state.articleRequestStatus = 'fulfilled';
    },
    [fetchSingleArticle.fulfilled]: (state, action) => {
      state.singleArticle = { ...action.payload.article };
      state.articleRequestStatus = 'fulfilled';
    },

    [fetchCreateArticle.fulfilled]: (state) => {
      state.articleRequestStatus = 'fulfilled';
      state.articleIsCreated = true;
    },

    [fetchEditArticle.fulfilled]: (state) => {
      state.articleRequestStatus = 'fulfilled';
      state.articleIsCreated = true;
    },

    [fetchDeleteArticle.fulfilled]: (state) => {
      state.articleRequestStatus = 'fulfilled';
    },
    [fetchSetFavoriteArticle.fulfilled]: (state, action) => {
      console.log('Успешный запрос на добавление в избранное');
    },
    [fetchDeleteFavoriteArticle.fulfilled]: (state, action) => {
      console.log('Успешный запрос на удаление из избранного');
    },
    // Ошибка в запросе
    [fetchGetArticles.rejected]: (state, action) => {
      state.errorArticleServer = action.payload;
      state.articleRequestStatus = 'rejected';
    },
    [fetchSingleArticle.rejected]: (state, action) => {
      state.errorArticleServer = action.payload;
      state.articleRequestStatus = 'rejected';
    },
    [fetchCreateArticle.rejected]: (state, action) => {
      state.errorArticleServer = action.payload;
      state.articleRequestStatus = 'rejected';
    },
    [fetchEditArticle.rejected]: (state, action) => {
      state.errorArticleServer = action.payload;
      state.articleRequestStatus = 'rejected';
    },

    [fetchDeleteArticle.rejected]: (state, action) => {
      state.errorArticleServer = action.payload;
      state.articleRequestStatus = 'rejected';
    },
    [fetchSetFavoriteArticle.rejected]: (state, action) => {
      state.errorArticleServer = action.payload;
      state.articleRequestStatus = 'rejected';
    },
    [fetchDeleteFavoriteArticle.rejected]: (state, action) => {
      state.errorArticleServer = action.payload;
      state.articleRequestStatus = 'rejected';
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = articleSlice.actions;

export default articleSlice.reducer;
