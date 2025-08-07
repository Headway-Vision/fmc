import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faBriefcase,
  faGraduationCap,
  faHome,
  faStar,
  faUniversity,
  faBook,
  faFutbol,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import './Info.css';

const Info = () => {
  return (
    <div className="info-container">
      <h2 className="info-title">Delhi Technological University (DTU) Details</h2>

      <div className="info-grid">
        {/* Detail cards */}
        {[
          {
            icon: faMapMarkerAlt,
            title: 'Location',
            value: 'Delhi, India',
          },
          {
            icon: faBriefcase,
            title: 'Highest Package',
            value: '₹85.3 LPA',
            highlight: true,
          },
          {
            icon: faBriefcase,
            title: 'Average Package',
            value: '₹15.45 LPA',
          },
          {
            icon: faUsers,
            title: 'Students Placed',
            value: '1934+',
          },
          {
            icon: faHome,
            title: 'Hostel Fees',
            value: '₹72,000/year',
          },
          {
            icon: faUniversity,
            title: 'NIRF 2024 Rank',
            value: '29',
            highlight: true,
          },
          {
            icon: faBriefcase,
            title: 'Top Recruiters',
            value: 'Amazon, Google, Microsoft, TCS',
          },
          {
            icon: faGraduationCap,
            title: 'Popular Courses',
            value: 'B.Tech (CSE, ECE), M.Tech, MBA',
          },
          {
            icon: faUniversity,
            title: 'Campus Size',
            value: '164 Acres',
          },
          {
            icon: faBook,
            title: 'Library',
            value: '2,00,000+ Books, E-Resources',
          },
          {
            icon: faFutbol,
            title: 'Sports Facilities',
            value: 'Cricket Ground, Gym, Indoor Courts',
          },
          {
            icon: faStar,
            title: 'Student Rating',
            value: '⭐ 4.2/5 (843 Reviews)',
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`info-card ${item.highlight ? 'highlight' : ''}`}
          >
            <FontAwesomeIcon icon={item.icon} className="info-icon" />
            <div>
              <h3 className="info-card-title">{item.title}</h3>
              <p className={`info-card-value ${item.highlight ? 'highlight-text' : ''}`}>
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Buttons */}
      <div className="info-cta">
        <a
          href="https://dtu.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button primary"
        >
          Visit Website
        </a>
        <a
          href="mailto:admissions@dtu.ac.in"
          className="cta-button accent"
        >
          Contact Admission
        </a>
      </div>
    </div>
  );
};

export default Info;