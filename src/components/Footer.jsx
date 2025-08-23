import React, { useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const FooterSection = ({ title, children, id }) => (
    <div>
      {/* Mobile Accordion Header */}
      <div
        className="flex justify-between items-center md:block cursor-pointer md:cursor-default"
        onClick={() => toggleSection(id)}
      >
        <h3 className="text-purple-300 text-lg font-semibold mb-2 md:mb-5">
          {title}
        </h3>
        <span className="text-gray-400 md:hidden">
          {openSection === id ? "−" : "+"}
        </span>
      </div>

      {/* Mobile Collapsible Body */}
      <div
        className={`overflow-hidden transition-all duration-300 md:block ${
          openSection === id || window.innerWidth >= 768
            ? "max-h-screen"
            : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <footer className="bg-[#101828] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/pngegg (1).png"
                alt="Vision Logo"
                className="h-14 w-auto"
              />
              <span className="text-2xl font-bold text-purple-300 tracking-wide">
                Vision
              </span>
            </div>
            <p className="text-sm text-gray-300">
              An ISO Certified 9001:2015 company
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              College360 is a platform where you can search nearby colleges
              through name, place, and more.
            </p>
            <p className="text-sm text-gray-400">Address: Bhopal, MP [462011]</p>
            <p className="text-sm text-gray-400">Phone: +91-96303 44455</p>
          </div>

          {/* Footer Sections */}
          <FooterSection title="Top Courses" id="courses">
  <ul className="space-y-2 text-sm text-gray-300 ml-4">
    <li><a href="/mtech" className="hover:text-white hover:underline">M.Tech</a></li>
    <li><a href="/btech" className="hover:text-white hover:underline">B.Tech</a></li>
    <li><a href="/btech/cse" className="hover:text-white hover:underline">B.Tech - CSE</a></li>
    <li><a href="/btech/me" className="hover:text-white hover:underline">B.Tech - ME</a></li>
    <li><a href="/btech/ece" className="hover:text-white hover:underline">B.Tech - ECE</a></li>
    <li><a href="/btech/civil" className="hover:text-white hover:underline">B.Tech - Civil</a></li>
    <li><a href="/mba" className="hover:text-white hover:underline">MBA</a></li>
    <li><a href="/btech/eee" className="hover:text-white hover:underline">B.Tech - EEE</a></li>
    <li><a href="/bba" className="hover:text-white hover:underline">BBA</a></li>
    <li><a href="/bams" className="hover:text-white hover:underline">BAMS</a></li>
  </ul>
</FooterSection>


          <FooterSection title="Top Universities" id="universities">
            <ul className="space-y-2 text-sm text-gray-300 ml-1">
              <li>Engineering & Technology</li>
              <li>Management & Business</li>
              <li>Law</li>
              <li>IT & Computer Applications</li>
              <li>Pharmacy</li>
              <li>Arts</li>
              <li>Medical & Health Sciences</li>
              <li>Ayush UG</li>
              <li>Paramedical Courses</li>
            </ul>
          </FooterSection>

          <FooterSection title="Top Exams" id="exams">
            <ul className="space-y-2 text-sm text-gray-300 ml-1">
              <li>CAT</li>
              <li>GATE</li>
              <li>JEE-Main</li>
              <li>NEET</li>
              <li>XAT</li>
              <li>CLAT</li>
              <li>MAT</li>
              <li>TET</li>
            </ul>
          </FooterSection>

          <FooterSection title="Other Links" id="links">
            <ul className="space-y-2 text-sm text-gray-300 ml-1">
              <li>
                <Link to="/about" className="hover:text-purple-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/advertising"
                  className="hover:text-purple-400 transition"
                >
                  Advertising
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-purple-400 transition">
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-purple-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-purple-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </FooterSection>
        </div>

        {/* Social & Copyright */}
        <div className="mt-14 border-t border-purple-800 pt-8 text-center">
          <div className="flex justify-center space-x-6 mb-5">
            <a href="#" className="hover:text-purple-400 text-lg">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-purple-400 text-lg">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-purple-400 text-lg">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-purple-400 text-lg">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-xs text-gray-400">
            © 2025 Webdoit Global Creations Pvt. Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;