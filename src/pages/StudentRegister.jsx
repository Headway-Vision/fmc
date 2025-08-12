
import React, { useState } from 'react';
import FormInput from '../components/FormInput';

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Registered:", formData);
    alert("Student registered successfully!");
    // TODO: Add API integration
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Student Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
          />
          <FormInput
            label="Interested Course/Field"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            placeholder="e.g., B.Tech, MBA, Fashion Design"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
