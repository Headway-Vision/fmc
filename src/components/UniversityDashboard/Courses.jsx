
import React, { useState } from "react";
import * as XLSX from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash, faDownload, faPlus, faSave, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Courses.css";

export default function Courses() {
  const [courseData, setCourseData] = useState([]);
  const [courseFileName, setCourseFileName] = useState("courses.xlsx");
  const [isViewingCourses, setIsViewingCourses] = useState(false);
  const [newCourseName, setNewCourseName] = useState("");
  const [editingCourseIndex, setEditingCourseIndex] = useState(null);
  const [isCoursesCollapsed, setIsCoursesCollapsed] = useState(false);
  const [isUploadingCourses, setIsUploadingCourses] = useState(false);

  // Handle Excel upload for courses
  const handleCourseFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setIsUploadingCourses(true);
    const reader = new FileReader();
    setCourseFileName(file.name);

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const workbook = XLSX.read(bstr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
      setCourseData(jsonData);
      setIsUploadingCourses(false);
    };

    reader.readAsBinaryString(file);
  };

  // Download courses as Excel
  const handleCourseDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(courseData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Courses");
    XLSX.writeFile(workbook, `${courseFileName}`);
  };

  // Delete entire course file/data
  const handleDeleteCourses = () => {
    if (window.confirm("Delete all courses data?")) {
      setCourseData([]);
      setCourseFileName("courses.xlsx");
      setIsViewingCourses(false);
    }
  };

  // Add new course manually
  const handleAddCourse = () => {
    if (newCourseName.trim()) {
      setCourseData([...courseData, { Name: newCourseName }]);
      setNewCourseName("");
    }
  };

  // Edit course
  const handleEditCourse = (index) => {
    setEditingCourseIndex(index);
    setNewCourseName(courseData[index].Name || "");
  };

  // Save edited course
  const handleSaveCourse = (index) => {
    const updatedData = [...courseData];
    updatedData[index].Name = newCourseName;
    setCourseData(updatedData);
    setEditingCourseIndex(null);
    setNewCourseName("");
  };

  // Delete individual course
  const handleDeleteCourse = (index) => {
    if (window.confirm("Delete this course?")) {
      const updatedData = courseData.filter((_, i) => i !== index);
      setCourseData(updatedData);
    }
  };

  // Format fee values with ₹ and commas
  const formatFee = (value) => {
    if (!value || isNaN(value)) return value;
    return `₹${Number(value).toLocaleString("en-IN")}`;
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 max-w-5xl bg-[var(--bg-color)] text-[var(--text-color)]">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">Courses</h2>
      <p className="text-[var(--color-muted)] mb-6">Manage courses and seats.</p>

      {/* Courses Section */}
      <section className="mb-8 shadow-md rounded-lg bg-[var(--card-bg)] border border-[var(--border-color)]">
        <div
          className="flex justify-between items-center p-4 cursor-pointer bg-[var(--card-bg)] rounded-t-lg"
          onClick={() => setIsCoursesCollapsed(!isCoursesCollapsed)}
        >
          <h4 className="text-lg font-semibold">Courses</h4>
          <FontAwesomeIcon icon={isCoursesCollapsed ? faChevronDown : faChevronUp} />
        </div>
        {!isCoursesCollapsed && (
          <div className="p-4">
            <label className="block mb-2 text-sm font-medium">
              Upload Courses Excel File
              <input
                type="file"
                accept=".xls,.xlsx"
                onChange={handleCourseFileUpload}
                className="mt-1 block w-full text-sm text-[var(--text-color)] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-primary)] file:text-white hover:file:bg-[var(--color-primary-dark)]"
              />
            </label>
            {isUploadingCourses && <p className="text-[var(--color-primary)]">Uploading...</p>}

            {/* Manual Add Course */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Enter course name"
                value={newCourseName}
                onChange={(e) => setNewCourseName(e.target.value)}
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)]"
              />
              <button
                onClick={handleAddCourse}
                className="flex items-center px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)]"
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add Course
              </button>
            </div>

            {courseData.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-[var(--color-muted)] mb-2">Courses Data: {courseFileName}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => setIsViewingCourses(true)}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    <FontAwesomeIcon icon={faEye} className="mr-2" /> View
                  </button>
                  <button
                    onClick={handleDeleteCourses}
                    className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete All
                  </button>
                  <label className="flex items-center px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" /> Upload More
                    <input type="file" accept=".xls,.xlsx" onChange={handleCourseFileUpload} hidden />
                  </label>
                </div>

                {/* List of Courses */}
                <div className="mt-4">
                  <h5 className="text-md font-medium">Individual Courses:</h5>
                  <div className="space-y-4">
                    {courseData.map((course, index) => (
                      <div
                        key={index}
                        className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4 course-card"
                      >
                        {editingCourseIndex === index ? (
                          <div className="flex flex-col sm:flex-row gap-2 w-full mb-2">
                            <input
                              type="text"
                              value={newCourseName}
                              onChange={(e) => setNewCourseName(e.target.value)}
                              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--card-bg)] text-[var(--text-color)] border-[var(--border-color)]"
                            />
                            <button
                              onClick={() => handleSaveCourse(index)}
                              className="px-3 py-1 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)]"
                            >
                              <FontAwesomeIcon icon={faSave} />
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <dl className="space-y-2">
                              {Object.entries(course).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <dt className="text-sm font-medium text-[var(--color-muted)]">{key}</dt>
                                  <dd className="text-sm text-[var(--text-color)]">
                                    {key.includes("Fee") ? formatFee(value) : value}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                            <div className="flex gap-2 mt-3">
                              <button
                                onClick={() => handleEditCourse(index)}
                                className="p-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button
                                onClick={() => handleDeleteCourse(index)}
                                className="p-2 text-red-600 hover:text-red-800"
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {courseData.length === 0 && <p className="text-[var(--color-muted)]">No courses data yet.</p>}
          </div>
        )}
      </section>

      {/* Modal for Viewing Courses */}
      {isViewingCourses && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="rounded-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-auto bg-[var(--card-bg)] border border-[var(--border-color)]">
            <h4 className="text-lg font-semibold mb-4">Course Data</h4>
            <div className="space-y-4">
              {courseData.map((course, i) => (
                <div
                  key={i}
                  className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg p-4 course-card"
                >
                  <dl className="space-y-2">
                    {Object.entries(course).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <dt className="text-sm font-medium text-[var(--color-muted)]">{key}</dt>
                        <dd className="text-sm text-[var(--text-color)]">
                          {key.includes("Fee") ? formatFee(value) : value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleCourseDownload}
                className="flex items-center px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)]"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download
              </button>
              <button
                onClick={() => setIsViewingCourses(false)}
                className="flex items-center px-4 py-2 bg-[var(--color-muted)] text-white rounded-md hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}