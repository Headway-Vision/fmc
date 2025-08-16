import React, { useEffect, useRef } from "react";
import { FaGraduationCap, FaMapMarkerAlt, FaChartBar, FaCalendarAlt } from "react-icons/fa";
import "./RightPanel.css";

export default function RightPanel() {
  const locationData = [
    { region: "North America", percentage: 45, color: "var(--chart-color1)" },
    { region: "Asia", percentage: 30, color: "var(--chart-color2)" },
    { region: "Europe", percentage: 15, color: "var(--chart-color3)" },
    { region: "Other", percentage: 10, color: "var(--chart-color4)" },
  ];

  // Calculate SVG pie chart coordinates
  const calculatePieChart = () => {
    let startAngle = 0;
    return locationData.map((data) => {
      const percentage = data.percentage / 100;
      const endAngle = startAngle + percentage * 360;
      const largeArcFlag = percentage > 0.5 ? 1 : 0;
      const startX = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
      const startY = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
      const endX = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
      const endY = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);
      const path = `M 50,50 L ${startX},${startY} A 40,40 0 ${largeArcFlag} 1 ${endX},${endY} Z`;
      startAngle = endAngle;
      return { ...data, path };
    });
  };

  const pieChartData = calculatePieChart();

  // Animation for fade-in
  const panelRef = useRef(null);
  useEffect(() => {
    panelRef.current.querySelectorAll(".widget-card").forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add("animate-fade-in");
    });
  }, []);

  return (
    <div
      ref={panelRef}
      className="right-panel flex flex-col gap-5 p-5 bg-gradient-to-b from-[var(--card-bg)] to-[var(--bg-color)] text-[var(--text-color)] w-[280px] h-[calc(100vh-56px)] overflow-y-auto"
      aria-label="Dashboard widgets"
    >
      {/* Top Courses Widget */}
      <div className="widget-card bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--text-color)] mb-3">
          <FaGraduationCap className="text-[var(--primary-color)]" aria-hidden="true" />
          Top Courses
        </h3>
        <ul className="space-y-3">
          {[
            "Computer Science - 1,200 enrollments",
            "Business Administration - 950 enrollments",
            "Mechanical Engineering - 800 enrollments",
            "Psychology - 600 enrollments",
          ].map((course, index) => (
            <li key={index} className="text-sm flex items-center gap-2 hover:text-[var(--primary-color)] transition-colors duration-200">
              <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></span>
              {course}
            </li>
          ))}
        </ul>
      </div>

      {/* Location Insights Widget with Pie Chart */}
      <div className="widget-card bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--text-color)] mb-3">
          <FaMapMarkerAlt className="text-[var(--primary-color)]" aria-hidden="true" />
          Location Insights
        </h3>
        <p className="text-sm mb-4">Applicant distribution by region:</p>
        <div className="flex items-center gap-4">
          <svg className="pie-chart" viewBox="0 0 100 100" width="100" height="100">
            {pieChartData.map((data, index) => (
              <path
                key={index}
                d={data.path}
                fill={data.color}
                className="pie-segment"
                style={{ transitionDelay: `${index * 0.1}s` }}
              />
            ))}
            <circle cx="50" cy="50" r="20" fill="var(--bg-color)" />
          </svg>
          <ul className="space-y-2">
            {pieChartData.map((data, index) => (
              <li key={index} className="flex items-center gap-2 text-xs">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: data.color }}></span>
                {data.region}: {data.percentage}%
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Competitor Data Widget */}
      <div className="widget-card bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--text-color)] mb-3">
          <FaChartBar className="text-[var(--primary-color)]" aria-hidden="true" />
          Competitor Data
        </h3>
        <p className="text-sm mb-3">Enrollment trends:</p>
        <ul className="space-y-3">
          {[
            { name: "University A", growth: "+5%", color: "text-green-500" },
            { name: "University B", growth: "-2%", color: "text-red-500" },
            { name: "University C", growth: "+3%", color: "text-green-500" },
          ].map((comp, index) => (
            <li key={index} className="text-sm flex items-center gap-2 hover:text-[var(--primary-color)] transition-colors duration-200">
              <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></span>
              {comp.name}: <span className={comp.color}>{comp.growth}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Deadlines Widget */}
      <div className="widget-card bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
        <h3 className="flex items-center gap-2 text-lg font-bold text-[var(--text-color)] mb-3">
          <FaCalendarAlt className="text-[var(--primary-color)]" aria-hidden="true" />
          Deadlines
        </h3>
        <ul className="space-y-3">
          {[
            "Early Admission: Nov 1, 2025",
            "Regular Admission: Jan 15, 2026",
            "Scholarship Deadline: Dec 1, 2025",
          ].map((deadline, index) => (
            <li key={index} className="text-sm flex items-center gap-2 hover:text-[var(--primary-color)] transition-colors duration-200">
              <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full"></span>
              {deadline}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}