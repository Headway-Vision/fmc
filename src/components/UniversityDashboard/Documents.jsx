// src/pages/Documents.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import { db, storage } from "../../firebase";
import "./Documents.css";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [previewDoc, setPreviewDoc] = useState(null);

  // 🔹 Fetch documents from Firestore
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "documents"));
        const docsData = querySnapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setDocuments(docsData);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, []);

  // 🔹 Handle upload to Firebase Storage + Firestore
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      // 1. Upload file to Firebase Storage
      const storageRef = ref(storage, `documents/${Date.now()}-${file.name}`);
      await uploadBytes(storageRef, file);

      // 2. Get file download URL
      const downloadURL = await getDownloadURL(storageRef);

      // 3. Save metadata in Firestore
      const docRef = await addDoc(collection(db, "documents"), {
        name: file.name,
        type: file.type,
        url: downloadURL,
        storagePath: storageRef.fullPath, // save storage path for deletion
        createdAt: new Date(),
      });

      // 4. Update local state
      setDocuments((prev) => [
        ...prev,
        {
          id: docRef.id,
          name: file.name,
          type: file.type,
          url: downloadURL,
          storagePath: storageRef.fullPath,
        },
      ]);
    } catch (error) {
      console.error("Error uploading document:", error);
    }
  };

  // 🔹 Handle delete from Firestore + Storage
  const handleDelete = async (id, storagePath) => {
    if (window.confirm("Delete this document?")) {
      try {
        // 1. Delete from Firestore
        await deleteDoc(doc(db, "documents", id));

        // 2. Delete from Firebase Storage
        const storageRef = ref(storage, storagePath);
        await deleteObject(storageRef);

        // 3. Update local state
        setDocuments((prev) => prev.filter((doc) => doc.id !== id));
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    }
  };

  const handleEdit = (id) => {
    alert("Edit feature coming soon for document ID: " + id);
  };

  return (
    <div className="documents-page">
      {/* Upload Section */}
      <div className="upload-section">
        <label className="upload-btn">
          <FontAwesomeIcon icon={faUpload} /> Upload Document
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            hidden
            onChange={handleUpload}
          />
        </label>
      </div>

      {/* No documents message */}
      {documents.length === 0 && (
        <p className="no-docs">No documents uploaded yet.</p>
      )}

      {/* Documents Grid */}
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
              <button
                className="btn delete"
                onClick={() => handleDelete(doc.id, doc.storagePath)}
              >
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewDoc && (
        <div className="modal-overlay" onClick={() => setPreviewDoc(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setPreviewDoc(null)}
            >
              ✖
            </button>
            <h3>{previewDoc.name}</h3>
            {previewDoc.type.includes("pdf") ? (
              <iframe
                src={previewDoc.url}
                title="Document Preview"
                className="doc-preview"
              ></iframe>
            ) : (
              <img
                src={previewDoc.url}
                alt="Preview"
                className="doc-preview"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
