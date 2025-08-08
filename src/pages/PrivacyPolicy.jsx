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
import './UniversityPage.css'; // Retain existing CSS for navbar
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      {/* Navbar (Unchanged) */}
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

      {/* Enhanced Privacy Policy Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: August 08, 2025
          </p>
        </header>

        <div className="space-y-8">
          {[
            {
              title: "Our Privacy Policy",
              content: "We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, store, and protect your personal information when you use our services, website, or applications."
            },
            {
              title: "The Types of Personal Information That We Collect and Hold",
              content: "We may collect and hold personal information such as your name, email address, phone number, billing information, and other details you provide when interacting with our services. This information is collected to provide and improve our services, process transactions, and communicate with you."
            },
            {
              title: "Registration",
              content: "When you register for an account on our platform, we collect information such as your name, email address, and password. This information is used to create and manage your account, verify your identity, and provide personalized services."
            },
            {
              title: "Application Form",
              content: "If you submit an application form for any of our services, we may collect additional information such as your address, date of birth, or other relevant details. This information is used to process your application and ensure eligibility for our services."
            },
            {
              title: "Log Files",
              content: "Like most websites, we use log files to collect information about how our services are used. This includes data such as your browser type, operating system, referring URLs, pages visited, and the date and time of your visit. Log files help us analyze trends and improve our platform."
            },
            {
              title: "IP Addresses and Information About Your Computer and Mobile Device",
              content: "We may collect your IP address and information about your computer or mobile device, such as device type, operating system, and browser version. This information helps us ensure the security of our platform and optimize your user experience."
            },
            {
              title: "Use of Your Personal Information",
              content: "Your personal information is used to provide and improve our services, process transactions, communicate with you, and comply with legal obligations. We may also use your information to send you updates, newsletters, or promotional materials, provided you have given consent where required."
            },
            {
              title: "Sharing of Your Information",
              content: "We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our platform, provided they agree to keep your information confidential. We may also share information to comply with legal requirements or protect our rights."
            },
            {
              title: "Cookies",
              content: "We use cookies and similar technologies to enhance your experience on our platform. Cookies help us remember your preferences, analyze site usage, and deliver personalized content. You can manage your cookie preferences through your browser settings."
            },
            {
              title: "Advertising",
              content: "We may use third-party advertising services to display ads on our platform. These services may use cookies or other tracking technologies to serve relevant advertisements based on your interests. You can opt out of targeted advertising through your browser or third-party tools."
            },
            {
              title: "Links to Other Platforms",
              content: "Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these platforms. We encourage you to review the privacy policies of any third-party sites you visit."
            },
            {
              title: "Your Obligations",
              content: "You are responsible for providing accurate and up-to-date information when using our services. You must also comply with our terms of service and applicable laws. Failure to do so may result in the suspension or termination of your account."
            },
            {
              title: "Cancellation and Refund Policy",
              content: "If you wish to cancel your subscription or request a refund, please contact us at the details provided below. Refunds are subject to our terms and conditions, and eligibility will be determined on a case-by-case basis."
            },
            {
              title: "Changes to Our Privacy Policy",
              content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our platform or through other communication channels."
            },
            {
              title: "User Communications",
              content: "We may communicate with you via email, in-app notifications, or other methods to provide updates about your account, services, or promotions. You can manage your communication preferences in your account settings."
            },
            {
              title: "How to Contact Us",
              content: (
                <>
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;