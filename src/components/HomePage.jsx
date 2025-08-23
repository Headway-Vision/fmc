import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import CourseSection from '../components/Home/CourseSection';
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [newsTab, setNewsTab] = useState("news");
  const [search, setSearch] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  const scrollVariants = {
    animate: {
      y: ["0%", "-100%"],
      transition: {
        y: { duration: 30, ease: "linear", repeat: Infinity },
      },
    },
    pause: { y: null, transition: { duration: 0 } },
  };

  useEffect(() => {
    if (scrollRef.current && containerRef.current) {
      const scrollElement = scrollRef.current;
      const containerHeight = containerRef.current.clientHeight;
      if (scrollElement.scrollHeight < containerHeight * 2) {
        scrollElement.innerHTML += scrollElement.innerHTML;
      }
    }
  }, [newsTab]);

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
{/*
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
  };
  */}

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

  const newsData = [
    { text: "University awarded top ranking for engineering program.", link: "#" },
    { text: "New research reveals breakthrough in renewable energy.", link: "#" },
    { text: "Student startup secures major funding round.", link: "#" },
    { text: "Faculty member receives prestigious national award.", link: "#" },
    { text: "Annual alumni gala raises record funds for scholarships.", link: "#" },
    { text: "New campus-wide shuttle service to launch next month.", link: "#" },
    { text: "Upcoming guest lecture by a Nobel laureate on climate change.", link: "#" },
    { text: "Renovations to campus gym to be completed by fall semester.", link: "#" },
    { text: "University hosts international conference on artificial intelligence.", link: "#" },
  ];

  const alertsData = [
    { text: "Campus library will be closed on Sept 5 for maintenance.", link: "#" },
    { text: "New COVID-19 guidelines effective from Oct 1.", link: "#" },
    { text: "Virtual career fair scheduled for Nov 20.", link: "#" },
    { text: "Severe weather alert: Campus closure expected tomorrow.", link: "#" },
    { text: "Important security update for all student portals.", link: "#" },
    { text: "Parking lot C will be closed for a special event this weekend.", link: "#" },
  ];

  const blogsData = [
    { text: "Navigating your first semester with confidence.", link: "#" },
    { text: "The future of higher education in a digital world.", link: "#" },
    { text: "How to ace your final exams: Tips and tricks.", link: "#" },
    { text: "Five ways to get involved in campus life.", link: "#" },
    { text: "From classroom to career: A student's journey.", link: "#" },
    { text: "The importance of mental health for students.", link: "#" },
  ];

  const data = { news: newsData, alerts: alertsData, blogs: blogsData };

  return (
    <>
     {/* Hero Section */}
    <HeroSection />

      {/* Search bar */}
      <div className="flex flex-col items-center justify-center mx-36 mt-4 mb-4 text-center">
  <h2 className="text-2xl font-semibold mb-6">
    Search Colleges & Universities
  </h2>
  <Input
    type="text"
    placeholder="Search by college name..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="mb-8 w-full md:w-1/2"
  />
</div>

     {/*Top places for study */}
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

      {/*}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-12 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 drop-shadow-sm">
          Top Universities by Course
        </h2>
        <CourseSection courseName="MBA" universities={courseData.MBA} />
        <CourseSection courseName="B.Tech" universities={courseData.BTech} />
        <CourseSection courseName="MBBS" universities={courseData.MBBS} />
        <CourseSection courseName="BSc" universities={courseData.BSc} />
      </div>

            {/* Explore Our Services Cards */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-purple-700 text-center mb-12 leading-tight tracking-wide">
      <span className="block">Bring Your</span>
      <span className="block text-purple-500">Vision into Focus</span>
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Image covers top half */}
        <div className="h-40 w-full overflow-hidden">
          <img
            src="/pngegg (2).png"
            alt="Study Icon"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Content covers bottom half */}
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">
            Courses & University Search
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Quickly find courses and universities that fit your interests and goals.
          </p>
        </div>
         </div>
                {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <img
          src="/pngegg (3).png"
          alt="Scholarships"
          className="h-40 w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">
            Scholarship Matcher
          </h3>
          <p className="text-gray-600 text-sm">
            Discover scholarships tailored to your profile and maximize opportunities.
          </p>
        </div>
      </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <img
          src="/pngegg (4).png"
          alt="Scholarships"
          className="h-40 w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">
          Career Pathways
          </h3>
          <p className="text-gray-600 text-sm">
          Prepare effectively for exams and plan your career path with expert resources.
          </p>
        </div>
      </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <img
          src="/pngegg (5).png"
          alt="Scholarships"
          className="h-40 w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">
          Study Abroad / Foreign Student Support
          </h3>
          <p className="text-gray-600 text-sm">
          Get guidance and assistance for studying abroad and international student life.
          </p>
        </div>
      </div>
             {/* Card 5 - Exam Preparation */}
             <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <img
          src="/pngegg (6).png"
          alt="Scholarships"
          className="h-40 w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">
          Exam Preparation
          </h3>
          <p className="text-gray-600 text-sm">
          Access study materials, mock tests, and tips to prepare confidently for your exams.
          </p>
        </div>
      </div>

{/* Card 6 - Rank Prediction */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <img
          src="/pngegg (7).png"
          alt="Scholarships"
          className="h-40 w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">
          Rank Prediction
          </h3>
          <p className="text-gray-600 text-sm">
          Estimate your rank based on performance analytics and previous trends.
          </p>
        </div>
      </div>

{/* Card 7 - News */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <img
          src="/pngegg (8).png"
          alt="Scholarships"
          className="h-40 w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">
         News
          </h3>
          <p className="text-gray-600 text-sm">
         Latest news of exams, universities, and results.
          </p>
        </div>
      </div>

{/* Card 8 - Blogs */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
        <img
          src="/pngegg (7).png"
          alt="Scholarships"
          className="h-40 w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-purple-700">
          Blogs
          </h3>
          <p className="text-gray-600 text-sm">
          Read insightful articles, tips, and guides written by experts and students.
          </p>
        </div>
      </div>

</div>
 </div>
 </section>

      {/* News, Alerts & Deadlines */}
      <section className="bg-[#483248] text-gray-200 py-16 px-4 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Deadlines & Alerts */}
          <div className="bg-[#483248] rounded-3xl border border-[#2b2b2b] shadow-2xl p-8 flex-1 space-y-8">
            {/* Deadlines */}
            <div>
              <h4 className="text-xl font-bold flex items-center gap-2 text-[#e5e7eb] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                Important Deadlines
              </h4>
              <ul className="text-gray-400 space-y-3">
                {[
                  { text: "Scholarship Application Deadline: Aug 31, 2025" },
                  { text: "Course Registration Closes: Sept 15, 2025" },
                  { text: "Final Exams Start: Dec 10, 2025" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-semibold text-white">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Alerts */}
            <div>
              <h4 className="text-xl font-bold flex items-center gap-2 text-[#e5e7eb] mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
                Latest Alerts
              </h4>
              <ul className="space-y-3 text-gray-400">
                {alertsData.slice(0, 3).map((alert, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {alert.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* News / Alerts / Blogs Tabs */}
          <div className="w-full max-w-md flex flex-col flex-1">
            <div className="flex bg-[#a476a4] rounded-t-xl overflow-hidden shadow-md">
              {["news", "alerts", "blogs"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setNewsTab(tab)}
                  className={`flex-1 px-4 py-3 font-semibold text-sm transition-all ${
                    newsTab === tab
                      ? "bg-[#a476a4] text-white border-b-2 border-purple-500"
                      : "bg-[#a476a4] text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>

            <div
              ref={containerRef}
              className="bg-[#483248] border-t-2 border-purple-600 p-4 h-64 overflow-hidden relative rounded-b-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={newsTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 p-4"
                >
                  <motion.div
                    ref={scrollRef}
                    variants={scrollVariants}
                    animate={isHovered ? "pause" : "animate"}
                  >
                    {data[newsTab].map((item, idx) => (
                      <div key={idx} className="py-2 border-b border-dotted border-gray-600 last:border-0">
                        <a href={item.link} className="text-gray-300 hover:text-purple-500 transition-colors block leading-tight">
                          {item.text}
                        </a>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* View All Button with inline Chevron */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#a476a4] text-white px-6 py-3 mt-6 rounded-full font-semibold shadow-md hover:bg-purple-600 transition-colors self-start flex items-center gap-2"
            >
              <span>View All</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>
 
     
{/* Testimonials & Success Stories */}
<section className="bg-gradient-to-b from-purple-50 to-white py-16 relative">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
      Testimonials & Success Stories
    </h2>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      spaceBetween={40}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="rounded-xl pb-12"
    >
      {[
        {
          name: "John Doe",
          img: "/images.jpeg",
          text: "This university changed my life! The professors were supportive and the programs prepared me for my career.",
        },
        {
          name: "Jane Smith",
          img: "/image 2.jpg",
          text: "The scholarship I received made my dreams come true. I’m now working at a Fortune 500 company!",
        },
        {
          name: "John Doe",
          img: "/images.jpeg",
          text: "This university changed my life! The professors were supportive and the programs prepared me for my career.",
        },
        {
          name: "Jane Smith",
          img: "/image 2.jpg",
          text: "The scholarship I received made my dreams come true. I’m now working at a Fortune 500 company!",
        },
      ].map((testimonial, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-purple-100">
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-purple-300 shadow-md"
            />
            <p className="text-gray-700 text-center mb-4 italic leading-relaxed">
              "{testimonial.text}"
            </p>
            <p className="text-purple-600 font-semibold text-center">
              – {testimonial.name}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Navigation Buttons with margin */}
    <div className="swiper-button-prev !text-purple-700 !bg-white shadow-md !rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-300 absolute top-1/2 -left-6 z-10"></div>
    <div className="swiper-button-next !text-purple-700 !bg-white shadow-md !rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-all duration-300 absolute top-1/2 -right-6 z-10"></div>
  </div>
</section>

      {/* Footer */}
      <Footer />

      {/* Custom CSS for scroll animation */}
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .animate-scroll-up {
          animation: scroll-up 10s linear infinite;
        }
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
  }