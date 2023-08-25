import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCitiesCountries } from '../../utils/Apicall';

export const displayCities = createAsyncThunk('fetch/cities', async () => {
  const retrievedCities = await fetchCitiesCountries();
  const cityDisplay = retrievedCities.map((city, index) => ({
    id: index + 1,
    cityName: city.capital,
    country: city.name.common,
    population: city.population,
    coordinates: city.capitalInfo.latlng,
    flag: city.flags.png,
    alt: city.flags.alt,
    arms: city.coatOfArms.svg,
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
        state.loading = 'failed';
      });
  },
});

export default citySlice.reducer;
