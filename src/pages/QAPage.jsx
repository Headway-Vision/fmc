
import React from 'react';
import QACard from '../components/QACard';
import { questions } from '../data/mockData';

const QAPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">FAQs & Student Questions</h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <QACard key={index} question={question} />
        ))}
      </div>
    </div>
  );
};

export default QAPage;
