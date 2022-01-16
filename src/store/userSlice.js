/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    bio: '',
    image: '',
  },
  reducers: {},
  extraReducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions;

export default userSlice.reducer;
