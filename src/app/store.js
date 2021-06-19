import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'
import queryReducer from '../features/querySlice'
import bibleReducer from '../features/bibleSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    query: queryReducer,
    bible: bibleReducer
  },
});

