const CITY_API_DATA = 'https://restcountries.com/v3.1/all';

export const fetchCitiesCountries = async () => {
  try {
    const response = await fetch(CITY_API_DATA);
    const citydata = await response.json();
    return citydata;
  } catch (error) {
    throw Error(error);
  }
};

export const fetchWeatherData = async ({ lat, lon }) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=5218c1a16f218529249067e48a1d8d8b`);
    const aqiData = await response.json();
    return aqiData;
  } catch (error) {
    throw Error(error);
  }
};
