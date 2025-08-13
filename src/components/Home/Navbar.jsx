import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUniversity,
  faUserGraduate,
  faSignInAlt,
  faUser,
  faBars,
  faTimes,
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // import CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleRegisterClick = (type) => {
    setIsModalOpen(false);
    if (type === 'university') {
      navigate('/university-register');
    } else {
      navigate('/student-register');
    }
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <FontAwesomeIcon icon={faUniversity} className="logo-icon" />
          <h1>University Hub</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-btn">
          <button onClick={toggleMenu} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Menu Links */}
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/university-page" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faUniversity} /> University Page
          </Link>

          {/* Register Modal Trigger */}
          <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>
            <FontAwesomeIcon icon={faUserGraduate} /> Register
          </button>

          {/* Auth Buttons */}
          <Link to="/login" className="btn-secondary" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Link>
          <Link to="/signup" className="btn-secondary" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faUser} /> Signup
          </Link>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="theme-toggle">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Register As</h2>
            <div className="modal-buttons">
              <button className="btn-secondary" onClick={() => handleRegisterClick('university')}>
                <FontAwesomeIcon icon={faUniversity} /> University
              </button>
              <button className="btn-secondary" onClick={() => handleRegisterClick('student')}>
                <FontAwesomeIcon icon={faUserGraduate} /> Student
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
