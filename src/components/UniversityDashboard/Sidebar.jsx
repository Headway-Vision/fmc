import React from "react";
import {
  FaTachometerAlt,
  FaUniversity,
  FaUserGraduate,
  FaInbox,
  FaFileInvoiceDollar,
  FaWallet,
  FaChartLine,
  FaBullhorn,
  FaQuestionCircle,
  FaCog
} from "react-icons/fa";
import "./Sidebar.css";

const MENU = [
  { id: "dashboard", label: "Dashboard", icon: FaTachometerAlt },
  { id: "partner-institutes", label: "Partner Institutes", icon: FaUniversity },
  { id: "students", label: "Students", icon: FaUserGraduate },
  { id: "applications", label: "Applications", icon: FaInbox },
  { id: "payments-receipts", label: "Payments & Receipts", icon: FaFileInvoiceDollar },
  { id: "commission-wallet", label: "Commission Wallet", icon: FaWallet },
  { id: "reports-analytics", label: "Reports & Analytics", icon: FaChartLine },
  { id: "announcements", label: "Announcements", icon: FaBullhorn },
  { id: "support", label: "Support", icon: FaQuestionCircle },
  { id: "settings", label: "Settings", icon: FaCog }
];

export default function Sidebar({ sidebarOpen, setRoute, currentRoute }) {
  return (
    <aside className={`ud-sidebar ${sidebarOpen ? "open" : "closed"}`} aria-label="Primary navigation">
      <div
        className="ud-brand"
        onClick={() => setRoute("dashboard")}
        style={{ cursor: "pointer" }}
      >
        <div className="ud-logo">
          <strong>Agent Dashboard</strong>
        </div>
      </div>

      <nav className="ud-menu" role="menu">
        {MENU.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`ud-menu-item ${currentRoute === id ? "active" : ""}`}
            onClick={() => setRoute(id)}
            role="menuitem"
          >
            <Icon size={18} />
            <span className="ud-menu-label">{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
