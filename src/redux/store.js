import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './cities.js/citySlice';
import aqidataReducer from './Aqidata/aqidataSlice';

const store = configureStore({
  reducer: {
    cities: cityReducer,
    weather: aqidataReducer,
  },
});

export default store;
