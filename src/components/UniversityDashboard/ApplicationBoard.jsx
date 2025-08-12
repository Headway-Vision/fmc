// src/components/UniversityDashboard/ApplicationBoard.jsx
import React from "react";
import "./ApplicationBoard.css"; // Assuming you have a CSS file for styling
export default function ApplicationBoard() {
  const statuses = ["New", "Review", "Shortlisted", "Accepted", "Rejected"];
  const exampleApps = [
    { name: "Aisha Khan", course: "B.Sc CS", status: "New" },
    { name: "Ravi Patel", course: "BBA", status: "Review" },
    { name: "Sneha Roy", course: "BCA", status: "Shortlisted" },
  ];
  return (
    <section className="ud-card ud-app-board">
      <h3>Application Status Board</h3>
      <div className="ud-app-filters">
        {statuses.map((s) => (
          <button key={s} className="ud-chip" onClick={() => alert(`Filter: ${s}`)}>
            {s}
          </button>
        ))}
      </div>

      <div className="ud-app-list">
        {exampleApps.map((a, i) => (
          <div key={i} className="ud-app-row">
            <div>
              <strong>{a.name}</strong>
              <div className="ud-app-sub">{a.course}</div>
            </div>
            <div className={`ud-badge ud-badge-${a.status.toLowerCase()}`}>{a.status}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
