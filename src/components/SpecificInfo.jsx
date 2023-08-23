import React from 'react';
import PropTypes from 'prop-types';
import millify from 'millify';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const SpecificInfo = ({ city }) => {
  const isOddRow = city.styleNo % 2 === 1;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${city.id}`);
  };

  return (
    <>
      <tr className={isOddRow ? 'bg-[#e94988] text-white' : 'bg-[#df4782] text-white'}>
        <td className="w-1/6 font-bold whitespace-wrap px-4 py-4">
          <div className="flex flex-col items-end">
            <h2 className="font-bold">City</h2>
            <h3>{city.cityName}</h3>
          </div>
        </td>
        <td className="w-1/6 font-bold whitespace-wrap px-2 py-4">
          <div className="flex flex-col items-end">
            <h2 className="font-bold">Country</h2>
            <h3>{city.country}</h3>
          </div>
        </td>
        <td className="w-1/6 font-bold whitespace-wrap px-4 py-4">
          <div className="flex flex-col items-end">
            <h2 className="font-bold">Population</h2>
            <h3>
              {millify(city.population)}
            </h3>
          </div>
        </td>
      </tr>
      <tr className={isOddRow ? 'bg-[#e94988] text-white' : 'bg-[#df4782] text-white'}>
        <td colSpan="3">
          <div className="flex flex-row-reverse items-center">
            <button type="button" className="px-3 py-4 items-center flex cursor-pointer" onClick={handleClick}>
              <p className="mr-2 text-white">See AQI</p>
              <FontAwesomeIcon icon={faCircleArrowRight} className="text-white" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

SpecificInfo.propTypes = {
  city: PropTypes.shape().isRequired,
};

export default SpecificInfo;
