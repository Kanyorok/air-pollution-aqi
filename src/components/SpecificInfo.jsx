import React from 'react';
import PropTypes from 'prop-types';
import millify from 'millify';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import globe from '../assets/globe.png';

const SpecificInfo = ({ city }) => {
  const isOddRow = city.id % 2 === 1;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${city.id}`, { state: { city } });
  };

  return (
    <>
      <tr
        className={
          isOddRow ? 'bg-[#e94988] text-white' : 'bg-[#df4782] text-white'
        }
      >
        <td>
          <div className="flex justify-between items-start">
            <div className="px-3 py-4 items-center justify-center mt-5 flex cursor-pointer">
              <img src={city.arms || globe} alt={city.alt} width="120" />
            </div>
            <div className="px-3 mb-4 flex flex-col items-end cursor-pointer">
              <div className="flex flex-row-reverse items-center">
                <button
                  type="button"
                  className="py-4 items-center flex cursor-pointer"
                  onClick={handleClick}
                >
                  <p className="mr-2 text-white">See AQI</p>
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="text-white"
                  />
                </button>
              </div>
              <h2 className="font-bold">City</h2>
              <h3>{city.cityName ? city.cityName[0] : ''}</h3>
              <h2 className="font-semibold">Country</h2>
              <p>{city.country}</p>
              <h2 className="font-semibold">Population</h2>
              <p>{millify(city.population)}</p>
            </div>
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
