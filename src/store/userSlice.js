/* eslint-disable no-param-reassign,arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import deleteCookie from '../utilites/deleteCookie';
import getCookie from '../utilites/getCookie';

export const fetchLoginUser = createAsyncThunk(
  'user/fetchLoginUser',
  // eslint-disable-next-line no-unused-vars
  async ({ email, password }, { _, rejectWithValue }) => {
    return axios
      .post(
        `https://kata.academy:8021/api/users/login`,
        {
          user: {
            email,
            password,
          },
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const fetchCreateUser = createAsyncThunk(
  'user/fetchCreateUser',
  // eslint-disable-next-line no-unused-vars
  async ({ username, email, password }, { _, rejectWithValue }) => {
    console.log('Incoming data', username, email, password);
    return axios
      .post(
        `https://kata.academy:8021/api/users`,
        {
          user: {
            username,
            email,
            password,
          },
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        rejectWithValue(err);
      });
  }
);

export const fetchUpdateUserProfile = createAsyncThunk(
  'user/fetchUpdateUserProfile',
  // eslint-disable-next-line no-unused-vars
  async ({ username, email, password, image }, { _, rejectWithValue }) => {
    console.log('Incoming data', username, email, password, image);
    return axios
      .put(
        `https://kata.academy:8021/api/user`,
        {
          user: {
            username,
            email,
            password,
            image,
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
        rejectWithValue(err);
      });
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    bio: '',
    image: '',
  },
  reducers: {
    logOut(state) {
      deleteCookie('token');
      state.username = '';
      state.email = '';
      state.bio = '';
      state.image = '';
    },
  },
  extraReducers: {
    [fetchLoginUser.fulfilled]: (state, action) => {
      state.username = action.payload.user.username;
      state.email = action.payload.user.email;
      state.bio = action.payload.user.bio;
      state.image = action.payload.user.image;
      document.cookie = `token = ${action.payload.user.token}`;
    },
    [fetchCreateUser.fulfilled]: () => {
      console.log('user created, successful');
    },

    [fetchUpdateUserProfile.fulfilled]: () => {
      console.log('user updated, successful');
    },

    [fetchLoginUser.rejected]: () => {
      console.log('User not logged in, error!!!');
    },

    [fetchCreateUser.rejected]: () => {
      console.log('User not created, error!!!');
    },

    [fetchUpdateUserProfile.rejected]: () => {
      console.log('User not updated, error!!!');
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
