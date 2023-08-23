import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const SpecificInfo = () => (
  <>
    <tr className="bg-[#e94988] text-white">
      <td className="px-6 py-4">
        <div className="flex flex-col items-end">
          <h2 className="font-bold">City</h2>
          <h3>Hiroshima</h3>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col items-end">
          <h2 className="font-bold">Country</h2>
          <h3>Japan</h3>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col items-end">
          <h2 className="font-bold">Population</h2>
          <h3>37.7m</h3>
        </div>
      </td>
    </tr>
    <tr className="bg-[#e94988]">
      <td colSpan="3">
        <div className="flex flex-row-reverse px-3 py-4 items-center">
          <FontAwesomeIcon icon={faCircleArrowRight} className="text-white" />
          <p className="mr-2 text-white">See AQI</p>
        </div>
      </td>
    </tr>
    <tr className="bg-[#df4782] text-white">
      <td className="px-6 py-4">
        <div className="flex flex-col items-end">
          <h2 className="font-bold">City</h2>
          <h3>Hiroshima</h3>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col items-end">
          <h2 className="font-bold">Country</h2>
          <h3>Japan</h3>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-col items-end">
          <h2 className="font-bold">Population</h2>
          <h3>37.7m</h3>
        </div>
      </td>
    </tr>
    <tr className="bg-[#df4782]">
      <td colSpan="3">
        <div className="flex flex-row-reverse px-3 py-4 items-center">
          <FontAwesomeIcon icon={faCircleArrowRight} className="text-white" />
          <p className="mr-2 text-white">See AQI</p>
        </div>
      </td>
    </tr>
  </>
);

export default SpecificInfo;
