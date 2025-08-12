// src/components/UniversityDashboard/RightWidgets.jsx
import React from "react";
import "./RightWidgets.css"; // Assuming you have a CSS file for styling
export default function RightWidgets() {
  return (
    <aside className="ud-right-widgets">
      <div className="ud-card">
        <h4>Top Courses</h4>
        <ol className="ud-list-compact">
          <li>B.Sc Computer Science</li>
          <li>BBA</li>
          <li>BCA</li>
        </ol>
      </div>

      <div className="ud-card">
        <h4>Location Insights</h4>
        <p className="ud-small">Most leads from: Delhi, Mumbai, Bangalore</p>
      </div>

      <div className="ud-card">
        <h4>Deadlines</h4>
        <ul className="ud-list-compact">
          <li>Application deadline: 30 Jun</li>
          <li>Fee submission: 5 Jul</li>
        </ul>
      </div>
    </aside>
  );
}
