import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faBookOpen, faUserGraduate, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleLineClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full overflow-hidden relative h-[400px]">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleLineClick(index)}
            className={`w-8 h-1 rounded-sm ${
              currentSlide === index ? 'bg-blue-700' : 'bg-gray-400'
            } hover:bg-blue-500 transition`}
          />
        ))}
      </div>
    </div>
  );
};

const SearchBarWithFilters = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('');
  const [level, setLevel] = useState('');
  const [location, setLocation] = useState('');
  const [courseType, setCourseType] = useState('');
  const [tuitionRange, setTuitionRange] = useState('');
  const [admissionStatus, setAdmissionStatus] = useState('');
  const [campusFacilities, setCampusFacilities] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  const handleSearch = () => {
    onSearch({ searchTerm, department, level, location, courseType, tuitionRange, admissionStatus, campusFacilities });
  };

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <div className="relative flex-1">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-base"
          />
          <input
            type="text"
            placeholder="Search courses, colleges, departments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-blue-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 text-sm font-medium"
          />
        </div>
        <div className="relative w-full md:w-auto">
          <button
            onClick={toggleFilter}
            className="w-full md:w-20 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-xs font-medium"
          >
            <FontAwesomeIcon icon={faFilter} className="text-white text-base" />
            Filters
          </button>
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                ref={filterRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute top-full left-0 mt-2 w-full md:w-[720px] bg-white border border-blue-200 rounded-lg shadow-xl p-4 z-20"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1">Department</label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm"
                      />
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
                      >
                        <option value="">All Departments</option>
                        <option value="cs">Computer Science</option>
                        <option value="bba">Business Administration</option>
                        <option value="eco">Economics</option>
                        <option value="eng">English</option>
                        <option value="bio">Biology</option>
                        <option value="phy">Physics</option>
                        <option value="math">Mathematics</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1">Level</label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm"
                      />
                      <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="w-full pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
                      >
                        <option value="">All Levels</option>
                        <option value="ug">Undergraduate</option>
                        <option value="pg">Postgraduate</option>
                        <option value="phd">PhD</option>
                        <option value="diploma">Diploma</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1">Location</label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm"
                      />
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
                      >
                        <option value="">All Locations</option>
                        <option value="delhi">Delhi</option>
                        <option value="noida">Noida</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="kolkata">Kolkata</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1">Course Type</label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm"
                      />
                      <select
                        value={courseType}
                        onChange={(e) => setCourseType(e.target.value)}
                        className="w-full pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
                      >
                        <option value="">All Course Types</option>
                        <option value="full-time">Full-Time</option>
                        <option value="online">Online</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1">Tuition Range (INR)</label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm"
                      />
                      <select
                        value={tuitionRange}
                        onChange={(e) => setTuitionRange(e.target.value)}
                        className="w-full pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
                      >
                        <option value="">All Ranges</option>
                        <option value="0-50000">0 - 50,000</option>
                        <option value="50001-100000">50,001 - 100,000</option>
                        <option value="100001-200000">100,001 - 200,000</option>
                        <option value="200001+">200,001+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1">Admission Status</label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm"
                      />
                      <select
                        value={admissionStatus}
                        onChange={(e) => setAdmissionStatus(e.target.value)}
                        className="w-full pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
                      >
                        <option value="">All Statuses</option>
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                        <option value="rolling">Rolling</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-gray-700 mb-1">Campus Facilities</label>
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faFilter}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500 text-sm"
                      />
                      <select
                        value={campusFacilities}
                        onChange={(e) => setCampusFacilities(e.target.value)}
                        className="w-full pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
                      >
                        <option value="">All Facilities</option>
                        <option value="hostel">Hostel Available</option>
                        <option value="library">Library</option>
                        <option value="sports">Sports Facilities</option>
                        <option value="labs">Advanced Labs</option>
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 transform hover:scale-105 text-xs font-medium w-full md:w-auto"
        >
          Search
        </button>
      </div>
    </div>
  );
};

