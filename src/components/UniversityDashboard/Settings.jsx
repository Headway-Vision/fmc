import React from "react";
import "./Settings.css";

export default function Settings() {
  const handleButtonClick = (action) => {
    console.log(`${action} clicked`);
    // Add functionality for each button as needed
  };

  return (
    <div className="ud-page">
      <h2>General Settings</h2>
      <p>Manage your account preferences, notifications, and more.</p>

      <section className="ud-card">
        <h4>Profile</h4>
        <p>Name, email, avatar, and password change.</p>
        <button className="ud-btn" onClick={() => handleButtonClick("Edit Name")}>Edit Name</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Change Email")}>Change Email</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Update Avatar")}>Update Avatar</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Change Password")}>Change Password</button>
      </section>

      <section className="ud-card">
        <h4>Language & Region</h4>
        <p>Choose language, date/time format, currency, etc.</p>
        <button className="ud-btn" onClick={() => handleButtonClick("Choose Language")}>Choose Language</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Set Date/Time Format")}>Set Date/Time Format</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Select Currency")}>Select Currency</button>
      </section>

      <section className="ud-card">
        <h4>Theme & Appearance</h4>
        <p>Light/dark mode, custom colors, font size.</p>
        <button className="ud-btn" onClick={() => handleButtonClick("Toggle Light/Dark Mode")}>Toggle Light/Dark Mode</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Custom Colors")}>Custom Colors</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Adjust Font Size")}>Adjust Font Size</button>
      </section>

      <section className="ud-card">
        <h4>Notifications</h4>
        <p>Toggle email, push, SMS alerts.</p>
        <button className="ud-btn" onClick={() => handleButtonClick("Toggle Email Alerts")}>Toggle Email Alerts</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Toggle Push Notifications")}>Toggle Push Notifications</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Toggle SMS Alerts")}>Toggle SMS Alerts</button>
      </section>

      <section className="ud-card">
        <h4>Privacy Controls</h4>
        <p>Manage what data is visible, block list.</p>
        <button className="ud-btn" onClick={() => handleButtonClick("Manage Data Visibility")}>Manage Data Visibility</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Manage Block List")}>Manage Block List</button>
      </section>

      <section className="ud-card">
        <h4>Account & Security</h4>
        <button className="ud-btn" onClick={() => handleButtonClick("Enable/Disable 2FA")}>Two-Factor Authentication (2FA)</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Password Reset/Change")}>Password Reset / Change</button>
        <button className="ud-btn" onClick={() => handleButtonClick("View Login Activity")}>Login Activity & Devices</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Data Download")}>Data Download</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Delete Account")}>Delete Account</button>
      </section>

      <section className="ud-card">
        <h4>App-Specific (Custom to Your Project)</h4>
        <p>For example, in an Educational app:</p>
        <button className="ud-btn" onClick={() => handleButtonClick("Default Study Mode")}>Default Study Mode</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Learning Pace")}>Learning Pace</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Progress Backup")}>Progress Backup</button>
        {/* Add more based on project type if needed */}
      </section>

      <section className="ud-card">
        <h4>Advanced / Extras</h4>
        <button className="ud-btn" onClick={() => handleButtonClick("Backup & Restore")}>Backup & Restore</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Accessibility")}>Accessibility</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Beta Features / Labs")}>Beta Features / Labs</button>
        <button className="ud-btn" onClick={() => handleButtonClick("Integration Settings")}>Integration Settings</button>
      </section>
    </div>
  );
}