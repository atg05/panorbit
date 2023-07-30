import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserLists(state, action) {
      state.userLists = action.payload;
    },
    setActiveUserDetails(state, action) {
      state.activeUserDetails = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
