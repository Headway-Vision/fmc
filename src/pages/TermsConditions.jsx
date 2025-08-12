import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faBell,
  faMoon,
  faSun,
  faCompass,
  faRightToBracket,
  faUserPlus,
  faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { applyTheme } from '../utils/themeUtils';
import Footer from '../components/Footer';
import './UniversityPage.css'; // Assuming the same CSS for navbar styling

const TermsAndConditions = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    applyTheme(darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      
      <nav className="shadow-md">
        <div className="flex items-center">
          <img
            src="https://marketplace.canva.com/EAGSIcoid00/1/0/1600w/canva-blue-white-modern-school-logo-ZBxBTP6Lc-E.jpg"
            alt="Logo"
            className="h-8 mr-2"
          />
          <span className={`font-bold ${!darkMode ? 'text-black' : ''}`}>Uni Hub</span>
        </div>

        <div className="flex-1 mx-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-full"
          />
        </div>

        <div className="flex items-center space-x-2 relative">
          <button className="bg-[var(--button-accent)] text-[var(--text-color)] hover:bg-[var(--button-hover)]">
            Write a Review
          </button>
          <button className="flex items-center bg-[var(--button-primary)] text-white hover:bg-[var(--button-hover)]">
            <FontAwesomeIcon icon={faCompass} className="fa-compass mr-1 text-white" />
            Explore
          </button>
          <button className="bg-[var(--button-primary)] rounded-full hover:bg-[var(--button-hover)]">
            <FontAwesomeIcon icon={faBell} className="fa-bell text-white" />
          </button>
          <button className="bg-[var(--button-primary)] rounded-full hover:bg-[var(--button-hover)]" onClick={toggleTheme}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className={`${darkMode ? 'fa-sun' : 'fa-moon'} text-white`} />
          </button>
          <Link
            to="/privacy-policy"
            className={`bg-[var(--button-primary)] text-white hover:bg-[var(--button-hover)] px-4 py-2 rounded ${
              location.pathname === '/privacy-policy' ? 'bg-[var(--button-hover)]' : ''
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-and-conditions"
            className={`bg-[var(--button-primary)] text-white hover:bg-[var(--button-hover)] px-4 py-2 rounded ${
              location.pathname === '/terms-and-conditions' ? 'bg-[var(--button-hover)]' : ''
            }`}
          >
            Terms & Conditions
          </Link>
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="bg-[var(--button-primary)] rounded-full hover:bg-[var(--button-hover)]"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
            >
              <FontAwesomeIcon icon={faUser} className="fa-user text-white" />
            </button>
            {showUserDropdown && (
              <div className="dropdown-menu">
                {user ? (
                  <>
                    <p className="text-[var(--dropdown-text)]">Signed in as <br /><strong>{user.name}</strong></p>
                    <button
                      className="flex items-center w-full text-left text-[var(--dropdown-text)] hover:text-[var(--button-hover)]"
                      onClick={() => setUser(null)}
                    >
                      <FontAwesomeIcon icon={faArrowRightFromBracket} className="fa-arrow-right-from-bracket mr-1" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button className="flex items-center w-full text-left text-[var(--dropdown-text)] mb-1 hover:text-[var(--button-hover)]">
                      <FontAwesomeIcon icon={faRightToBracket} className="fa-right-to-bracket mr-1" />
                      Login
                    </button>
                    <button className="flex items-center w-full text-left text-[var(--dropdown-text)] hover:text-[var(--button-hover)]">
                      <FontAwesomeIcon icon={faUserPlus} className="fa-user-plus mr-1" />
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
          <select className="bg-[var(--button-primary)] text-[var(--text-color)] hover:bg-[var(--button-hover)]">
            <option>All Courses</option>
            <option>B.Tech</option>
            <option>MBA</option>
            <option>BAMS</option>
            <option>BPharma</option>
            <option>BCA</option>
            <option>BBA</option>
          </select>
        </div>
      </nav>

      {/* Terms and Conditions Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl flex-1">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: August 08, 2025
          </p>
        </header>

        <div className="space-y-8">
          {[
            {
              title: "Terms & Conditions",
              content: "By accessing or using the Uni Hub platform, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services. These terms govern your use of our website, applications, and related services."
            },
            {
              title: "Cookies",
              content: "We use cookies and similar technologies to enhance your experience, analyze site usage, and deliver personalized content. By using our platform, you consent to our use of cookies as described in our Privacy Policy. You can manage cookie preferences through your browser settings."
            },
            {
              title: "License",
              content: "Unless otherwise stated, Uni Hub and/or its licensors own the intellectual property rights for all material on the platform. You are granted a limited, non-exclusive, non-transferable license to access and use the platform for personal, non-commercial purposes, subject to these terms."
            },
            {
              title: "You Must Not",
              content: (
                <>
                  You are prohibited from:
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Using the platform in any way that violates applicable laws or regulations.</li>
                    <li>Reproducing, duplicating, or reselling any part of our platform without permission.</li>
                    <li>Engaging in unauthorized data collection, such as scraping or harvesting user information.</li>
                    <li>Attempting to interfere with the platform’s functionality, including through hacking or introducing malware.</li>
                    <li>Using the platform to transmit unlawful or harmful content.</li>
                  </ul>
                </>
              )
            },
            {
              title: "User Comments",
              content: "Certain parts of our platform allow users to post comments, reviews, or other content. You are responsible for ensuring your comments are lawful, non-infringing, and comply with our guidelines. We reserve the right to moderate, edit, or remove user comments at our discretion."
            },
            {
              title: "Hyperlinking to Our Content",
              content: "You may link to our platform provided it is done in a fair and legal manner, does not damage our reputation, and does not suggest any unauthorized association or endorsement. Links must not be placed on sites that contain unlawful or objectionable content."
            },
            {
              title: "iFrames",
              content: "You may not create frames around our webpages or use techniques that alter the visual presentation or appearance of our platform without prior written consent from Uni Hub."
            },
            {
              title: "Content Liability",
              content: "We are not liable for any content posted by users or third parties on our platform. While we strive to ensure accuracy, we do not guarantee the completeness or reliability of information provided. You use the platform at your own risk."
            },
            {
              title: "Reservation of Rights",
              content: "We reserve the right to modify, suspend, or terminate any part of our platform or services at any time without notice. We also reserve the right to update these Terms and Conditions, with changes effective upon posting on our platform."
            },
            {
              title: "Removal of Links from Our Website",
              content: "We may request the removal of links to our platform if they are deemed inappropriate or harmful. If you link to our platform, you agree to remove such links promptly upon our request."
            },
            {
              title: "Disclaimer",
              content: "The Uni Hub platform is provided 'as is' without warranties of any kind, express or implied. We do not guarantee uninterrupted access, error-free operation, or the absence of viruses. To the fullest extent permitted by law, we disclaim liability for any damages arising from your use of the platform."
            },
            {
              title: "How to Contact Us",
              content: (
                <>
                  If you have any questions or concerns about these Terms and Conditions, please contact us at:
                  <br />
                  <strong>Email:</strong> support@example.com
                  <br />
                  <strong>Address:</strong> 123 Privacy Lane, Data City, DC 12345
                  <br />
                  <strong>Phone:</strong> (123) 456-7890
                </>
              )
            }
          ].map((section, index) => (
            <section
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <div className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditions;