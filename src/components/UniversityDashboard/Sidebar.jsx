// src/components/UniversityDashboard/Sidebar.jsx
import React from "react";
import {
  FaHome,
  FaUserGraduate,
  FaBook,
  FaNewspaper,
  FaInbox,
  FaFileAlt,
  FaChartBar,
  FaCreditCard,
  FaCog,
} from "react-icons/fa";
import "./Sidebar.css"; // Assuming you have a CSS file for styling
const MENU = [
  { id: "dashboard", label: "Dashboard Home", icon: FaHome },
  { id: "profile", label: "My Profile", icon: FaUserGraduate },
  { id: "courses", label: "Courses & Fees", icon: FaBook },
  { id: "news", label: "News & Updates", icon: FaNewspaper },
  { id: "applications", label: "Applications", icon: FaInbox },
  { id: "documents", label: "Documents", icon: FaFileAlt },
  { id: "analytics", label: "Analytics Dashboard", icon: FaChartBar },
  { id: "subscription", label: "Subscription Plan", icon: FaCreditCard },
  { id: "settings", label: "Settings", icon: FaCog },
];

export default function Sidebar({ sidebarOpen, setRoute, currentRoute }) {
  return (
    <aside className={`ud-sidebar ${sidebarOpen ? "open" : "closed"}`} aria-label="Primary navigation">
      <div className="ud-brand" onClick={() => setRoute("dashboard")} style={{ cursor: "pointer" }}>
        <div className="ud-logo" aria-hidden>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M6 8H18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="ud-brand-text">
          <strong>UniPanel</strong>
          <small>Admin</small>
        </div>
      </div>

      <nav className="ud-menu" role="menu">
        {MENU.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`ud-menu-item ${currentRoute === id ? "active" : ""}`}
            onClick={() => setRoute(id)}
            role="menuitem"
            style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
          >
            <Icon size={18} aria-hidden="true" />
            <span className="ud-menu-label">{label}</span>
          </button>
        ))}
      </nav>

      <div className="ud-sidebar-footer">
        <small>Support • Help Docs • Contact</small>
      </div>
    </aside>
  );
}
