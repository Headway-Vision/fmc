import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUniversity, faUserGraduate, faSignInAlt, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm px-4 sm:px-6 py-3 flex justify-between items-center sticky top-0 z-50 w-full">

      <div className="flex items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-blue-700 tracking-tight">
          <FontAwesomeIcon icon={faUniversity} className="h-6 w-6 mr-2" />
          University Hub
        </h1>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
        </button>
      </div>
      <div className={`${
        isOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none px-4 md:px-0 py-4 md:py-0 gap-4 md:gap-6 text-sm text-gray-700 items-center md:items-center transition-all duration-300`}>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <Link
            to="/"
            className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faHome} className="h-4 w-4" />
            Home
          </Link>
          <Link
            to="/university-register"
            className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faUniversity} className="h-4 w-4" />
            University Register
          </Link>
          <Link
            to="/student-register"
            className="hover:text-blue-600 flex items-center gap-1 py-2 md:py-0"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faUserGraduate} className="h-4 w-4" />
            Student Register
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-4 ml-0 md:ml-6">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm font-medium flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faSignInAlt} className="h-4 w-4" />
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 text-sm font-medium flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;