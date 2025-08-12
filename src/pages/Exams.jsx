
import React from 'react';
import ExamCard from '../components/ExamCard';
import { exams } from '../data/mockData';

const Exams = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Upcoming Entrance Exams</h2>
      <div className="space-y-4">
        {exams.map((exam, index) => (
          <ExamCard key={index} exam={exam} />
        ))}
      </div>
    </div>
  );
};

export default Exams;
