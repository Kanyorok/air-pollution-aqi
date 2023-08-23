import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './cities.js/citySlice';

const store = configureStore({
  reducer: {
    cities: cityReducer,
  },
});

export default store;
