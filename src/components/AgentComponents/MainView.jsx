import React from "react";
import "./MainView.css";
import DashboardAgent from "./DashboardAgent"; // Import DashboardAgent component

export default function MainView({ route }) {
  switch (route) {
    case "dashboard":
      return (
        <div className="main-view">
          <DashboardAgent />
        </div>
      );
    default:
      return (
        <div className="main-view">
          <h2>Welcome to DashboardAgent</h2>
          <p>Please select a valid route.</p>
        </div>
      );
  }
}