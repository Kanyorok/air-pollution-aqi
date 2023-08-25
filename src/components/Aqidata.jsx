import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import millify from 'millify';
import Header from './Header';
import { displayWeatherData } from '../redux/Aqidata/aqidataSlice';

const Aqiweather = () => {
  const location = useLocation();
  const { city } = location.state;
  const { weather } = useSelector((state) => state.weather);

  const dispatch = useDispatch();
  useEffect(() => {
    const obj = {
      lat: city.coordinates[0],
      lon: city.coordinates[1],
    };
    dispatch(displayWeatherData(obj));
  }, [city.coordinates, dispatch]);

  const weatherList = weather?.list || [];

  return (
    <div className="bg-[#e94988]">
      <Header title={city.cityName[0]} />
      <table className="table-fixed bg-[#e94988] w-full mb-4">
        <thead>
          <tr className="bg-[#e94988] text-white">
            <td>
              <div className="flex justify-between items-start">
                <div className="px-3 py-4 items-start flex cursor-pointer">
                  <img src={city.flag} alt={city.alt} width="200" />
                </div>
                <div className="px-3 py-4 flex flex-col items-end cursor-pointer">
                  <h2 className="font-semibold">Country</h2>
                  <p>{city.country}</p>
                  <h2 className="font-semibold">Population</h2>
                  <p>{millify(city.population)}</p>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>
              <div className="flex justify-center items-center">
                <div className="px-3 py-4 items-center flex cursor-pointer">
                  <h4 className="text-white">Weather Data</h4>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        {weatherList.map((weatherData) => (
          <tbody key={weatherData.dt}>
            <tr className="bg-[#df4782] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">AQI</h2>
                  <h3>{weatherData.main.aqi}</h3>
                </div>
              </td>
            </tr>
            <tr className="bg-[#e94988] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">CO</h2>
                  <h3>{weatherData.components.co}</h3>
                </div>
              </td>
            </tr>
            <tr className="bg-[#df4782] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">NO</h2>
                  <h3>{weatherData.components.no}</h3>
                </div>
              </td>
            </tr>
            <tr className="bg-[#e94988] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">NO2</h2>
                  <h3>{weatherData.components.no2}</h3>
                </div>
              </td>
            </tr>
            <tr className="bg-[#df4782] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">O3</h2>
                  <h3>{weatherData.components.o3}</h3>
                </div>
              </td>
            </tr>
            <tr className="bg-[#e94988] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">SO2</h2>
                  <h3>{weatherData.components.so2}</h3>
                </div>
              </td>
            </tr>
            <tr className="bg-[#df4782] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">PM2_5</h2>
                  <h3>{weatherData.components.pm2_5}</h3>
                </div>
              </td>
            </tr>
            <tr className="bg-[#e94988] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">PM10</h2>
                  <h3>{weatherData.components.pm10}</h3>
                </div>
              </td>
            </tr>
            <tr className="bg-[#df4782] text-white">
              <td className="w-1/6 whitespace-wrap px-2 py-2">
                <div className="flex items-start justify-between">
                  <h2 className="font-bold">NH3</h2>
                  <h3>{weatherData.components.nh3}</h3>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Aqiweather;
