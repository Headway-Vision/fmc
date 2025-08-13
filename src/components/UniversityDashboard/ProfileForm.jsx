import React, { useState } from "react";
import "./ProfileForm.css";

const universityTypes = ['Government', 'Private', 'Deemed', 'Central', 'State'];
const affiliations = ['UGC', 'AICTE', 'NAAC', 'ICAR', 'BCI', 'MCI', 'Others'];
const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];
const countryCodes = ['+91', '+1', '+44', '+61', '+81', '+86', '+971'];
const contactTypes = ['Director', 'Examiner', 'Vice Chancellor', 'MD', 'Owner', 'Registrar', 'Other'];

export default function ProfileForm() {
  const [form, setForm] = useState({
    name: "",
    established: "",
    website: "",
    type: "",
    affiliation: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    contact: "",
    altContact: { countryCode: "", phone: "" },
    contacts: [],
    streams: "",
    students: "",
    faculty: "",
    hostel: "",
    campusArea: "",
    coursesFile: null,
    logo: null,
    brochure: null,
    images: [],
    videos: [],
    placementRate: "",
    topRecruiters: "",
    averagePackage: "",
    highestPackage: "",
    placementCellContactEmail: "",
    adminEmail: "",
    password: "",
    confirmPassword: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      if (name === "images" || name === "videos") {
        setForm((f) => ({ ...f, [name]: Array.from(files) }));
      } else {
        setForm((f) => ({ ...f, [name]: files[0] }));
      }
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  // Handle nested altContact
  const handleAltContactChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, altContact: { ...f.altContact, [name]: value } }));
  };

  // Additional contacts dynamic
  const addContact = () => {
    setForm((f) => ({
      ...f,
      contacts: [...f.contacts, { type: "", countryCode: "", name: "", email: "", phone: "" }]
    }));
  };

  const handleContactChange = (index, e) => {
    const { name, value } = e.target;
    const updatedContacts = [...form.contacts];
    updatedContacts[index][name] = value;
    setForm((f) => ({ ...f, contacts: updatedContacts }));
  };

  const removeContact = (index) => {
    const updatedContacts = form.contacts.filter((_, i) => i !== index);
    setForm((f) => ({ ...f, contacts: updatedContacts }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation and submission logic here
    console.log("Form Data:", form);
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit} noValidate>
      {/* 1. Basic Information */}
      <section>
        <h3>Basic Information</h3>
        <label>
          University Name <small>(required)</small>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter university name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Year Established
          <input
            type="date"
            name="established"
            placeholder="Select establishment date"
            value={form.established}
            onChange={handleChange}
          />
        </label>
        <label>
          Official Website
          <input
            type="url"
            name="website"
            placeholder="https://www.university.edu"
            value={form.website}
            onChange={handleChange}
          />
        </label>
        <label>
          University Type <small>(required)</small>
          <select
            name="type"
            required
            value={form.type}
            onChange={handleChange}
          >
            <option value="">Select university type</option>
            {universityTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          Affiliation
          <select
            name="affiliation"
            value={form.affiliation}
            onChange={handleChange}
          >
            <option value="">Select affiliation</option>
            {affiliations.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </label>
      </section>

      {/* 2. Location Details */}
      <section>
        <h3>Location Details</h3>
        <label>
          Address
          <input
            type="text"
            name="address"
            placeholder="Enter street address"
            value={form.address}
            onChange={handleChange}
          />
        </label>
        <label>
          City
          <input
            type="text"
            name="city"
            placeholder="Enter city name"
            value={form.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Pincode
          <input
            type="text"
            name="pincode"
            placeholder="Enter postal code"
            value={form.pincode}
            onChange={handleChange}
          />
        </label>
        <label>
          State
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
          >
            <option value="">Select state</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
      </section>

      {/* 3. Contact Information */}
      <section>
        <h3>Contact Information</h3>
        <label>
          Contact Email / Phone
          <input
            type="text"
            name="contact"
            placeholder="Enter primary contact"
            value={form.contact}
            onChange={handleChange}
          />
        </label>

        <label>
          Alternate Contact Country Code
          <select
            name="countryCode"
            value={form.altContact.countryCode}
            onChange={handleAltContactChange}
          >
            <option value="">Select country code</option>
            {countryCodes.map((cc) => (
              <option key={cc} value={cc}>{cc}</option>
            ))}
          </select>
        </label>

        <label>
          Alternate Contact Phone
          <input
            type="text"
            name="phone"
            placeholder="Enter alternate contact"
            value={form.altContact.phone}
            onChange={handleAltContactChange}
          />
        </label>

        {/* Dynamic Additional Contacts */}
        <div className="additional-contacts">
          <h4>Additional Contacts</h4>
          {form.contacts.map((contact, idx) => (
            <div key={idx} className="additional-contact">
              <label>
                Contact Type
                <select
                  name="type"
                  value={contact.type}
                  onChange={(e) => handleContactChange(idx, e)}
                >
                  <option value="">Select contact type</option>
                  {contactTypes.map((ct) => (
                    <option key={ct} value={ct}>{ct}</option>
                  ))}
                </select>
              </label>
              <label>
                Country Code
                <select
                  name="countryCode"
                  value={contact.countryCode}
                  onChange={(e) => handleContactChange(idx, e)}
                >
                  <option value="">Select country code</option>
                  {countryCodes.map((cc) => (
                    <option key={cc} value={cc}>{cc}</option>
                  ))}
                </select>
              </label>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={contact.name}
                  onChange={(e) => handleContactChange(idx, e)}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={contact.email}
                  onChange={(e) => handleContactChange(idx, e)}
                />
              </label>
              <label>
                Phone
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={contact.phone}
                  onChange={(e) => handleContactChange(idx, e)}
                />
              </label>
              <button
                type="button"
                className="remove-contact"
                onClick={() => removeContact(idx)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addContact} className="add-contact-btn">
            + Add Contact
          </button>
        </div>
      </section>

      {/* 4. Academic Details */}
      <section>
        <h3>Academic Details</h3>
        <label>
          Popular Streams
          <input
            type="text"
            name="streams"
            placeholder="e.g., Engineering, Arts"
            value={form.streams}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Students
          <input
            type="number"
            name="students"
            placeholder="Enter number of students"
            value={form.students}
            onChange={handleChange}
          />
        </label>
        <label>
          Total Faculty
          <input
            type="number"
            name="faculty"
            placeholder="Enter number of faculty"
            value={form.faculty}
            onChange={handleChange}
          />
        </label>
        <label>
          Hostel Available
          <input
            type="text"
            name="hostel"
            placeholder="Yes / No"
            value={form.hostel}
            onChange={handleChange}
          />
        </label>
        <label>
          Campus Area (in acres)
          <input
            type="number"
            name="campusArea"
            placeholder="Enter area in acres"
            value={form.campusArea}
            onChange={handleChange}
          />
        </label>
        <label>
          Courses Excel File
          <input
            type="file"
            name="coursesFile"
            accept=".xls,.xlsx"
            onChange={handleChange}
          />
        </label>
      </section>

      {/* 5. Media */}
      <section>
        <h3>Media</h3>
        <label>
          Logo Upload
          <input
            type="file"
            name="logo"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </label>
        <label>
          Brochure Upload
          <input
            type="file"
            name="brochure"
            accept="application/pdf"
            onChange={handleChange}
          />
        </label>
        <label>
          Images Upload
          <input
            type="file"
            name="images"
            accept="image/png, image/jpeg"
            multiple
            onChange={handleChange}
          />
        </label>
        <label>
          Videos Upload
          <input
            type="file"
            name="videos"
            accept="video/mp4"
            multiple
            onChange={handleChange}
          />
        </label>
      </section>

      {/* 6. Placement & Career Services */}
      <section>
        <h3>Placement & Career Services</h3>
        <label>
          Placement Rate (%)
          <input
            type="number"
            name="placementRate"
            placeholder="Enter placement rate (e.g., 85)"
            value={form.placementRate}
            onChange={handleChange}
          />
        </label>
        <label>
          Top Recruiters
          <input
            type="text"
            name="topRecruiters"
            placeholder="e.g., Google, Microsoft, TCS"
            value={form.topRecruiters}
            onChange={handleChange}
          />
        </label>
        <label>
          Average Package
          <input
            type="text"
            name="averagePackage"
            placeholder="e.g., 10 LPA or $50,000"
            value={form.averagePackage}
            onChange={handleChange}
          />
        </label>
        <label>
          Highest Package
          <input
            type="text"
            name="highestPackage"
            placeholder="e.g., 20 LPA or $100,000"
            value={form.highestPackage}
            onChange={handleChange}
          />
        </label>
        <label>
          Placement Cell Contact Email
          <input
            type="email"
            name="placementCellContactEmail"
            placeholder="Enter placement cell email"
            value={form.placementCellContactEmail}
            onChange={handleChange}
          />
        </label>
      </section>

      {/* 7. Admin Credentials */}
      <section>
        <h3>Admin Credentials</h3>
        <label>
          Admin Login Email <small>(required)</small>
          <input
            type="email"
            name="adminEmail"
            required
            placeholder="Enter admin email"
            value={form.adminEmail}
            onChange={handleChange}
          />
        </label>
        <label>
          Password <small>(required)</small>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password <small>(required)</small>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </label>
      </section>

      {/* 8. About University */}
      <section>
        <h3>About University</h3>
        <label>
          Brief Description
          <textarea
            name="about"
            placeholder="Provide a brief description of the university..."
            rows="5"
            value={form.about}
            onChange={handleChange}
          />
        </label>
      </section>

      <button type="submit" className="ud-btn">Save Profile</button>
    </form>
  );
}
