import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

// Pages
import AboutPage from "./pages/AboutPage";
import CounsellingPage from "./pages/Counselling";
import StudentSignup from "./pages/StudentSignup";
import StudentLogin from "./pages/StudentLogin";
import MyProfile from "./pages/MyProfile";
import MyCourse from "../public/MyCourse";
import ScholarshipsLoans from "./pages/Scholarship";
import StudyMaterialTools from "./pages/StudyMt";
import ExamAlertsNotifications from "./pages/ExamAt";
import SettingsPage from "./pages/Setting";
import NotificationPage from "./pages/NotificationPage";
import BBACoursePage from "./pages/BBACoursePage";
import MBACoursePage from "./pages/MBACoursePage";
import BAMSCoursePage from "./pages/BAMSCourse";

// University & Dashboard
import UniversityRegister from "./pages/UniversityRegister";
import UniversityPage from "./pages/UniversityPage";
import UniversityDashboard from "./dashboard/UniversityDashboard";
import AgentDashboard from "./AgentDashboard/Agent";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* General Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/counselling" element={<CounsellingPage />} />
            <Route path="/signup" element={<StudentSignup />} />
            <Route path="/login" element={<StudentLogin />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/course" element={<MyCourse />} />
            <Route path="/scholarship" element={<ScholarshipsLoans />} />
            <Route path="/study-material" element={<StudyMaterialTools />} />
            <Route path="/exam" element={<ExamAlertsNotifications />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/notification" element={<NotificationPage />} />
            <Route path="/bba" element={<BBACoursePage />} />
            <Route path="/mba" element={<MBACoursePage />} />
            <Route path="/bams" element={<BAMSCoursePage />} />

            {/* University & Dashboard Routes */}
            <Route path="/university-register" element={<UniversityRegister />} />
            <Route path="/university-page" element={<UniversityPage />} />
            <Route path="/university-dashboard" element={<UniversityDashboard />} />
            <Route path="/agent-dashboard" element={<AgentDashboard />} />

            {/* Footer as a page (optional) */}
            <Route path="/footer" element={<Footer />} />

            {/* 404 Fallback */}
            <Route
              path="*"
              element={<div className="p-6 text-center text-red-600">Page Not Found</div>}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
