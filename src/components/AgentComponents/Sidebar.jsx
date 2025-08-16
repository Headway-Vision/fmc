import React from "react";
import {
  FaHome,
  FaUniversity,
  FaUserGraduate,
  FaInbox,
  FaReceipt,
  FaWallet,
  FaChartBar,
  FaBullhorn,
  FaLifeRing,
  FaCog,
} from "react-icons/fa";
import "./Sidebar.css";

const MENU = [
  { id: "dashboard", label: "Dashboard", icon: FaHome },
  { id: "partner-institutes", label: "Partner Institutes", icon: FaUniversity },
  { id: "students", label: "Students", icon: FaUserGraduate },
  { id: "applications", label: "Applications", icon: FaInbox },
  { id: "payments", label: "Payments & Receipts", icon: FaReceipt },
  { id: "commission-wallet", label: "Commission Wallet", icon: FaWallet },
  { id: "reports", label: "Reports & Analytics", icon: FaChartBar },
  { id: "announcements", label: "Announcements", icon: FaBullhorn },
  { id: "support", label: "Support", icon: FaLifeRing },
  { id: "settings", label: "Settings", icon: FaCog },
];

export default function Sidebar({ sidebarOpen, setRoute, currentRoute }) {
  return (
    <aside className={`ad-sidebar ${sidebarOpen ? "open" : "closed"}`}>
      <div className="ad-brand" onClick={() => setRoute("dashboard")} style={{ cursor: "pointer" }}>
        <div className="ad-logo" aria-hidden>
          <FaUniversity size={24} />
        </div>
        <div className="ad-brand-text">
          <strong>Agent Panel</strong>
          <small>Admin</small>
        </div>
      </div>

      <nav className="ad-menu">
        {MENU.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`ad-menu-item ${currentRoute === id ? "active" : ""}`}
            onClick={() => setRoute(id)}
          >
            <Icon size={18} /> <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="ad-sidebar-footer">
        <small>Support • Help Docs • Contact</small>
      </div>
    </aside>
  );
}
