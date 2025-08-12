
import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import PendingTasks from "./PendingTasks";
import QuickActions from "./QuickActions";
import StatsCards from "./StatsCards";
import ApplicationBoard from "./ApplicationBoard";
import LatestNews from "./LatestNews";
import ProfileForm from "./ProfileForm";
import Courses from "./Courses";
import Documents from "./Documents";
import AnalyticsDashboard from "./AnalyticsDashboard";
import Settings from "./Settings";
import "./MainView.css"; // Assuming you have a CSS file for styling
import Subscription from "./Subscription";

export default function MainView({ route }) {
  switch (route) {
case "profile":
  return (
    <div className="ud-page">
      <h2>My Profile</h2>
      <p>Edit your profile, upload images & videos, update contact details.</p>
      <ProfileForm />
    </div>
  );
    case "courses":
  return (
    <div className="ud-page">
      <Courses />
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
      <Documents />
    </div>
      );
    case "analytics":
      return (
        <div className="ud-page">
          <h2>Analytics Dashboard</h2>
          <p>Track profile performance, leads, and rankings.</p>
          <AnalyticsDashboard/>
          <StatsCards />
        </div>
      );
    case "subscription":
      return (
        <Subscription/>
      );
    case "settings":
      return (
        <div className="ud-page">
          <Settings />
        </div>
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
