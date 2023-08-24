import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherData } from '../../utils/Apicall';

export const displayWeatherData = createAsyncThunk('fetch/aqi-data', async ({ lat, lon }) => {
  const test = fetchWeatherData({ lat, lon });
  return test;
});

const initialState = {
  weather: {},
  loading: 'idle',
};

const aqidataSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(displayWeatherData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(displayWeatherData.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.loading = 'Succeeded';
      })
      .addCase(displayWeatherData.rejected, (state) => {
        state.loading = 'failed load weather';
      });
  },
});

export default aqidataSlice.reducer;
