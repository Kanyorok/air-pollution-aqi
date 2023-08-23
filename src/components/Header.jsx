import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Header = ({ title }) => (
  <div className="flex bg-[#ec4c8b] border-b-2 pt-3 pb-3">
    <header className="flex justify-center px-4 max-w-6xl mx-auto">
      <h1 className="text-white">{title}</h1>
    </header>
    <div className="flex justify-evenly mx-6">
      <FontAwesomeIcon icon={faGear} className="mx-3 text-white" />
      <FontAwesomeIcon icon={faMicrophone} className="text-white" />
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
