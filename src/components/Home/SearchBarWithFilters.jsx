import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

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
          {isFilterOpen && (
            <div
              ref={filterRef}
              className="absolute top-full left-[60%] transform -translate-x-[40%] mt-4 w-full md:w-[720px] bg-white border border-blue-200 rounded-lg shadow-xl p-4 z-10 transition-all duration-300 ease-in-out transform scale-95 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards]"
            >
              <div className="grid grid-cols-3 gap-4">
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
                      className="w-36 pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
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
                      className="w-36 pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
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
                      className="w-36 pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
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
                      className="w-36 pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
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
                      className="w-36 pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
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
                      className="w-36 pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
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
                      className="w-36 pl-8 pr-3 py-1 rounded-md border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-blue-50 text-gray-800 transition duration-300 text-xs"
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
            </div>
          )}
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

export default SearchBarWithFilters;