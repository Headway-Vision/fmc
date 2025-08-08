import React from 'react';
import { FaUser, FaChartPie, FaMapMarkerAlt, FaBuilding, FaUserMd, FaHistory, FaCog } from 'react-icons/fa';

const UniversityDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-purple-800">U-Dash</h1>
          <input
            type="text"
            placeholder="Search..."
            className="ml-4 p-2 rounded-lg border border-gray-300"
          />
        </div>
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />
          <span className="text-gray-700">John Doe</span>
        </div>
      </div>

      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg mb-6">
        Register Student +
      </button>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-3xl font-bold text-purple-600">5,120</div>
          <div className="text-gray-600">Total Students</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-3xl font-bold text-purple-600">150</div>
          <div className="text-gray-600">Available Staff</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-3xl font-bold text-purple-600">$12,500</div>
          <div className="text-gray-600">Avg Tuition Costs</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-3xl font-bold text-purple-600">25</div>
          <div className="text-gray-600">Available Rooms</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Enrollment Trend</h3>
          <div className="h-40 flex items-center justify-center">
            <div className="w-full h-full bg-gray-200">Chart Placeholder</div>
          </div>
          <select className="mt-2 p-2 rounded-lg border border-gray-300 w-full">
            <option>Show by months</option>
          </select>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Students by Gender</h3>
          <div className="h-40 flex items-center justify-center">
            <div className="w-full h-full bg-gray-200">Pie Chart Placeholder</div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Students by Department</h3>
          <div className="space-y-2">
            <div>Engineering: 320</div>
            <div>Arts: 180</div>
            <div>Science: 150</div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <aside className="w-64 bg-white p-4 rounded-lg shadow">
          <nav className="space-y-4">
            <div className="flex items-center"><FaUser className="mr-2" /> Patients</div>
            <div className="flex items-center"><FaChartPie className="mr-2" /> Overview</div>
            <div className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Map</div>
            <div className="flex items-center"><FaBuilding className="mr-2" /> Departments</div>
            <div className="flex items-center"><FaUserMd className="mr-2" /> Doctors</div>
            <div className="flex items-center"><FaHistory className="mr-2" /> History</div>
            <div className="flex items-center"><FaCog className="mr-2" /> Settings</div>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default UniversityDashboard;