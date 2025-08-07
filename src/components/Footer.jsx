import React from 'react';
import logo from '../assets/logo2.png';


const Footer = () => {
  return (
    <footer className="bg-[#101828] py-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="p-6 text-left">
            <img src={logo} alt="College360 Logo" className="h-20 w-full mb-4" />
            <p className="text-sm mb-2">An ISO Certified 9001:2015 company</p>
            <p className="text-sm">College360 is a platform where you can search nearby colleges through name, place and many more.</p>
            <p className="text-sm mt-2">Address: Bhopal, Madhya Pradesh [462011]</p>
            <p className="text-sm">Phone: +91-96303 44455</p>
          </div>
          <div className="p-6">
            <h3 className="text-[#fdc700] text-lg font-bold mb-4">Top Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>M.Tech</li>
              <li>B.Tech</li>
              <li>B.Tech - CSE</li>
              <li>B.Tech - ME</li>
              <li>B.Tech - ECE</li>
              <li>B.Tech - Civil</li>
              <li>MBA</li>
              <li>B.Tech - EEE</li>
              <li>BBA</li>
              <li>BAMS</li>
            </ul>
          </div>
          <div className="p-6">
            <h3 className="text-[#fdc700] text-lg font-bold mb-4">Top Universities</h3>
            <ul className="space-y-2 text-sm">
              <li>Engineering and Technology</li>
              <li>Management and Business Administration</li>
              <li>Law</li>
              <li>IT and Computer Applications</li>
              <li>Pharmacy</li>
              <li>Arts</li>
              <li>Medical and Health Sciences</li>
              <li>Ayush UG</li>
              <li>Paramedical Course</li>
            </ul>
          </div>
          <div className="p-6">
            <h3 className="text-[#fdc700] text-lg font-bold mb-4">Top Exams</h3>
            <ul className="space-y-2 text-sm">
              <li>CAT</li>
              <li>GATE</li>
              <li>JEE-Main</li>
              <li>NEET</li>
              <li>XAT</li>
              <li>CLAT</li>
              <li>MAT</li>
              <li>TET</li>
            </ul>
          </div>
          <div className="p-6">
            <h3 className="text-[#fdc700] text-lg font-bold mb-4">Other Links</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Contact Us</li>
              <li>Advertising</li>
              <li>Career</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white hover:text-[#fdc700]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-[#fdc700]">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-[#fdc700]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-[#fdc700]">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-sm">Copyright © 2025 Webdoit Global Creations Pvt. Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;