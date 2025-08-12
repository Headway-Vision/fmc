// src/components/UniversityDashboard/Documents.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import "./Documents.css";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [previewDoc, setPreviewDoc] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newDoc = {
      id: Date.now(),
      name: file.name,
      type: file.type,
      url: URL.createObjectURL(file),
    };

    setDocuments((prev) => [...prev, newDoc]);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this document?")) {
      setDocuments((prev) => prev.filter((doc) => doc.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert("Edit feature coming soon for document ID: " + id);
  };

  return (
    <div className="documents-page">
      <div className="upload-section">
        <label className="upload-btn">
          <FontAwesomeIcon icon={faUpload} /> Upload Document
          <input type="file" accept=".pdf,.jpg,.jpeg,.png" hidden onChange={handleUpload} />
        </label>
      </div>

      {documents.length === 0 && <p className="no-docs">No documents uploaded yet.</p>}

      <div className="documents-grid">
        {documents.map((doc) => (
          <div key={doc.id} className="document-card">
            <div className="doc-icon">
              {doc.type.includes("pdf") ? "📄" : "🖼️"}
            </div>
            <p className="doc-name">{doc.name}</p>
            <div className="doc-actions">
              <button className="btn view" onClick={() => setPreviewDoc(doc)}>
                <FontAwesomeIcon icon={faEye} /> View
              </button>
              <button className="btn edit" onClick={() => handleEdit(doc.id)}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button className="btn delete" onClick={() => handleDelete(doc.id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

{previewDoc && (
  <div className="modal-overlay" onClick={() => setPreviewDoc(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setPreviewDoc(null)}>✖</button>
      <h3>{previewDoc.name}</h3>
      {previewDoc.type.includes("pdf") ? (
        <iframe src={previewDoc.url} title="Document Preview" className="doc-preview"></iframe>
      ) : (
        <img src={previewDoc.url} alt="Preview" className="doc-preview" />
      )}
    </div>
  </div>
)}

    </div>
  );
}
