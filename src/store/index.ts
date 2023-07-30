import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/index';
import profileReducer from './profile/index';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;
