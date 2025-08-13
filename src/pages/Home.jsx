import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Home/Navbar';
import UniversityBannerSlider from '../components/Home/UniversityBannerSlider';
import SearchBarWithFilters from '../components/Home/SearchBarWithFilters';
import CourseSection from '../components/Home/CourseSection';
import Footer from '../components/Footer';

const Home = () => {
  const handleSearch = (searchData) => {
    console.log('Search Data:', searchData);
  };

  const topPlaces = [
    {
      name: 'IIT Delhi',
      location: 'Delhi',
      image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/iit-delhi'
    },
    {
      name: 'IIM Bangalore',
      location: 'Bangalore',
      image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/iim-bangalore'
    },
    {
      name: 'JNU',
      location: 'Delhi',
      image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/jnu'
    },
    {
      name: 'IISc Bangalore',
      location: 'Bangalore',
      image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/iisc-bangalore'
    },
    {
      name: 'BITS Pilani',
      location: 'Pilani',
      image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/bits-pilani'
    },
    {
      name: 'NIT Trichy',
      location: 'Tiruchirappalli',
      image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7',
      link: '/colleges/nit-trichy'
    }
  ];

  const courseData = {
    MBA: [
      { name: 'IIM Ahmedabad', location: 'Ahmedabad', image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180', link: '/colleges/iim-ahmedabad' },
      { name: 'IIM Bangalore', location: 'Bangalore', image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180', link: '/colleges/iim-bangalore' },
      { name: 'IIM Calcutta', location: 'Kolkata', image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180', link: '/colleges/iim-calcutta' },
      { name: 'IIM Lucknow', location: 'Lucknow', image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180', link: '/colleges/iim-lucknow' },
      { name: 'XLRI Jamshedpur', location: 'Jamshedpur', image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200', link: '/colleges/xlri-jamshedpur' },
      { name: 'FMS Delhi', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180', link: '/colleges/fms-delhi' },
      { name: 'SPJIMR Mumbai', location: 'Mumbai', image: 'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180', link: '/colleges/spjimr-mumbai' },
      { name: 'MDI Gurgaon', location: 'Gurgaon', image: 'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180', link: '/colleges/mdi-gurgaon' },
    ],
    BTech: [
      { name: 'IIT Bombay', location: 'Mumbai', image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180', link: '/colleges/iit-bombay' },
      { name: 'IIT Delhi', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180', link: '/colleges/iit-delhi' },
      { name: 'IIT Madras', location: 'Chennai', image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180', link: '/colleges/iit-madras' },
      { name: 'IIT Kanpur', location: 'Kanpur', image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180', link: '/colleges/iit-kanpur' },
      { name: 'IIT Kharagpur', location: 'Kharagpur', image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200', link: '/colleges/iit-kharagpur' },
      { name: 'BITS Pilani', location: 'Pilani', image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180', link: '/colleges/bits-pilani' },
      { name: 'NIT Trichy', location: 'Tiruchirappalli', image: 'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180', link: '/colleges/nit-trichy' },
      { name: 'IIIT Hyderabad', location: 'Hyderabad', image: 'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180', link: '/colleges/iiit-hyderabad' },
    ],
    MBBS: [
      { name: 'AIIMS Delhi', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180', link: '/colleges/aiims-delhi' },
      { name: 'CMC Vellore', location: 'Vellore', image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180', link: '/colleges/cmc-vellore' },
      { name: 'JIPMER Puducherry', location: 'Puducherry', image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180', link: '/colleges/jipmer-puducherry' },
      { name: 'AFMC Pune', location: 'Pune', image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180', link: '/colleges/afmc-pune' },
      { name: 'Maulana Azad Medical College', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200', link: '/colleges/mamc-delhi' },
      { name: 'Kasturba Medical College', location: 'Manipal', image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180', link: '/colleges/kmc-manipal' },
      { name: 'King George’s Medical University', location: 'Lucknow', image: 'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180', link: '/colleges/kgmu-lucknow' },
      { name: 'Grant Medical College', location: 'Mumbai', image: 'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180', link: '/colleges/gmc-mumbai' },
    ],
    BSc: [
      { name: 'St. Stephen’s College', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.-XdCQ812TNwBrQ01MwhFOAHaE7?w=229&h=180', link: '/colleges/st-stephens-delhi' },
      { name: 'Hindu College', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.WyKxGs6k3b7USZMUdQT63wHaEK?w=232&h=180', link: '/colleges/hindu-college' },
      { name: 'Miranda House', location: 'Delhi', image: 'https://th.bing.com/th/id/OIP.UGeOBQ4Tu63GqhEopROwyQHaFS?w=174&h=180', link: '/colleges/miranda-house' },
      { name: 'Loyola College', location: 'Chennai', image: 'https://th.bing.com/th/id/OIP.l1zc_zdqjLU-OSzAVxgyhgHaE5?w=192&h=180', link: '/colleges/loyola-chennai' },
      { name: 'Christ University', location: 'Bangalore', image: 'https://th.bing.com/th/id/OIP.v6Qz5Xu_R5PWTDb1cgGuywHaFj?w=268&h=200', link: '/colleges/christ-university' },
      { name: 'Presidency College', location: 'Chennai', image: 'https://th.bing.com/th/id/OIP.3icm7xxxn40VdfPK9d036wHaEu?w=334&h=180', link: '/colleges/presidency-chennai' },
      { name: 'Madras Christian College', location: 'Chennai', image: 'https://th.bing.com/th/id/OIP.wUj-xWSn0XaygcntiAvuoAHaEK?w=307&h=180', link: '/colleges/mcc-chennai' },
      { name: 'Fergusson College', location: 'Pune', image: 'https://th.bing.com/th/id/OIP.eZMwNPQYF5NnZxcrwAA1dwHaEK?w=274&h=180', link: '/colleges/fergusson-pune' },
    ],
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < topPlaces.length; i++) {
      cards.push(topPlaces[(currentIndex + i) % topPlaces.length]);
    }
    return cards;
  };

  return (
    <>
      <Navbar />
      <div className="w-full">
        <UniversityBannerSlider />
      </div>
      <SearchBarWithFilters onSearch={handleSearch} />
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-12 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 drop-shadow-sm">
          Top Places for Study
        </h2>
        <div className="w-full max-w-6xl overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${(currentIndex % topPlaces.length) * (100 / 3)}%`,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            {getVisibleCards().map((place, index) => (
              <motion.div
                key={`${place.name}-${index}`}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={place.link}
                  className="bg-white border border-blue-200 shadow-sm rounded-xl overflow-hidden hover:shadow-md transition group block"
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-700 mb-1">{place.name}</h3>
                    <p className="text-sm text-gray-600">{place.location}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-12 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 drop-shadow-sm">
          Top Universities by Course
        </h2>
        <CourseSection courseName="MBA" universities={courseData.MBA} />
        <CourseSection courseName="B.Tech" universities={courseData.BTech} />
        <CourseSection courseName="MBBS" universities={courseData.MBBS} />
        <CourseSection courseName="BSc" universities={courseData.BSc} />
      </div>
      <Footer />
    </>
  );
};

export default Home;