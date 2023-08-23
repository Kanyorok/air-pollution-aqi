import React from 'react';
import Header from './Header';
import SpecificInfo from './SpecificInfo';

const Homepage = () => (
  <div>
    <Header title="Air-Pollution-AQI DETECTOR" />
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 bg-[#b13967] border-b px-3 py-4 dark:border-neutral-500">
        <p className="text-white">Search a City</p>
      </div>
    </div>
    <table className="table-fixed w-full border dark:border-neutral-500 mb-4">
      <tbody>
        <SpecificInfo />
      </tbody>
    </table>
  </div>
);

export default Homepage;
