
import React from 'react';
import ScholarshipCard from '../components/ScholarshipCard';
import { scholarships } from '../data/mockData';

const Scholarships = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Scholarship Opportunities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard key={index} scholarship={scholarship} />
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
