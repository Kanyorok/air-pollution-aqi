import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import SpecificInfo from './SpecificInfo';
import { displayCities } from '../redux/cities.js/citySlice';

const Homepage = () => {
  const { cities } = useSelector((state) => state.cities);
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayCities());
  }, [dispatch]);

  const filteredCities = cities.filter((city) => (
    city.cityName && city.cityName[0].toLowerCase().includes(searchQuery.toLowerCase())
  ));

  return (
    <div>
      <Header title="Air-Pollution-AQI DETECTOR" />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 bg-[#b13967] border-b dark:border-neutral-500 text-white">
          <input
            type="text"
            placeholder="Search a City"
            className="w-full p-3 bg-[#b13967] placeholder-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <table className="table-fixed w-full border dark:border-neutral-500 mb-4">
        <tbody>
          {
            filteredCities.map((city) => (
              <SpecificInfo key={city.id} city={city} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
