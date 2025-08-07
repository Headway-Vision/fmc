import React, { useState } from 'react';
import { FaBook, FaMicroscope, FaLaptop, FaChalkboardTeacher, FaBus, FaUtensils, FaDumbbell, FaClinicMedical, FaHospital, FaFutbol, FaFlask, FaBolt, FaUsers, FaTemperatureHigh, FaBuilding, FaGraduationCap, FaMoneyBillWave, FaComments, FaStar } from 'react-icons/fa';
import { MdLibraryBooks, MdMeetingRoom, MdComputer, MdEmergency } from 'react-icons/md';
import { GiCricketBat, GiSoccerBall, GiTeacher } from 'react-icons/gi';
import { BiPlus } from 'react-icons/bi';
import './facilities.css';

const facilitiesData = [
  {
    id: 1,
    name: 'Library',
    icon: <FaBook />,
    description: 'Well-stocked central library with academic and reference materials.',
    reviews: ['Quiet place to study.', 'Huge collection of books.']
  },
  {
    id: 2,
    name: 'Digital Library',
    icon: <MdLibraryBooks />,
    description: 'Access to e-books, journals, and research databases.',
    reviews: ['Easy to use and modern.', 'Great for last-minute references.']
  },
  {
    id: 3,
    name: 'Computer Lab',
    icon: <MdComputer />,
    description: 'High-speed systems with all major software installed.',
    reviews: ['Well maintained PCs.', 'Good internet speed.']
  },
  {
    id: 4,
    name: 'Mechanical Lab',
    icon: <FaFlask />,
    description: 'Equipped with tools and machines for practical mechanical learning.',
    reviews: []
  },
  {
    id: 5,
    name: 'Civil Lab',
    icon: <FaBuilding />,
    description: 'Advanced tools and models for structural and civil engineering studies.',
    reviews: []
  },
  {
    id: 6,
    name: 'Electrical Lab',
    icon: <FaBolt />,
    description: 'Practical exposure to circuits, power systems, and measurements.',
    reviews: []
  },
  {
    id: 7,
    name: 'Digital Classroom',
    icon: <FaChalkboardTeacher />,
    description: 'Smart boards, digital content, and interactive teaching setup.',
    reviews: []
  },
  {
    id: 8,
    name: 'AC Classroom',
    icon: <FaTemperatureHigh />,
    description: 'Air-conditioned classrooms for comfortable learning environment.',
    reviews: []
  },
  {
    id: 9,
    name: 'Auditorium',
    icon: <MdMeetingRoom />,
    description: 'Large auditorium for events, seminars, and presentations.',
    reviews: []
  },
  {
    id: 10,
    name: 'Transport',
    icon: <FaBus />,
    description: 'Safe and reliable transportation facility for students and staff.',
    reviews: []
  },
  {
    id: 11,
    name: 'Canteen',
    icon: <FaUtensils />,
    description: 'Affordable and hygienic food available on campus.',
    reviews: []
  },
  {
    id: 12,
    name: 'Gym',
    icon: <FaDumbbell />,
    description: 'Fully equipped gym for students’ fitness and health.',
    reviews: []
  },
  {
    id: 13,
    name: 'Clinic',
    icon: <FaClinicMedical />,
    description: 'Campus clinic with basic medical support and nurse.',
    reviews: []
  },
  {
    id: 14,
    name: 'Hospital',
    icon: <FaHospital />,
    description: 'Nearby hospital access for advanced treatments.',
    reviews: []
  },
  {
    id: 15,
    name: 'Emergency Medical',
    icon: <MdEmergency />,
    description: '24x7 emergency medical service available on campus.',
    reviews: []
  },
  {
    id: 16,
    name: 'Cricket Ground',
    icon: <GiCricketBat />,
    description: 'Well-maintained ground for regular matches and practice.',
    reviews: []
  },
  {
    id: 17,
    name: 'Football Ground',
    icon: <GiSoccerBall />,
    description: 'Full-size football field with proper turf.',
    reviews: []
  },
  {
    id: 18,
    name: 'R&D Cell',
    icon: <FaGraduationCap />,
    description: 'Support for student research, innovation, and project funding.',
    reviews: []
  },
  {
    id: 19,
    name: 'Cafeteria',
    icon: <FaUtensils />,
    description: 'Relaxed space for meals and group discussions.',
    reviews: []
  },
  {
    id: 20,
    name: 'Boys Hostel',
    icon: <FaUsers />,
    description: 'Comfortable accommodation with mess and security.',
    reviews: []
  },
  {
    id: 21,
    name: 'ATM',
    icon: <FaMoneyBillWave />,
    description: 'On-campus ATM for quick financial access.',
    reviews: []
  },
];

