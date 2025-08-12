
import React from 'react';

const UniversityCard = ({ university }) => {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-semibold">{university.name}</h2>
      <p className="text-gray-600">{university.city}</p>
      <p className="text-sm mt-2">{university.about}</p>
    </div>
  );
};

export default UniversityCard;
