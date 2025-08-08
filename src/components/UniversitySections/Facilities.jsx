import React, { useState } from 'react';
import { FaBook, FaMicroscope, FaLaptop, FaChalkboardTeacher, FaBus, FaUtensils, FaDumbbell, FaClinicMedical, FaHospital, FaFutbol, FaFlask, FaBolt, FaUsers, FaTemperatureHigh, FaBuilding, FaGraduationCap, FaMoneyBillWave, FaComments, FaStar } from 'react-icons/fa';
import { MdLibraryBooks, MdMeetingRoom, MdComputer, MdEmergency } from 'react-icons/md';
import { GiCricketBat, GiSoccerBall, GiTeacher } from 'react-icons/gi';
import { BiPlus } from 'react-icons/bi';
import './Facilities.css';

const facilitiesData = [
  { id: 1, name: 'Library', icon: <FaBook />, description: 'Well-stocked central library with academic and reference materials.', reviews: ['Quiet place to study.', 'Huge collection of books.'] },
  { id: 2, name: 'Digital Library', icon: <MdLibraryBooks />, description: 'Access to e-books, journals, and research databases.', reviews: ['Easy to use and modern.', 'Great for last-minute references.'] },
  { id: 3, name: 'Computer Lab', icon: <MdComputer />, description: 'High-speed systems with all major software installed.', reviews: ['Well maintained PCs.', 'Good internet speed.'] },
  { id: 4, name: 'Mechanical Lab', icon: <FaFlask />, description: 'Equipped with tools and machines for practical mechanical learning.', reviews: [] },
  { id: 5, name: 'Civil Lab', icon: <FaBuilding />, description: 'Advanced tools and models for structural and civil engineering studies.', reviews: [] },
  { id: 6, name: 'Electrical Lab', icon: <FaBolt />, description: 'Practical exposure to circuits, power systems, and measurements.', reviews: [] },
  { id: 7, name: 'Digital Classroom', icon: <FaChalkboardTeacher />, description: 'Smart boards, digital content, and interactive teaching setup.', reviews: [] },
  { id: 8, name: 'AC Classroom', icon: <FaTemperatureHigh />, description: 'Air-conditioned classrooms for comfortable learning environment.', reviews: [] },
  { id: 9, name: 'Auditorium', icon: <MdMeetingRoom />, description: 'Large auditorium for events, seminars, and presentations.', reviews: [] },
  { id: 10, name: 'Transport', icon: <FaBus />, description: 'Safe and reliable transportation facility for students and staff.', reviews: [] },
  { id: 11, name: 'Canteen', icon: <FaUtensils />, description: 'Affordable and hygienic food available on campus.', reviews: [] },
  { id: 12, name: 'Gym', icon: <FaDumbbell />, description: 'Fully equipped gym for students’ fitness and health.', reviews: [] },
  { id: 13, name: 'Clinic', icon: <FaClinicMedical />, description: 'Campus clinic with basic medical support and nurse.', reviews: [] },
  { id: 14, name: 'Hospital', icon: <FaHospital />, description: 'Nearby hospital access for advanced treatments.', reviews: [] },
  { id: 15, name: 'Emergency Medical', icon: <MdEmergency />, description: '24x7 emergency medical service available on campus.', reviews: [] },
  { id: 16, name: 'Cricket Ground', icon: <GiCricketBat />, description: 'Well-maintained ground for regular matches and practice.', reviews: [] },
  { id: 17, name: 'Football Ground', icon: <GiSoccerBall />, description: 'Full-size football field with proper turf.', reviews: [] },
  { id: 18, name: 'R&D Cell', icon: <FaGraduationCap />, description: 'Support for student research, innovation, and project funding.', reviews: [] },
  { id: 19, name: 'Cafeteria', icon: <FaUtensils />, description: 'Relaxed space for meals and group discussions.', reviews: [] },
  { id: 20, name: 'Boys Hostel', icon: <FaUsers />, description: 'Comfortable accommodation with mess and security.', reviews: [] },
  { id: 21, name: 'ATM', icon: <FaMoneyBillWave />, description: 'On-campus ATM for quick financial access.', reviews: [] },
];

const Facilities = ({ darkMode }) => {
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
    <div className={`facilities-container ${darkMode ? 'dark' : ''}`}>
      <h2 className="facilities-title">Campus Facilities</h2>
      <div className="facilities-grid">
        {facilitiesData.map((facility) => (
          <div key={facility.id} className="facility-card">
            <div className="facility-header">
              <span className="facility-icon">{facility.icon}</span>
              <h3 className="facility-title">{facility.name}</h3>
            </div>
            <p className="facility-description">{facility.description}</p>
            <div className="reviews">
              {facility.reviews.length > 0 ? (
                <ul>
                  {facility.reviews.map((review, index) => (
                    <li key={index}>{typeof review === 'object' ? review.text : review}</li>
                  ))}
                </ul>
              ) : (
                <span>No reviews yet.</span>
              )}
            </div>
            <button
              onClick={() => setSelectedFacility(facility)}
              className="review-button"
            >
              <BiPlus className="mr-1" /> Review
            </button>
          </div>
        ))}
      </div>

      {/* All Reviews Section */}
      <div className="reviews-section">
        <h3 className="reviews-title">All Reviews</h3>
        {facilitiesData
          .flatMap((facility) => facility.reviews)
          .map((review, index) => (
            <div key={index} className="review-item">
              <p className="review-text">{typeof review === 'object' ? review.text : review}</p>
              {typeof review === 'object' && (
                <p className="review-meta">Rating: {review.rating} / 5 | Posted: {review.timestamp}</p>
              )}
            </div>
          ))}
        {facilitiesData.every((facility) => facility.reviews.length === 0) && (
          <p className="no-reviews">No reviews available yet.</p>
        )}
      </div>

      {/* Review Popup */}
      {selectedFacility && (
        <div className="modal-overlay" onClick={() => setSelectedFacility(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">Review for {selectedFacility.name}</h3>
            <div className="mb-3">
              <label className="modal-label">Rating:</label>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`star ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
              className="textarea"
            />
            <div className="modal-buttons">
              <button
                onClick={() => setSelectedFacility(null)}
                className="cancel-button"
              >
                Cancel
              </button>
              <button
                onClick={handleAddReview}
                className="submit-button"
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