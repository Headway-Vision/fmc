// src/pages/StudentSignup.jsx
import React, { useState } from 'react';
import FormInput from '../components/FormInput';

const StudentSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    pincode: '',
    university: '',
    course: '',
    branch: '',
    academicDetails: '',
    documents: null,
    counsellingBook: '',
    scholarshipDoc: null,
  });

  const universities = [
    'Delhi University',
    'Jawaharlal Nehru University',
    'IIT Bombay',
    'IIT Delhi',
    'IIM Ahmedabad',
    'Anna University',
    'Amity University',
  ];

  const courses = [
    'B.Tech',
    'MBA',
    'B.Sc',
    'BBA',
    'M.Tech',
    'MCA',
    'Ph.D',
  ];

  const branches = [
    'Computer Science',
    'Electronics',
    'Mechanical Engineering',
    'Civil Engineering',
    'Marketing',
    'Finance',
    'Human Resources',
  ];

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Signup Data:", formData);
    alert("Student signed up successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Student Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="py-1.5"
            />
            <FormInput
              label="Mobile No."
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your mobile number"
              className="py-1.5"
            />
          </div>

          {/* Row 2: Email & Pincode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="py-1.5"
            />
            <FormInput
              label="Pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Your pincode"
              className="py-1.5"
            />
          </div>

          {/* Row 3: Address */}
          <FormInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your address"
            className="py-1.5"
          />

          {/* Row 4: University & Course */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                University Name
              </label>
              <select
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select University</option>
                {universities.map((uni, idx) => (
                  <option key={idx} value={uni}>{uni}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Name
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select Course</option>
                {courses.map((course, idx) => (
                  <option key={idx} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 5: Branch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Branch
            </label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Branch</option>
              {branches.map((branch, idx) => (
                <option key={idx} value={branch}>{branch}</option>
              ))}
            </select>
          </div>

          {/* Row 6: Academic Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Academic Details
            </label>
            <textarea
              name="academicDetails"
              value={formData.academicDetails}
              onChange={handleChange}
              placeholder="Previous academic records, grades, etc."
              rows="3"
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Row 7: Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Documents
              </label>
              <input
                type="file"
                name="documents"
                onChange={handleChange}
                className="block w-full text-sm border border-gray-300 rounded-md py-1.5"
              />
            </div>
            <FormInput
              label="Counselling Book"
              name="counsellingBook"
              value={formData.counsellingBook}
              onChange={handleChange}
              placeholder="Enter counselling book details"
              className="py-1.5"
            />
          </div>

          {/* Row 8: Scholarship Document */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Scholarship Document (if applicable)
            </label>
            <input
              type="file"
              name="scholarshipDoc"
              onChange={handleChange}
              className="block w-full text-sm border border-gray-300 rounded-md py-1.5"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentSignup;
