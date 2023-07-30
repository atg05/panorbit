import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const profile = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export const profileActions = profile.actions;
export default profile.reducer;
