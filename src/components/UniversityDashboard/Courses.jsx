import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash, faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Courses.css";

export default function Courses() {
  const [data, setData] = useState([]);
  const [fileName, setFileName] = useState("courses.xlsx");
  const [isViewing, setIsViewing] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    setFileName(file.name);

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const workbook = XLSX.read(bstr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Courses");
    XLSX.writeFile(workbook, `${fileName}`);
  };

  const handleEdit = () => alert("Edit functionality coming soon.");
  const handleDelete = () => {
    if (window.confirm("Delete this file?")) {
      setData([]);
      setFileName("courses.xlsx");
      setIsViewing(false);
    }
  };

  return (
    <div className="courses-page">
      <h2 className="courses-title">Courses & Fees</h2>
      <p className="courses-subtitle">Manage courses, seats, and fee structures.</p>

      <section className="courses-card">
        <h4 className="card-title">Upload Courses Excel File</h4>
        <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} className="file-input" />

        {data.length > 0 && (
          <div className="file-preview">
            <p className="file-name">Preview: {fileName}</p>
            <div className="button-group">
              <button className="btn btn-view" onClick={() => setIsViewing(true)}>
                <FontAwesomeIcon icon={faEye} /> View
              </button>
              <button className="btn btn-edit" onClick={handleEdit}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button className="btn btn-delete" onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
              <label className="btn btn-add">
                <FontAwesomeIcon icon={faPlus} /> Upload More
                <input type="file" accept=".xls,.xlsx" onChange={handleFileUpload} hidden />
              </label>
            </div>
          </div>
        )}

        {data.length === 0 && <p className="no-data">No data uploaded yet.</p>}
      </section>

      {isViewing && (
        <div className="modal-overlay" onClick={() => setIsViewing(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h4>Course Data</h4>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    {Object.keys(data[0]).map((col) => (
                      <th key={col}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, i) => (
                    <tr key={i}>
                      {Object.keys(data[0]).map((col) => (
                        <td key={col}>{row[col]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="modal-actions">
              <button className="btn btn-download" onClick={handleDownload}>
                <FontAwesomeIcon icon={faDownload} /> Download
              </button>
              <button className="btn btn-close" onClick={() => setIsViewing(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
