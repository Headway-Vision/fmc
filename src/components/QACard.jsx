
import React from 'react';

const QACard = ({ question }) => {
  return (
    <div className="border p-4 rounded-md shadow bg-white">
      <h3 className="font-semibold text-gray-800">{question.title}</h3>
      <p className="text-sm text-gray-600">{question.answer}</p>
    </div>
  );
};

export default QACard;
