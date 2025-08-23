import React, { useState, useEffect } from "react";

export default function MyProfile() {
  const [profile, setProfile] = useState({
    name: "Rajani Prasad",
    email: "rajani@example.com",
    phone: "+91 xxxxxxxxx",
    photo: "https://via.placeholder.com/150",
    education: "B.Tech in Computer Science & Engineering",
    grades: "9.2 SGPA",
    currentCourse: "Final Year",
    preferredStreams: "Software Development, Data Science",
    targetExams: "GATE, CAT",
    careerGoals: "Become a Data Scientist in a top tech company",
    completeness: 75,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 shadow-xl rounded-2xl p-8 mt-10 animate-fadeIn">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
          My Profile
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Profile Header */}
      <div
        className={`flex items-center space-x-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <img
          src={profile.photo}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
        />
        <div>
          {isEditing ? (
            <>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="border rounded px-2 py-1 mb-2 w-full"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="border rounded px-2 py-1 mb-2 w-full"
              />
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="border rounded px-2 py-1 w-full"
              />
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-gray-600">{profile.phone}</p>
            </>
          )}
        </div>
      </div>

      {/* Academic Info */}
      <div
        className={`mt-8 border-t pt-6 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Academic Info
        </h3>
        {isEditing ? (
          <>
            <input
              type="text"
              name="education"
              value={profile.education}
              onChange={handleChange}
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <input
              type="text"
              name="grades"
              value={profile.grades}
              onChange={handleChange}
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <input
              type="text"
              name="currentCourse"
              value={profile.currentCourse}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
            />
          </>
        ) : (
          <>
            <p><span className="font-medium">Education:</span> {profile.education}</p>
            <p><span className="font-medium">Grades:</span> {profile.grades}</p>
            <p><span className="font-medium">Current Course/Year:</span> {profile.currentCourse}</p>
          </>
        )}
      </div>

      {/* Career Interests */}
      <div
        className={`mt-8 border-t pt-6 transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Career Interests
        </h3>
        {isEditing ? (
          <>
            <input
              type="text"
              name="preferredStreams"
              value={profile.preferredStreams}
              onChange={handleChange}
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <input
              type="text"
              name="targetExams"
              value={profile.targetExams}
              onChange={handleChange}
              className="border rounded px-2 py-1 mb-2 w-full"
            />
            <input
              type="text"
              name="careerGoals"
              value={profile.careerGoals}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full"
            />
          </>
        ) : (
          <>
            <p><span className="font-medium">Preferred Streams:</span> {profile.preferredStreams}</p>
            <p><span className="font-medium">Target Exams:</span> {profile.targetExams}</p>
            <p><span className="font-medium">Career Goals:</span> {profile.careerGoals}</p>
          </>
        )}
      </div>

      {/* Profile Completeness */}
      <div
        className={`mt-8 border-t pt-6 transition-all duration-700 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Profile Completeness
        </h3>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all"
            style={{ width: `${profile.completeness}%` }}
          ></div>
        </div>
        <p className="text-gray-600 text-sm">
          {profile.completeness}% complete – Tip: Add more details to Academic Info to reach 100%.
        </p>
      </div>

      {/* Edit / Save Button */}
      <div
        className={`mt-6 text-right transition-all duration-700 delay-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:scale-105 shadow-lg transition-transform duration-300"
          onClick={toggleEdit}
        >
          {isEditing ? "Save" : "Edit / Update"}
        </button>
      </div>
    </div>
  );
}
