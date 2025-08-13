import React from "react";
import "./AnalyticsDashboard.css";

export default function AnalyticsDashboard() {
  const stats = [
    { label: "Total Followers", value: "21.2k", change: "+112.71%", positive: true },
    { label: "Impressions", value: "1.6k", change: "+112.71%", positive: true },
    { label: "Reach", value: "826", change: "-24.2%", positive: false },
    { label: "Engagement Rate", value: "18.2%", change: "+112.71%", positive: true },
  ];

  const followerGrowth = [6, 9, 4, 7, 10, 8, 5]; 

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <h2>Analytics Overview</h2>
        <select>
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      {/* Top Stats */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stats-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
            <span className={stat.positive ? "positive" : "negative"}>
              {stat.change}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bottom-grid">
        {/* Likes Progress Circle */}
        <div className="progress-card">
          <h4>Get More Likes this Summer</h4>
          <div className="progress-circle">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray="77, 100"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="progress-text">29.2k</div>
          </div>
          <p>You are at 77% of 36,000 likes</p>
        </div>

        {/* Follower Growth Chart */}
        <div className="chart-card">
          <h4>Follower Growth</h4>
          <div className="bar-chart">
            {followerGrowth.map((val, idx) => (
              <div key={idx} className="bar">
                <div
                  className="bar-fill"
                  style={{ height: `${val * 10}%` }}
                ></div>
              </div>
            ))}
          </div>
          <p>
            With <b>22.8%</b> growth rate we are steadily growing our following.
          </p>
        </div>
      </div>
    </div>
  );
}