const CourseSection = ({ courseName, universities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < universities.length; i++) {
      cards.push(universities[(currentIndex + i) % universities.length]);
    }
    return cards;
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">{courseName}</h3>
      <div className="w-full max-w-6xl overflow-hidden mx-auto">
        <motion.div
          className="flex"
          animate={{
            x: `-${(currentIndex % universities.length) * (100 / 4)}%`, // Adjust for 4 cards visible
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          {getVisibleCards().map((uni, index) => (
            <motion.div
              key={`${uni.name}-${index}`}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={uni.link}
                className="bg-white border border-blue-200 shadow-sm rounded-xl overflow-hidden hover:shadow-md transition group block"
              >
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="p-4">
                  <h4 className="text-base font-semibold text-blue-700 mb-1">{uni.name}</h4>
                  <p className="text-xs text-gray-600">{uni.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Home = () => {
  const handleSearch = (searchData) => {
    console.log('Search Data:', searchData);
  };

  const topPlaces = [
    {
      name: 'IIT Delhi',
      location: 'Delhi',
      image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/iit-delhi'
    },
    {
      name: 'IIM Bangalore',
      location: 'Bangalore',
      image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/iim-bangalore'
    },
    {
      name: 'JNU',
      location: 'Delhi',
      image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/jnu'
    },
    {
      name: 'IISc Bangalore',
      location: 'Bangalore',
      image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/iisc-bangalore'
    },
    {
      name: 'BITS Pilani',
      location: 'Pilani',
      image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/bits-pilani'
    },
    {
      name: 'NIT Trichy',
      location: 'Tiruchirappalli',
      image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/nit-trichy'
    }
  ];

  const courseData = {
    MBA: [
      { name: 'IIM Ahmedabad', location: 'Ahmedabad', image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180', link: '/colleges/iim-ahmedabad' },
      { name: 'IIM Bangalore', location: 'Bangalore', image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180', link: '/colleges/iim-bangalore' },
      { name: 'IIM Calcutta', location: 'Kolkata', image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180', link: '/colleges/iim-calcutta' },
      { name: 'IIM Lucknow', location: 'Lucknow', image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180', link: '/colleges/iim-lucknow' },
      { name: 'XLRI Jamshedpur', location: 'Jamshedpur', image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200', link: '/colleges/xlri-jamshedpur' },
      { name: 'FMS Delhi', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180', link: '/colleges/fms-delhi' },
      { name: 'SPJIMR Mumbai', location: 'Mumbai', image: 'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180', link: '/colleges/spjimr-mumbai' },
      { name: 'MDI Gurgaon', location: 'Gurgaon', image: 'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180', link: '/colleges/mdi-gurgaon' },
    ],
    BTech: [
      { name: 'IIT Bombay', location: 'Mumbai', image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180', link: '/colleges/iit-bombay' },
      { name: 'IIT Delhi', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180', link: '/colleges/iit-delhi' },
      { name: 'IIT Madras', location: 'Chennai', image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180', link: '/colleges/iit-madras' },
      { name: 'IIT Kanpur', location: 'Kanpur', image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180', link: '/colleges/iit-kanpur' },
      { name: 'IIT Kharagpur', location: 'Kharagpur', image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200', link: '/colleges/iit-kharagpur' },
      { name: 'BITS Pilani', location: 'Pilani', image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180', link: '/colleges/bits-pilani' },
      { name: 'NIT Trichy', location: 'Tiruchirappalli', image: 'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180', link: '/colleges/nit-trichy' },
      { name: 'IIIT Hyderabad', location: 'Hyderabad', image: 'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180', link: '/colleges/iiit-hyderabad' },
    ],
    MBBS: [
      { name: 'AIIMS Delhi', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180', link: '/colleges/aiims-delhi' },
      { name: 'CMC Vellore', location: 'Vellore', image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180', link: '/colleges/cmc-vellore' },
      { name: 'JIPMER Puducherry', location: 'Puducherry', image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180', link: '/colleges/jipmer-puducherry' },
      { name: 'AFMC Pune', location: 'Pune', image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180', link: '/colleges/afmc-pune' },
      { name: 'Maulana Azad Medical College', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200', link: '/colleges/mamc-delhi' },
      { name: 'Kasturba Medical College', location: 'Manipal', image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180', link: '/colleges/kmc-manipal' },
      { name: 'King George’s Medical University', location: 'Lucknow', image: 'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180', link: '/colleges/kgmu-lucknow' },
      { name: 'Grant Medical College', location: 'Mumbai', image: 'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180', link: '/colleges/gmc-mumbai' },
    ],
    BSc: [
      { name: 'St. Stephen’s College', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180', link: '/colleges/st-stephens-delhi' },
      { name: 'Hindu College', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180', link: '/colleges/hindu-college' },
      { name: 'Miranda House', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180', link: '/colleges/miranda-house' },
      { name: 'Loyola College', location: 'Chennai', image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180', link: '/colleges/loyola-chennai' },
      { name: 'Christ University', location: 'Bangalore', image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200', link: '/colleges/christ-university' },
      { name: 'Presidency College', location: 'Chennai', image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180', link: '/colleges/presidency-chennai' },
      { name: 'Madras Christian College', location: 'Chennai', image: 'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180', link: '/colleges/mcc-chennai' },
      { name: 'Fergusson College', location: 'Pune', image: 'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180', link: '/colleges/fergusson-pune' },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < topPlaces.length; i++) {
      cards.push(topPlaces[(currentIndex + i) % topPlaces.length]);
    }
    return cards;
  };

  return (
    <>
      <div className="w-full">
        <Navbar />
        <ImageSlider />
      </div>
      <SearchBarWithFilters onSearch={handleSearch} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-12 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 drop-shadow-sm">
          Top Places for Study
        </h2>
        <div className="w-full max-w-6xl overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${(currentIndex % topPlaces.length) * (100 / 3)}%`,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            {getVisibleCards().map((place, index) => (
              <motion.div
                key={`${place.name}-${index}`}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={place.link}
                  className="bg-white border border-blue-200 shadow-sm rounded-xl overflow-hidden hover:shadow-md transition group block"
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">{place.name}</h3>
                    <p className="text-sm text-gray-600">{place.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-12 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 drop-shadow-sm">
          Top Universities by Course
        </h2>
        <CourseSection courseName="MBA" universities={courseData.MBA} />
        <CourseSection courseName="B.Tech" universities={courseData.BTech} />
        <CourseSection courseName="MBBS" universities={courseData.MBBS} />
        <CourseSection courseName="BSc" universities={courseData.BSc} />
      </div>
      <Footer />
    </>
  );
};

export default Home;