import React, { useState } from 'react';
import './Payments.css';

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, studentName: 'John Doe', course: 'Computer Science', amount: 5000, status: 'Pending', date: '2025-08-10' },
    { id: 2, studentName: 'Jane Smith', course: 'Mathematics', amount: 4500, status: 'Completed', date: '2025-08-12' },
    { id: 3, studentName: 'Alice Johnson', course: 'Physics', amount: 4800, status: 'Pending', date: '2025-08-09' },
  ]);

  const handleMarkAsPaid = (id) => {
    setPayments(payments.map(payment => 
      payment.id === id ? { ...payment, status: 'Completed' } : payment
    ));
  };

  const handleRefund = (id) => {
    setPayments(payments.map(payment => 
      payment.id === id ? { ...payment, status: 'Refunded' } : payment
    ));
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
              <th>Amount ($)</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.studentName}</td>
                <td>{payment.course}</td>
                <td>{payment.amount}</td>
                <td>{payment.status}</td>
                <td>{payment.date}</td>
                <td>
                  {payment.status === 'Pending' && (
                    <button 
                      className="action-btn paid-btn" 
                      onClick={() => handleMarkAsPaid(payment.id)}
                    >
                      Mark as Paid
                    </button>
                  )}
                  {payment.status === 'Completed' && (
                    <button 
                      className="action-btn refund-btn" 
                      onClick={() => handleRefund(payment.id)}
                    >
                      Issue Refund
                    </button>
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

export default Payments;