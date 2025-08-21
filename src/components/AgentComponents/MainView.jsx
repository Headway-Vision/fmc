import React, { useState } from "react";
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
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', status: 'Active' },
  ]);

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  const updateStudent = (id, updatedStudent) => {
    setStudents((prev) =>
      prev.map((student) => (student.id === id ? { ...student, ...updatedStudent } : student))
    );
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

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
          <Students
            students={students}
            addStudent={addStudent}
            updateStudent={updateStudent}
            deleteStudent={deleteStudent}
          />
        </div>
      );
    case "Applications":
      return (
        <div className="main-view">
          <Applications students={students} />
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