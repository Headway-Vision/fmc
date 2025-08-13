import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseSection = ({ courseName, universities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < universities.length; i++) {
      cards.push(universities[(currentIndex + i) % universities.length]);
    }
    return cards;
  };

  return (
    <div className="mb-12">
      <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">{courseName}</h3>
      <div className="w-full max-w-6xl overflow-hidden mx-auto">
        <motion.div
          className="flex"
          animate={{
            x: `-${(currentIndex % universities.length) * (100 / 4)}%`, // Adjust for 4 cards visible
          }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          {getVisibleCards().map((uni, index) => (
            <motion.div
              key={`${uni.name}-${index}`}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                to={uni.link}
                className="bg-white border border-blue-200 shadow-sm rounded-xl overflow-hidden hover:shadow-md transition group block"
              >
                <img
                  src={uni.image}
                  alt={uni.name}
                  className="w-full h-32 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="p-4">
                  <h4 className="text-base font-semibold text-blue-700 mb-1">{uni.name}</h4>
                  <p className="text-xs text-gray-600">{uni.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CourseSection;