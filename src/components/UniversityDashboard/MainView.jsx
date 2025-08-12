// src/components/UniversityDashboard/MainView.jsx
import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import PendingTasks from "./PendingTasks";
import QuickActions from "./QuickActions";
import StatsCards from "./StatsCards";
import ApplicationBoard from "./ApplicationBoard";
import LatestNews from "./LatestNews";
import "./MainView.css"; // Assuming you have a CSS file for styling
import Settings from "./Settings";
import Subscription from "./Subscription";
export default function MainView({ route }) {
  switch (route) {
    case "profile":
      return (
        <div className="ud-page">
          <h2>My Profile</h2>
          <p>Edit your profile, upload images & videos, update contact details.</p>
          <section className="ud-card">
            <h4>Profile Editor</h4>
            <p>(Replace with real form fields)</p>
          </section>
        </div>
      );
    case "courses":
      return (
        <div className="ud-page">
          <h2>Courses & Fees</h2>
          <p>Manage courses, seats, and fee structures.</p>
          <section className="ud-card">
            <h4>Course list</h4>
            <p>(Replace with real table)</p>
          </section>
        </div>
      );
    case "news":
      return (
        <div className="ud-page">
          <h2>News & Updates</h2>
          <p>Post admission dates, events, and scholarships.</p>
          <LatestNews />
        </div>
      );
    case "applications":
      return (
        <div className="ud-page">
          <h2>Applications</h2>
          <p>View and manage student applications with status filters.</p>
          <ApplicationBoard />
        </div>
      );
    case "documents":
      return (
        <div className="ud-page">
          <h2>Documents</h2>
          <p>Upload and manage accreditations (UGC, AICTE, NAAC, etc.).</p>
          <section className="ud-card">
            <button className="ud-btn">Upload Document</button>
          </section>
        </div>
      );
    case "analytics":
      return (
        <div className="ud-page">
          <h2>Analytics Dashboard</h2>
          <p>Track profile performance, leads, and rankings.</p>
          <StatsCards />
        </div>
      );
    case "subscription":
      return (
        <Subscription/>
      );
    case "settings":
      return (
       <Settings/>
      );
    case "dashboard":
    default:
      return (
        <div className="ud-page">
          <WelcomeBanner />
          <PendingTasks />
          <QuickActions />
          <StatsCards />
          <ApplicationBoard />
        </div>
      );
  }
}
