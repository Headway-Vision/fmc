import React, { useState } from 'react';
import './Applications.css';

const Applications = () => {
  const [applications, setApplications] = useState([
    { id: 1, name: 'John Doe', course: 'Computer Science', status: 'Pending', submitted: '2025-08-10' },
    { id: 2, name: 'Jane Smith', course: 'Mathematics', status: 'Pending', submitted: '2025-08-12' },
    { id: 3, name: 'Alice Johnson', course: 'Physics', status: 'Approved', submitted: '2025-08-09' },
  ]);

  const handleApprove = (id) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'Approved' } : app
    ));
  };

  const handleReject = (id) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: 'Rejected' } : app
    ));
  };

  return (
    <div className="applications-container">
      <h1 className="text-3xl font-bold mb-6">Agent Panel - Student Applications</h1>
      <div className="overflow-x-auto">
        <table className="applications-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Status</th>
              <th>Submitted Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>{app.course}</td>
                <td>{app.status}</td>
                <td>{app.submitted}</td>
                <td>
                  {app.status === 'Pending' && (
                    <>
                      <button 
                        className="action-btn approve-btn" 
                        onClick={() => handleApprove(app.id)}
                      >
                        Approve
                      </button>
                      <button 
                        className="action-btn reject-btn" 
                        onClick={() => handleReject(app.id)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;