import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = ({ title }) => (
  <div className="flex bg-[#df4782] border-b-2 pt-3 pb-3">
    {title !== 'Air-Pollution-AQI DETECTOR' && (
    <Link type="button" to="/">
      <FontAwesomeIcon icon={faAngleLeft} className="mx-3 text-white" />
    </Link>
    )}
    <header className="flex justify-center px-4 max-w-6xl mx-auto">
      <h1 className="text-white">{title}</h1>
    </header>
    <div className="flex justify-evenly mr-3">
      <FontAwesomeIcon icon={faGear} className="mx-3 text-white" />
      <FontAwesomeIcon icon={faMicrophone} className="text-white" />
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
