import React, { useState, useEffect } from 'react';
import './UniversityBannerSlider.css';
import '../../components/UniversityDashboard/variables.css'; 

const UniversityBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const universities = [
    {
      name: 'University of Maryland',
      logo: 'https://marketplace.canva.com/EAGSIcoid00/1/0/1600w/canva-blue-white-modern-school-logo-ZBxBTP6Lc-E.jpg',
      background: 'https://sustainability.umd.edu/sites/default/files/styles/optimized/public/2024-08/HornbakePlaza_10242017_9203-7%20%281%29.jpg?itok=k2UhA8Xt',
    },
    {
      name: 'Stanford University',
      logo: 'https://www.logo.wine/a/logo/Stanford_University/Stanford_University-Logo.wine.svg',
      background: 'https://www.stanford.edu/wp-content/uploads/2023/06/hero-image.jpg',
    },
    {
      name: 'Harvard University',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_University_shield.svg/1200px-Harvard_University_shield.svg.png',
      background: 'https://www.harvard.edu/wp-content/uploads/2021/07/harvard-yard.jpg',
    },
    {
      name: 'MIT',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1200px-MIT_Seal.svg.png',
      background: 'https://web.mit.edu/files/images/slideshows/campus.jpg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % universities.length);
    }, 3000); // Slide changes every 3 seconds
    return () => clearInterval(interval);
  }, [universities.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="university-banner-slider">
      <div
        className="banner-slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {universities.map((uni, index) => (
          <div
            key={index}
            className="university-banner"
            style={{ backgroundImage: `url(${uni.background})` }}
            role="img"
            aria-label={`Banner for ${uni.name}`}
          >
            <div className="banner-content">
              <div className="lower-blur">
                <img src={uni.logo} alt={`${uni.name} Logo`} className="university-logo" />
                <div className="text-center">
                  <h1>{uni.name}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="banner-dots">
        {universities.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`banner-dot ${currentSlide === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default UniversityBannerSlider;