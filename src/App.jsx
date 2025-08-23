import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotificationPage from "./pages/NotificationPage";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
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
import BBACoursePage from "./pages/BBACoursePage";
import MBACoursePage from "./pages/MBACoursePage";
import BAMSCoursePage from "./pages/BAMSCourse";


function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
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
        <Route path="/Footer" element={<Footer />} />
        <Route path="/bba" element={<BBACoursePage />} />
        <Route path="/mba" element={<MBACoursePage />} />
        <Route path="/bams" element={<BAMSCoursePage />} />
        
      </Routes>
    </Router>
    
  );
}

export default App;
