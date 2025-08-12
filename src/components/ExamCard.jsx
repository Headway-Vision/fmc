
import React from 'react';

const ExamCard = ({ exam }) => {
  return (
    <div className="border p-4 rounded-md shadow bg-white">
      <h2 className="font-bold text-lg">{exam.name}</h2>
      <p className="text-gray-600">Date: {exam.date}</p>
      <p className="text-sm mt-2">{exam.description}</p>
    </div>
  );
};

export default ExamCard;
