/* eslint-disable no-param-reassign,arrow-body-style */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLoginUser = createAsyncThunk(
  'user/fetchLoginUser',
  // eslint-disable-next-line no-unused-vars
  async ({ email, password }, { rejectWithValue }) => {
    console.log('Запрос начат');
    return axios
      .post(
        `http://kata.academy:8022/api/users/login`,
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
    user: {},
  },
  reducers: {},
  extraReducers: {
    [fetchLoginUser.fulfilled]: (state, action) => {
      console.log('Action', action);
      state.user = action.payload.user;
    },
    [fetchLoginUser.rejected]: (err) => {
      console.log(err.target);
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions;

export default userSlice.reducer;
