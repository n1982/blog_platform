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
        console.log('error login user', err.response);
        return rejectWithValue({ status: err.response.status, statusText: 'Логин или пароль не верные' });
      });
  }
);

export const fetchCreateUser = createAsyncThunk(
  'user/fetchCreateUser',
  // eslint-disable-next-line no-unused-vars
  async ({ userName: username, email, password }, { _, rejectWithValue }) => {
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
        console.log('error login user', err.response.data);
        return rejectWithValue(err.response.data);
      });
  }
);

export const fetchUpdateUserProfile = createAsyncThunk(
  'user/fetchUpdateUserProfile',
  // eslint-disable-next-line no-unused-vars
  async ({ userName: username, email, password, avatarUrl: image }, { _, rejectWithValue }) => {
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
        console.log('error login user', err.response.data);
        return rejectWithValue(err.response.data);
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
    userRequestStatus: null,
    errorUserServer: null,
  },
  reducers: {
    logOut(state) {
      deleteCookie('token');
      state.username = '';
      state.email = '';
      state.bio = '';
      state.image = '';
      state.userRequestStatus = '';
    },
  },
  extraReducers: {
    [fetchLoginUser.pending]: (state) => {
      state.userRequestStatus = 'pending';
      state.errorUserServer = null;
    },
    [fetchCreateUser.pending]: (state) => {
      state.userRequestStatus = 'pending';
      state.errorUserServer = null;
    },
    [fetchUpdateUserProfile.pending]: (state) => {
      state.userRequestStatus = 'pending';
      state.errorUserServer = null;
    },

    [fetchLoginUser.fulfilled]: (state, action) => {
      state.username = action.payload.user.username;
      state.email = action.payload.user.email;
      state.bio = action.payload.user.bio;
      state.image = action.payload.user.image;
      document.cookie = `token = ${action.payload.user.token}`;

      state.userRequestStatus = 'fulfilled';
    },
    [fetchCreateUser.fulfilled]: (state) => {
      state.userRequestStatus = 'fulfilled';
    },
    [fetchUpdateUserProfile.fulfilled]: (state) => {
      state.userRequestStatus = 'fulfilled';
    },

    [fetchLoginUser.rejected]: (state, action) => {
      console.log('User not logged in, error!!!', action.payload);
      state.errorUserServer = action.payload;
      state.userRequestStatus = 'rejected';
    },

    [fetchCreateUser.rejected]: (state, action) => {
      console.log('User not created, error!!!', action.payload);
      state.errorUserServer = action.payload;
      state.userRequestStatus = 'rejected';
    },

    [fetchUpdateUserProfile.rejected]: (state, action) => {
      console.log('User not updated, error!!!', action.payload.errors);
      state.userRequestStatus = 'rejected';
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
