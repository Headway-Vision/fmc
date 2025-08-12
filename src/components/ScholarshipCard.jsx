
import React from 'react';

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="border p-4 rounded-md shadow bg-white">
      <h2 className="font-bold text-lg">{scholarship.title}</h2>
      <p className="text-gray-600">Amount: ₹{scholarship.amount}</p>
      <p className="text-sm mt-2">{scholarship.eligibility}</p>
    </div>
  );
};

export default ScholarshipCard;
