import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, Bell, Shield, LogOut } from "lucide-react";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function SettingsPage() {
  // Notification switches state
  const [notifications, setNotifications] = useState({
    exams: true,
    results: false,
    scholarships: true,
  });

  // Privacy setting
  const [privacy, setPrivacy] = useState("Public");

  // Toggle handler
  const toggleSwitch = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Heading with gradient underline */}
        <h1 className="relative text-3xl font-bold text-blue-800 mb-12 inline-block pb-2">
        Settings
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-600 to-pink-500 rounded"></span>
        </h1>

        {/* Change Password */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-blue-600 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-800">Change Password</h2>
          </div>

          <label className="block mb-2 text-gray-700">Current Password</label>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-2 text-gray-700">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mb-2 text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter new password"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        {/* Manage Email / Phone */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-green-600 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-800">Manage Email / Phone</h2>
          </div>

          <label className="block mb-2 text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-green-400"
          />

          <label className="block mb-2 text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-400"
          />
        </motion.div>

        {/* Notification Preferences */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Bell className="text-purple-600 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-800">Notification Preferences</h2>
          </div>

          <div className="space-y-4">
            {Object.keys(notifications).map((key) => (
              <div
                key={key}
                className="flex justify-between items-center border rounded-lg p-3 hover:bg-gray-50 transition"
              >
                <span className="capitalize text-gray-700">
                  {key === "exams" && "Exam Alerts"}
                  {key === "results" && "Result Announcements"}
                  {key === "scholarships" && "Scholarship Updates"}
                </span>
                <button
                  onClick={() => toggleSwitch(key)}
                  className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
                    notifications[key] ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
                      notifications[key] ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Privacy Settings */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="text-red-600 w-6 h-6" />
            <h2 className="text-lg font-semibold text-gray-800">Privacy Settings</h2>
          </div>

          <label className="block mb-2 text-gray-700">Who can view your profile?</label>
          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-red-400"
          >
            <option value="Public">Public</option>
            <option value="Friends">Friends Only</option>
            <option value="Private">Only Me</option>
          </select>
        </motion.div>

        {/* Linked Accounts */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Linked Accounts</h2>
          <div className="flex gap-4">
            {/* Google */}
            <a
              href="https://accounts.google.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <FaGoogle className="text-red-500" /> Google
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <FaFacebook className="text-blue-600" /> Facebook
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              <FaLinkedin className="text-blue-500" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Save + Logout */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg transition">
            Save Changes
          </button>

          <a
            href="/logout" // change based on your app route
            className="flex items-center gap-2 px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
          >
            <LogOut className="w-5 h-5" /> Logout
          </a>
        </div>
      </motion.div>
    </div>
  );
}
