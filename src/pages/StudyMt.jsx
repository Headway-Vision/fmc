import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Video, ClipboardList, BarChart, Wrench } from "lucide-react";

export default function StudyMaterialTools() {
  const [reportFile, setReportFile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedTool, setSelectedTool] = useState("");
  const [selectedVideo, setSelectedVideo] = useState("");
  const [selectedExam, setSelectedExam] = useState("");

  const handleReportUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setReportFile(uploadedFile);

    if (uploadedFile) {
      // Mock AI Suggestions
      setSuggestions([
        "Focus more on time management during exams.",
        "Revise weak topics like Organic Chemistry.",
        "Practice more previous year question papers.",
        "Improve accuracy in Physics numerical problems.",
        "Take weekly mock tests to track consistency.",
      ]);
    }
  };

  const renderToolComponent = () => {
    switch (selectedTool) {
      case "ROI Calculator":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-pink-50 border border-pink-300 rounded-lg p-4 mt-4"
          >
            <h3 className="text-lg font-semibold text-pink-700 mb-2">
              ROI Calculator
            </h3>
            <label className="block mb-2 text-gray-700">Course Fee</label>
            <input
              type="number"
              className="w-full border rounded-lg p-2 mb-3"
              placeholder="Enter fee"
            />
            <label className="block mb-2 text-gray-700">Expected Salary</label>
            <input
              type="number"
              className="w-full border rounded-lg p-2 mb-3"
              placeholder="Enter salary"
            />
            <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">
              Calculate ROI
            </button>
          </motion.div>
        );
      case "Fee Estimator":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-purple-50 border border-purple-300 rounded-lg p-4 mt-4"
          >
            <h3 className="text-lg font-semibold text-purple-700 mb-2">
              Fee Estimator
            </h3>
            <label className="block mb-2 text-gray-700">Select Course</label>
            <select className="w-full border rounded-lg p-2 mb-3">
              <option value="">-- Select --</option>
              <option>Engineering</option>
              <option>Medical</option>
              <option>Management</option>
            </select>
            <label className="block mb-2 text-gray-700">Duration (Years)</label>
            <input
              type="number"
              className="w-full border rounded-lg p-2 mb-3"
              placeholder="Enter duration"
            />
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg">
              Estimate Fee
            </button>
          </motion.div>
        );
      case "College Comparison":
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-blue-50 border border-blue-300 rounded-lg p-4 mt-4"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              College Comparison
            </h3>
            <label className="block mb-2 text-gray-700">College 1</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mb-3"
              placeholder="Enter College 1"
            />
            <label className="block mb-2 text-gray-700">College 2</label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 mb-3"
              placeholder="Enter College 2"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
              Compare
            </button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
            Study Material & Tools
          </h1>
          <div className="w-50 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Notes & PDFs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-blue-600 w-7 h-7" />
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-blue-400 inline-block">
              Notes & PDFs
            </h2>
          </div>
          <label className="block mb-2 text-gray-700 font-medium">
            Upload Notes/PDFs
          </label>
          <input
            type="file"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        {/* Video Lectures */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Video className="text-purple-600 w-7 h-7" />
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-purple-400 inline-block">
              Video Lectures
            </h2>
          </div>
          <label className="block mb-2 text-gray-700 font-medium">
            Select Subject/Exam
          </label>
          <select
            value={selectedVideo}
            onChange={(e) => setSelectedVideo(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-purple-400"
          >
            <option value="">-- Select --</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>UPSC</option>
            <option>IELTS</option>
          </select>
        </motion.div>

        {/* Mock Tests & Quizzes */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="text-green-600 w-7 h-7" />
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-green-400 inline-block">
              Mock Tests & Quizzes
            </h2>
          </div>
          <label className="block mb-2 text-gray-700 font-medium">
            Choose Exam
          </label>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          >
            <option value="">-- Select --</option>
            <option>JEE</option>
            <option>NEET</option>
            <option>IELTS</option>
            <option>UPSC</option>
          </select>
        </motion.div>

        {/* Performance Reports */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="text-orange-600 w-7 h-7" />
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-orange-400 inline-block">
              Performance Reports
            </h2>
          </div>
          <label className="block mb-2 text-gray-700 font-medium">
            Upload Report File
          </label>
          <input
            type="file"
            onChange={handleReportUpload}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400 mb-4"
          />

          {reportFile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-orange-50 border border-orange-300 rounded-lg p-4 mt-4"
            >
              <h3 className="text-lg font-semibold text-orange-700 mb-2">
                AI-Suggested Improvements
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {suggestions.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="text-pink-600 w-7 h-7" />
            <h2 className="text-xl font-semibold text-gray-800 border-b-2 border-pink-400 inline-block">
              Tools
            </h2>
          </div>
          <label className="block mb-2 text-gray-700 font-medium">
            Select Tool
          </label>
          <select
            value={selectedTool}
            onChange={(e) => setSelectedTool(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-pink-400"
          >
            <option value="">-- Select --</option>
            <option value="ROI Calculator">ROI Calculator</option>
            <option value="Fee Estimator">Fee Estimator</option>
            <option value="College Comparison">College Comparison</option>
          </select>

          {renderToolComponent()}
        </motion.div>

        <div className="flex justify-end">
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition">
            Save / Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
}