const Facilities = () => {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [reviewInput, setReviewInput] = useState('');
  const [rating, setRating] = useState(0);

  const handleAddReview = () => {
    if (reviewInput.trim() && rating > 0) {
      const updatedFacilities = facilitiesData.map((facility) => {
        if (facility.id === selectedFacility.id) {
          return {
            ...facility,
            reviews: [
              ...facility.reviews,
              { text: reviewInput, rating, timestamp: new Date().toLocaleString() },
            ],
          };
        }
        return facility;
      });
      setSelectedFacility({
        ...selectedFacility,
        reviews: [
          ...selectedFacility.reviews,
          { text: reviewInput, rating, timestamp: new Date().toLocaleString() },
        ],
      });
      setReviewInput('');
      setRating(0);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white">Campus Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {facilitiesData.map((facility) => (
          <div
            key={facility.id}
            className="facility-card border border-gray-700 rounded-lg p-3 shadow-md hover:shadow-lg transition duration-200 bg-gray-800"
          >
            <div className="flex items-center space-x-2 mb-2 text-yellow-400">
              {facility.icon}
              <h3 className="font-semibold text-base sm:text-lg">{facility.name}</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-50 mb-2">{facility.description}</p>
            <div className="text-xs text-gray-50 mb-2">
              {facility.reviews.length ? (
                <ul className="list-disc pl-4">
                  {facility.reviews.map((review, index) => (
                    <li key={index} className="text-xs">{typeof review === 'object' ? review.text : review}</li>
                  ))}
                </ul>
              ) : (
                <span>No reviews yet.</span>
              )}
            </div>
            <button
              onClick={() => setSelectedFacility(facility)}
              className="text-gray-50 text-xs sm:text-sm hover:underline flex items-center"
            >
              <BiPlus className="mr-1" /> Add Review
            </button>
          </div>
        ))}
      </div>

      {/* All Reviews Section */}
      <div className="mt-6 bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md">
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">All Reviews</h3>
        {facilitiesData
          .flatMap((facility) => facility.reviews)
          .map((review, index) => (
            <div key={index} className="mb-2 p-2 border-b border-gray-200">
              <p className="text-xs sm:text-sm text-gray-50">{typeof review === 'object' ? review.text : review}</p>
              {typeof review === 'object' && (
                <p class Jena="text-xs text-gray-500">Rating: {review.rating} / 5 | Posted: {review.timestamp}</p>
              )}
            </div>
          ))}
        {facilitiesData.every((facility) => facility.reviews.length === 0) && (
          <p className="text-xs sm:text-sm text-gray-500">No reviews available yet.</p>
        )}
      </div>

      {/* Review Modal */}
      {selectedFacility && (
        <div className="modal fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-content bg-white p-4 sm:p-6 rounded-md w-[90%] max-w-md backdrop-blur-md bg-opacity-90">
            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">Review for {selectedFacility.name}</h3>
            <div className="mb-3">
              <label className="block text-xs sm:text-sm text-gray-700 mb-1">Rating:</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>
            <textarea
              value={reviewInput}
              onChange={(e) => setReviewInput(e.target.value)}
              rows={3}
              placeholder="Write your review..."
              className="w-full border border-gray-300 rounded p-2 mb-3 text-xs sm:text-sm text-gray-700"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setSelectedFacility(null)}
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400 text-gray-800 text-xs sm:text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReview}
                className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 text-xs sm:text-sm"
                disabled={!reviewInput.trim() || rating === 0}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Facilities;