import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Banknote, BellRing, Landmark } from "lucide-react";
import "./Scholarship.css";

export default function ScholarshipsLoans() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const n = parseInt(tenure);
    if (principal && rate && n) {
      const emiValue =
        (principal * rate * Math.pow(1 + rate, n)) /
        (Math.pow(1 + rate, n) - 1);
      setEmi(emiValue.toFixed(2));
    }
  };

  return (
    <div className="scholarships-loans-container">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="page-title"
      >
        🎓 Scholarships & Loans
      </motion.h1>

      {/* Unified Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="unified-card"
      >
        <h2 className="section-title">
          Scholarships
        </h2>

        {/* Applied Scholarships Form */}
        <div className="scholarships-form-section">
          <div className="section-header">
            <GraduationCap className="section-icon" />
            <h3 className="section-subtitle">
              Applied Scholarships
            </h3>
          </div>
          <form className="scholarships-form">
            <div>
              <label className="form-label">Name</label>
              <input type="text" className="form-input" placeholder="Enter scholarship name" />
            </div>
            <div>
              <label className="form-label">Provider</label>
              <input type="text" className="form-input" placeholder="Enter provider name" />
            </div>
            <div>
              <label className="form-label">Status</label>
              <select className="form-select">
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
            <div>
              <label className="form-label">Amount</label>
              <input type="number" className="form-input" placeholder="Enter amount" />
            </div>
            <div className="full-width">
              <label className="form-label">Deadline</label>
              <input type="date" className="form-input" />
            </div>
          </form>
        </div>

        {/* Eligible Scholarships */}
        <div className="eligible-scholarships-section">
          <div className="section-header">
            <BellRing className="section-icon eligible" />
            <h3 className="section-subtitle">
              Eligible Scholarships (AI Suggested)
            </h3>
          </div>
          <p className="section-text">Based on your profile, you may qualify for:</p>
          <ul className="scholarships-list">
            <li>Women in Tech Fellowship – Deadline: Oct 15</li>
            <li>State Minority Scholarship – Deadline: Sep 30</li>
          </ul>
        </div>

        {/* Government Schemes */}
        <div className="government-schemes-section">
          <div className="section-header">
            <Landmark className="section-icon government" />
            <h3 className="section-subtitle">Government Schemes</h3>
          </div>
          <div className="schemes-form">
            <div>
              <label className="form-label">Select State</label>
              <select className="form-select">
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Uttar Pradesh</option>
                <option>Tamil Nadu</option>
                <option>Delhi</option>
              </select>
            </div>
            <div>
              <label className="form-label">Select Category</label>
              <select className="form-select">
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
                <option>Minority</option>
              </select>
            </div>
            <div>
              <label className="form-label">Search</label>
              <input type="text" className="form-input" placeholder="Search scheme" />
            </div>
          </div>
          <ul className="schemes-list">
            <li>State Education Loan Subsidy Scheme</li>
            <li>Central OBC Scholarship – Income Bracket Eligible</li>
          </ul>
        </div>

        {/* Loan Applications */}
        <div>
          <div className="section-header">
            <Banknote className="section-icon loan" />
            <h3 className="section-subtitle">Loan Applications</h3>
          </div>
          <form className="loan-form">
            <div>
              <label className="form-label">Loan Amount (₹)</label>
              <input type="number" className="form-input" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} />
            </div>
            <div>
              <label className="form-label">Interest Rate (%)</label>
              <input type="number" className="form-input" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div>
              <label className="form-label">Tenure (months)</label>
              <select className="form-select" value={tenure} onChange={(e) => setTenure(e.target.value)}>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="48">48</option>
                <option value="60">60</option>
              </select>
            </div>
          </form>
          <button onClick={calculateEMI} className="calculate-button">
            Calculate EMI
          </button>
          {emi && <p className="emi-result">Estimated EMI: ₹{emi}/month</p>}
        </div>
      </motion.div>

      {/* New Opportunities Alert */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="opportunities-alert"
      >
        <h2 className="alert-title">🔔 New Opportunities Alert</h2>
        <p>We’ll notify you when new funding opportunities match your profile.</p>
      </motion.div>
    </div>
  );
}