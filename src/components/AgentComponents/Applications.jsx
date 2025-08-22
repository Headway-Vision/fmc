import React, { useState, useEffect } from 'react';
import './Applications.css';

const Applications = ({ students }) => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Derive applications from students prop, including course from details
    setApplications(
      students.map((student) => ({
        id: student.id,
        name: student.name || 'Unknown',
        course: student.details?.course || 'Not Assigned',
        status: student.status || 'Pending',
        submitted: new Date().toISOString().split('T')[0],
        university: student.university || '',
      }))
    );
  }, [students]);

  const [paymentModal, setPaymentModal] = useState({
    open: false,
    appId: null,
    selectedMethod: null,
  });

  const [viewModal, setViewModal] = useState({
    open: false,
    student: null,
  });

  const handleStatusChange = (id, status) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  const openPaymentModal = (appId) => {
    setPaymentModal({ open: true, appId, selectedMethod: null });
    document.body.style.overflow = 'hidden';
  };

  const closePaymentModal = () => {
    setPaymentModal({ open: false, appId: null, selectedMethod: null });
    document.body.style.overflow = '';
  };

  const selectMethod = (method) => {
    setPaymentModal((prev) => ({ ...prev, selectedMethod: method }));
  };

  const proceedPayment = () => {
    const { appId, selectedMethod } = paymentModal;
    if (!selectedMethod) return;

    const labelMap = {
      upi: 'UPI',
      bank: 'Bank Transfer',
      paypal: 'PayPal',
      netbanking: 'Internet Banking',
    };
    alert(`Initiating ${labelMap[selectedMethod]} for Application ID: ${appId}`);
    closePaymentModal();
  };

  const openViewModal = (id) => {
    const student = students.find((s) => s.id === id);
    setViewModal({ open: true, student });
    document.body.style.overflow = 'hidden';
  };

  const closeViewModal = () => {
    setViewModal({ open: false, student: null });
    document.body.style.overflow = '';
  };

  return (
    <div className="applications-container">
      <div className="applications-header">
        <h1 className="applications-title">Agent Panel — Student Applications</h1>
        <p className="applications-subtitle">Manage approvals and collect fees with one click.</p>
      </div>

      <div className="table-card">
        <div className="table-scroll">
          <table className="applications-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Course</th>
                <th>University</th>
                <th>Status Update</th>
                <th>Submitted</th>
                <th className="actions-col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>#{app.id}</td>
                  <td className="cell-strong">{app.name}</td>
                  <td>{app.course}</td>
                  <td>{app.university || 'Not Assigned'}</td>
                  <td>
                    <select
                      value={app.status}
                      onChange={(e) => handleStatusChange(app.id, e.target.value)}
                      className="status-select"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td>{app.submitted}</td>
                  <td>
                    <div className="action-bar">
                      <button
                        className="action-btn payment-btn"
                        onClick={() => openPaymentModal(app.id)}
                        title="Collect payment"
                      >
                        Pay
                      </button>
                      <button
                        className="action-btn view-btn"
                        onClick={() => openViewModal(app.id)}
                        title="View details"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {paymentModal.open && (
        <div className="modal-overlay" onClick={closePaymentModal} role="dialog" aria-modal="true">
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Choose a payment method</h2>
              <button className="modal-close" onClick={closePaymentModal} aria-label="Close">
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="method-grid">
                <button
                  className={
                    'method-card' + (paymentModal.selectedMethod === 'bank' ? ' method-card--active' : '')
                  }
                  onClick={() => selectMethod('bank')}
                >
                  <div className="method-name">Bank Transfer</div>
                  <div className="method-desc">NEFT / IMPS / RTGS</div>
                </button>

                <button
                  className={
                    'method-card' + (paymentModal.selectedMethod === 'upi' ? ' method-card--active' : '')
                  }
                  onClick={() => selectMethod('upi')}
                >
                  <div className="method-name">UPI</div>
                  <div className="method-desc">GPay / PhonePe / Paytm</div>
                </button>

                <button
                  className={
                    'method-card' + (paymentModal.selectedMethod === 'paypal' ? ' method-card--active' : '')
                  }
                  onClick={() => selectMethod('paypal')}
                >
                  <div className="method-name">PayPal</div>
                  <div className="method-desc">Pay with PayPal</div>
                </button>

                <button
                  className={
                    'method-card' + (paymentModal.selectedMethod === 'netbanking' ? ' method-card--active' : '')
                  }
                  onClick={() => selectMethod('netbanking')}
                >
                  <div className="method-name">Internet Banking</div>
                  <div className="method-desc">All major banks</div>
                </button>
              </div>

              {paymentModal.selectedMethod && (
                <div className="method-details">
                  {paymentModal.selectedMethod === 'upi' && (
                    <>
                      <label className="field">
                        <span className="field-label">Enter UPI ID</span>
                        <input className="field-input" placeholder="e.g., yourname@upi" />
                      </label>
                      <p className="method-note">You’ll be prompted in your UPI app to complete the payment.</p>
                    </>
                  )}

                  {paymentModal.selectedMethod === 'bank' && (
                    <>
                      <div className="details-grid">
                        <div>
                          <div className="detail-label">Account Name</div>
                          <div className="detail-value">Headway Vision Pvt. Ltd.</div>
                        </div>
                        <div>
                          <div className="detail-label">Account Number</div>
                          <div className="detail-value">123456789012</div>
                        </div>
                        <div>
                          <div className="detail-label">IFSC</div>
                          <div className="detail-value">HDFC0001234</div>
                        </div>
                        <div>
                          <div className="detail-label">Bank</div>
                          <div className="detail-value">HDFC Bank, Gurugram</div>
                        </div>
                      </div>
                      <p className="method-note">Transfer to the above account and share the reference ID.</p>
                    </>
                  )}

                  {paymentModal.selectedMethod === 'paypal' && (
                    <p className="method-note">
                      You’ll be redirected to PayPal to securely complete the payment.
                    </p>
                  )}

                  {paymentModal.selectedMethod === 'netbanking' && (
                    <p className="method-note">Select your bank on the next screen and authorize the payment.</p>
                  )}
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={closePaymentModal}>
                Cancel
              </button>
              <button
                className="btn-primary"
                onClick={proceedPayment}
                disabled={!paymentModal.selectedMethod}
                title={!paymentModal.selectedMethod ? 'Select a method to continue' : 'Proceed to payment'}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      )}

{viewModal.open && viewModal.student && (
  <div className="modal-overlay" onClick={closeViewModal} role="dialog" aria-modal="true">
    <div className="modal view-modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-university">
        {viewModal.student.university ? (
          <h3 className="university-title">{viewModal.student.university}</h3>
        ) : (
          <h3 className="university-title">No University Selected</h3>
        )}
      </div>
      <div className="modal-body">
        <div className="review-section">
          <h3>Student Details</h3>
          <p><strong>Name:</strong> {viewModal.student.details?.fullName || 'N/A'}</p>
          <p><strong>DOB:</strong> {viewModal.student.details?.dateOfBirth || 'N/A'}</p>
          <p><strong>Gender:</strong> {viewModal.student.details?.gender || 'N/A'}</p>
          <p><strong>Contact:</strong> {viewModal.student.details?.contactNumber || 'N/A'}</p>
          <p><strong>Email:</strong> {viewModal.student.details?.email || 'N/A'}</p>
          <p><strong>Address:</strong> {viewModal.student.details?.address || 'N/A'}</p>
          <p>
            <strong>Parent:</strong>{' '}
            {viewModal.student.details?.parentName
              ? `${viewModal.student.details.parentName} (${viewModal.student.details.parentContact || 'N/A'})`
              : 'N/A'}
          </p>

          <h3>Academic Details</h3>
          <p><strong>Board:</strong> {viewModal.student.details?.board || 'N/A'}</p>
          <p><strong>Stream:</strong> {viewModal.student.details?.stream || 'N/A'}</p>
          <p><strong>School:</strong> {viewModal.student.details?.schoolName || 'N/A'}</p>
          <p><strong>Year of Passing:</strong> {viewModal.student.details?.yearOfPassing || 'N/A'}</p>
          <p>
            <strong>Subjects:</strong>{' '}
            {Array.isArray(viewModal.student.details?.subjects)
              ? viewModal.student.details.subjects.join(', ')
              : viewModal.student.details?.subjects || 'N/A'}
          </p>
          <p><strong>Marks:</strong> {viewModal.student.details?.totalPercentage ? `${viewModal.student.details.totalPercentage}%` : 'N/A'}</p>
          <p><strong>Roll Number:</strong> {viewModal.student.details?.rollNumber || 'N/A'}</p>

          <h3>Admission</h3>
          <p><strong>Course:</strong> {viewModal.student.details?.course || 'N/A'}</p>
          <p><strong>Specialization:</strong> {viewModal.student.details?.specialization || 'N/A'}</p>
          <p><strong>Mode:</strong> {viewModal.student.details?.mode || 'N/A'}</p>
          <p><strong>Hostel:</strong> {viewModal.student.details?.hostelRequired || 'N/A'}</p>
          <p><strong>University:</strong> {viewModal.student.university || 'N/A'}</p>

          <h3>Documents</h3>
          <ul>
            {Object.entries(viewModal.student.details?.documents || {}).map(([key, value]) => (
              <li key={key}>
                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{' '}
                {value ? 'Uploaded' : 'Not Uploaded'}
              </li>
            ))}
            {viewModal.student.details?.paymentReceipt && (
              <li>
                <strong>Payment Receipt:</strong> Uploaded
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn-secondary" onClick={closeViewModal}>
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Applications;