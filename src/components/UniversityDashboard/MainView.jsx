import React from "react";
import ProfileForm from "./ProfileForm";
import Courses from "./Courses";
import LatestNews from "./LatestNews";
import ApplicationBoard from "./ApplicationBoard";
import Documents from "./Documents";
import AnalyticsDashboard from "./AnalyticsDashboard";
import Subscription from "./Subscription";
import Settings from "./Settings";
import "./MainView.css";

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
      return <Courses />;

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
          <AnalyticsDashboard />
        </div>
      );

    case "subscription":
      return <Subscription />;

    case "settings":
      return (
        <div className="ud-page">
          <Settings />
        </div>
      );

    case "dashboard":
    default:
      return (
        <div className="ud-page agent-dashboard">
          {/* Stat cards */}
          <div className="stats-grid">
            <div className="stat-card">Applications This Month</div>
            <div className="stat-card">Confirmed Admissions</div>
            <div className="stat-card">Commission Earned</div>
            <div className="stat-card">Pending Actions</div>
          </div>

          {/* Action buttons */}
          <div className="actions-row">
            <div className="button-group">
              <button className="primary-btn">+ Add New Student</button>
              <button className="primary-btn">+ New Application</button>
            </div>
            <div className="link-group">
              <button className="link-btn">Withdraw Commission</button>
              <button className="link-btn">Download Statement</button>
            </div>
          </div>

          {/* Tables */}
          <div className="tables-grid">
            <div className="table-card">
              <h3>Recent Applications</h3>
              <table>
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Institute</th>
                    <th>Course</th>
                    <th>Stage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-card">
              <h3>Recent Receipts</h3>
              <table>
                <thead>
                  <tr>
                    <th>Receipt ID</th>
                    <th>Student</th>
                    <th>Institute</th>
                    <th>Amount</th>
                    <th>Down</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
  }
}
