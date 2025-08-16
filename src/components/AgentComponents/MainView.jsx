import React from "react";
import StatsCards from "./StatsCards";
import RecentApplications from "./RecentApplications";
import RecentReceipts from "./RecentReceipts";
import "./MainView.css";

export default function MainView({ route }) {
  switch (route) {
    case "dashboard":
    default:
      return (
        <div className="ad-page">
          <StatsCards />
          <div className="ad-actions">
            <button className="ad-btn">+ Add New Student</button>
            <button className="ad-btn">+ New Application</button>
          </div>
          <div className="ad-tables">
            <RecentApplications />
            <RecentReceipts />
          </div>
        </div>
      );
  }
}
