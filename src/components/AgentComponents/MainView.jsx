import React from "react";
import "./MainView.css";
import DashboardAgent from "./DashboardAgent";
import PartnerInstitutes from "./PartnerInstitutes";
import Students from "./Students";
import Applications from "./Applications";
import Payments from "./payments";
import Wallet from "./wallet";
import Reports from "./reports";
import Announcements from "./Announcements";
import Support from "./support";
import Settings from "./settings";

export default function MainView({ route }) {
  switch (route) {
    case "dashboard":
      return (
        <div className="main-view">
          <DashboardAgent />
        </div>
      );
    case "PartnerInstitutes":
      return (
        <div className="main-view">
          <PartnerInstitutes />
        </div>
      );
    case "students":
      return (
        <div className="main-view">
          <Students />
        </div>
      );
    case "Applications":
      return (
        <div className="main-view">
          <Applications />
        </div>
      );
    case "Payments":
      return (
        <div className="main-view">
          <Payments />
        </div>
      );
    case "commission-wallet":
      return (
        <div className="main-view">
          <Wallet />
        </div>
      );
    case "reports": 
      return (
        <div className="main-view">
          <Reports />
        </div>
      );
      case "Announcements":
      return (
        <div className="main-view">
          <Announcements />
        </div>
      );
      case "Support": 
      return (
        <div className="main-view">
          <Support />
        </div>
      );
      case "Settings": 
      return (
        <div className="main-view">
          <Settings />
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