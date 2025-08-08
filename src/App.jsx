import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Colleges from './pages/Colleges';
import CollegePage from './pages/CollegePage';
import StudentRegister from './pages/StudentRegister';
import UniversityRegister from './pages/UniversityRegister';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UniversityPage from './pages/UniversityPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/college/:id" element={<CollegePage />} />
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/university-register" element={<UniversityRegister />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/university-page" element={<UniversityPage />} />

          {/* Optional: 404 Page */}
          <Route path="*" element={<div className="p-6 text-center text-red-600">Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;