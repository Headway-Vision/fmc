import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Payments.css";

const Payments = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      studentName: "John Doe",
      course: "Computer Science",
      amount: 5000,
      status: "Pending",
      date: "2025-08-10",
      email: "virendarrawat884@gmail.com",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      course: "Mathematics",
      amount: 4500,
      status: "Pending",
      date: "2025-08-12",
      email: "kunalk2005k@gmail.com",
    },
    {
      id: 3,
      studentName: "Alice Johnson",
      course: "Physics",
      amount: 4800,
      status: "Pending",
      date: "2025-08-09",
      email: "kunalk2005k@gmail.com",
    },
  ]);

  // 🔹 Send Email via EmailJS
  const sendEmail = (payment, newStatus) => {
    const templateParams = {
      to_email: payment.email,
      studentName: payment.studentName,
      course: payment.course,
      amount: payment.amount,
      status: newStatus,
      date: payment.date,
      message: `Your payment has been updated to "${newStatus}".`,
    };

    emailjs
      .send(
        "service_rbc4u72", // 👉 Replace with EmailJS Service ID
        "template_163su2m", // 👉 Replace with EmailJS Template ID
        templateParams,
        "1HOFIU2nqy2IjgAzB" // 👉 Replace with EmailJS Public Key
      )
      .then(
        (response) => console.log("✅ Email sent:", response.status, response.text),
        (err) => console.error("❌ Email error:", err)
      );
  };

  // 🔹 Handle status change from dropdown
  const handleStatusChange = (id, newStatus) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, status: newStatus } : payment
      )
    );

    const payment = payments.find((p) => p.id === id);
    sendEmail(payment, newStatus);
  };

  // 🔹 Helper to get status class based on status
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "status-pending";
      case "Completed":
        return "status-completed";
      case "Refunded":
        return "status-refunded";
      default:
        return "";
    }
  };

  return (
    <div className="payments-container">
      <h1 className="text-3xl font-bold mb-6">Agent Panel - Payment Management</h1>
      <div className="overflow-x-auto">
        <table className="payments-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Email</th>
              <th>Amount ($)</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.studentName}</td>
                <td>{payment.course}</td>
                <td>{payment.email}</td>
                <td>{payment.amount}</td>
                <td>
                  <select
                    value={payment.status}
                    onChange={(e) => handleStatusChange(payment.id, e.target.value)}
                    className={`status-select ${getStatusClass(payment.status)}`}
                  >
                    <option value="Pending" className="status-pending">Pending</option>
                    <option value="Completed" className="status-completed">Completed</option>
                    <option value="Refunded" className="status-refunded">Refunded</option>
                  </select>
                </td>
                <td>{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;