import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCitiesCountries } from '../../utils/Apicall';

export const displayCities = createAsyncThunk('fetch/cities', async () => {
  const retrievedCities = await fetchCitiesCountries();
  const cityDisplay = retrievedCities.map((city, index) => ({
    id: city.id,
    cityName: city.city,
    country: city.country,
    population: city.population,
    latitude: city.lat,
    longitude: city.lng,
    styleNo: index + 1,
  }));
  return cityDisplay;
});

const initialState = {
  cities: [],
  loading: 'idle',
};

const citySlice = createSlice({
  name: 'cities',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(displayCities.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(displayCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.loading = 'Succeeded';
      })
      .addCase(displayCities.rejected, (state) => {
        state.loading = 'failed load missions';
      });
  },
});

export default citySlice.reducer;
