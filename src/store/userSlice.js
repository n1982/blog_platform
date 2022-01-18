/* eslint-disable no-param-reassign,arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import deleteCookie from '../utilites/deleteCookie';

export const fetchLoginUser = createAsyncThunk(
  'user/fetchLoginUser',
  // eslint-disable-next-line no-unused-vars
  async ({ email, password }, { rejectWithValue }) => {
    console.log('Запрос начат');
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
      console.log('Log out user');
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
    [fetchLoginUser.rejected]: (err) => {
      console.log(err.target);
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
