import React, { useState } from 'react';
import './wallet.css';

const Wallet = () => {
  const [balance, setBalance] = useState(3200.50); 
  const [transactions, setTransactions] = useState([
    { id: 'T001', date: '2025-08-10', student: 'John Doe', course: 'Computer Science', amount: 500, status: 'Credited' },
    { id: 'T002', date: '2025-08-12', student: 'Jane Smith', course: 'Mathematics', amount: 450, status: 'Credited' },
    { id: 'T003', date: '2025-08-09', student: 'Alice Johnson', course: 'Physics', amount: 200, status: 'Withdrawn' },
  ]);

  const handleWithdraw = () => {
    
    alert('Withdrawal request submitted!');
    
    setBalance(balance - 100); 
    setTransactions([...transactions, {
      id: `T00${transactions.length + 1}`,
      date: new Date().toISOString().split('T')[0],
      student: 'N/A',
      course: 'N/A',
      amount: 100,
      status: 'Withdrawn'
    }]);
  };

  return (
    <div className="wallet-container">
      <h1 className="text-3xl font-bold mb-6">Agent Panel - Commission Wallet</h1>
      
      
      <div className="wallet-balance-card">
        <h2 className="text-xl font-semibold">Current Balance</h2>
        <p className="text-4xl font-bold text-green-600">${balance.toFixed(2)}</p>
        <button 
          className="action-btn withdraw-btn"
          onClick={handleWithdraw}
        >
          Withdraw Funds
        </button>
      </div>

     
      <div className="overflow-x-auto mt-8">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <table className="wallet-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Student</th>
              <th>Course</th>
              <th>Amount ($)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.student}</td>
                <td>{transaction.course}</td>
                <td>{transaction.amount.toFixed(2)}</td>
                <td>{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;