import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUniversity, faMapMarkerAlt, faPhone, faGraduationCap, faImage, faUserShield,
  faInfoCircle, faSpinner, faUpload, faTimes, faBriefcase, faQuestionCircle,
  faLink, faCalendarAlt, faTrophy, faBuilding, faCity, faMapPin, faFileExcel,
  faMoneyBillWave, faGlobe, faAward
} from '@fortawesome/free-solid-svg-icons';

const FormInput = ({ label, name, value, onChange, onBlur, type = 'text', placeholder, required, error, maxLength, tooltip, id, icon }) => (
  <div className="relative">
    <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-800 flex items-center">
      <FontAwesomeIcon icon={icon} className="mr-2 text-blue-500 h-4 w-4" />
      {label}
      {required && <span className="ml-1 text-red-500">*</span>}
      {tooltip && (
        <span className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" title={tooltip}>
          <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
        </span>
      )}
    </label>
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      className={`w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${error ? 'border-red-500' : ''}`}
    />
    {maxLength && (
      <p className="text-xs text-gray-500 mt-1">{value.length}/{maxLength}</p>
    )}
    {error && <p id={`${id}-error`} className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const SelectInput = ({ label, name, value, onChange, onBlur, options, placeholder, required, error, tooltip, id, icon }) => (
  <div className="relative">
    <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-800 flex items-center">
      <FontAwesomeIcon icon={icon} className="mr-2 text-blue-500 h-4 w-4" />
      {label}
      {required && <span className="ml-1 text-red-500">*</span>}
      {tooltip && (
        <span className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" title={tooltip}>
          <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
        </span>
      )}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${error ? 'border-red-500' : ''}`}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    {error && <p id={`${id}-error`} className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const TextAreaInput = ({ label, name, value, onChange, onBlur, placeholder, maxLength, error, tooltip, id, icon, rows = 4 }) => (
  <div>
    <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-800 flex items-center">
      <FontAwesomeIcon icon={icon} className="mr-2 text-blue-500 h-4 w-4" />
      {label}
      {tooltip && (
        <span className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" title={tooltip}>
          <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
        </span>
      )}
    </label>
    <textarea
      id={id}
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      maxLength={maxLength}
      className={`w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${error ? 'border-red-500' : ''}`}
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
    />
    <p className="text-xs text-gray-500 mt-1">{value?.length || 0}/{maxLength}</p>
    {error && <p id={`${id}-error`} className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const FileInput = ({ label, name, onChange, onBlur, accept, multiple, tooltip, error, id, icon, selectedFile }) => (
  <div>
    <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-800 flex items-center">
      <FontAwesomeIcon icon={icon} className="mr-2 text-blue-500 h-4 w-4" />
      {label}
      {tooltip && (
        <span className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" title={tooltip}>
          <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
        </span>
      )}
    </label>
    <div className="flex items-center">
      <input
        id={id}
        type="file"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        accept={accept}
        multiple={multiple}
        className={`w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${error ? 'border-red-500' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      <FontAwesomeIcon icon={faUpload} className="ml-2 text-blue-500 h-4 w-4" />
    </div>
    {selectedFile && <p className="text-xs text-gray-500 mt-1">Selected: {selectedFile.name}</p>}
    {error && <p id={`${id}-error`} className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const SectionHeader = ({ title, icon, completion }) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold text-gray-800 flex items-center">
      <FontAwesomeIcon icon={icon} className="mr-2 text-blue-500" />
      {title}
    </h3>
    <span className="text-sm text-gray-500">Completion: {completion}%</span>
  </div>
);

const BasicInfoSection = ({ formData, handleChange, handleBlur, errors, universityTypes, affiliations }) => {
  const fields = [
    { label: 'University Name', name: 'name', type: 'text', required: true, placeholder: 'Enter university name', tooltip: 'Official name of the university', maxLength: 100, icon: faUniversity },
    { label: 'University Type', name: 'type', type: 'select', options: universityTypes, required: true, placeholder: 'Select university type', tooltip: 'Type of university (e.g., Government, Private)', icon: faBuilding },
    { label: 'Affiliation', name: 'affiliation', type: 'select', options: affiliations, placeholder: 'Select affiliation', tooltip: 'Recognized affiliations like UGC, AICTE', icon: faAward },
    { label: 'Year Established', name: 'established', type: 'date', placeholder: 'Select establishment date', tooltip: 'Year the university was founded', icon: faCalendarAlt },
    { label: 'Official Website', name: 'website', type: 'url', placeholder: 'https://www.university.edu', tooltip: 'Official website URL', maxLength: 200, icon: faLink },
    { label: 'NAAC Grade & Score', name: 'naacGrade', type: 'text', placeholder: 'e.g., A++ (3.75/4)', tooltip: 'NAAC accreditation grade and score', maxLength: 50, icon: faTrophy },
    { label: 'NIRF Ranking', name: 'nirfRanking', type: 'number', placeholder: 'Enter NIRF rank', tooltip: 'National Institutional Ranking Framework rank', icon: faTrophy },
    { label: 'Accreditation Valid Until', name: 'accreditationValidUntil', type: 'date', placeholder: 'Select date', tooltip: 'Date until accreditation is valid', icon: faCalendarAlt },
  ];

  const completedFields = fields.filter(field => formData[field.name] && formData[field.name].toString().trim() !== '').length;
  const completionPercentage = Math.round((completedFields / fields.length) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <SectionHeader title="Basic Information" icon={faUniversity} completion={completionPercentage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name}>
            {field.type === 'select' ? (
              <SelectInput
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                options={field.options}
                placeholder={field.placeholder}
                required={field.required}
                error={errors[field.name]}
                tooltip={field.tooltip}
                id={`basic-${field.name}`}
                icon={field.icon}
              />
            ) : (
              <FormInput
                label={field.label}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                error={errors[field.name]}
                maxLength={field.maxLength}
                tooltip={field.tooltip}
                id={`basic-${field.name}`}
                icon={field.icon}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const LocationSection = ({ formData, handleChange, handleBlur, errors, states }) => {
  const fields = [
    { label: 'Address', name: 'address', type: 'text', placeholder: 'Enter street address', tooltip: 'Full street address of the university', maxLength: 200, icon: faMapMarkerAlt },
    { label: 'City', name: 'city', type: 'text', placeholder: 'Enter city name', tooltip: 'City where the university is located', maxLength: 50, icon: faCity },
    { label: 'State', name: 'state', type: 'select', options: states, placeholder: 'Select state', tooltip: 'State where the university is located', icon: faMapPin },
    { label: 'Pincode', name: 'pincode', type: 'text', placeholder: 'Enter postal code', tooltip: 'Postal code of the university location', maxLength: 10, icon: faMapPin },
  ];

  const completedFields = fields.filter(field => formData[field.name] && formData[field.name].trim() !== '').length;
  const completionPercentage = Math.round((completedFields / fields.length) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <SectionHeader title="Location Details" icon={faMapMarkerAlt} completion={completionPercentage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name}>
            {field.type === 'select' ? (
              <SelectInput
                label={field.label}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                options={field.options}
                placeholder={field.placeholder}
                error={errors[field.name]}
                tooltip={field.tooltip}
                id={`location-${field.name}`}
                icon={field.icon}
              />
            ) : (
              <FormInput
                label={field.label}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                type={field.type}
                placeholder={field.placeholder}
                error={errors[field.name]}
                maxLength={field.maxLength}
                tooltip={field.tooltip}
                id={`location-${field.name}`}
                icon={field.icon}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactSection = ({ formData, handleChange, handleAltContactChange, handleBlur, addContact, removeContact, errors, countryCodes, contactTypes }) => {
  const fields = [
    { label: 'Primary Contact', name: 'contact', type: 'text', placeholder: 'Enter email or phone', tooltip: 'Primary contact for general inquiries', maxLength: 100, icon: faPhone },
    {
      label: 'Alternate Contact', name: 'altContact', customRender: () => (
        <div className="relative">
          <label htmlFor="altContact" className="mb-1 block text-sm font-medium text-gray-800 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500 h-4 w-4" />
            Alternate Contact
            <span className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" title="Alternate contact number with country code">
              <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
            </span>
          </label>
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.altContact.countryCode}
              onChange={handleAltContactChange}
              onBlur={handleBlur}
              className={`w-1/3 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${errors.altContact ? 'border-red-500' : ''}`}
              aria-describedby={errors.altContact ? 'altContact-error' : undefined}
            >
              {countryCodes.map((code) => (
                <option key={code} value={code}>{code}</option>
              ))}
            </select>
            <input
              id="altContact"
              type="text"
              name="phone"
              value={formData.altContact.phone}
              onChange={handleAltContactChange}
              onBlur={handleBlur}
              placeholder="Enter alternate contact"
              className={`w-2/3 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${errors.altContact ? 'border-red-500' : ''}`}
              maxLength={15}
              aria-invalid={!!errors.altContact}
              aria-describedby={errors.altContact ? 'altContact-error' : undefined}
            />
          </div>
          {errors.altContact && <p id="altContact-error" className="text-xs text-red-500 mt-1">{errors.altContact}</p>}
        </div>
      )
    },
  ];

  const completedFields = fields.filter(field => !field.customRender && formData[field.name] && formData[field.name].trim() !== '').length +
    (formData.altContact.phone && formData.altContact.phone.trim() !== '' ? 1 : 0);
  const completionPercentage = Math.round((completedFields / fields.length) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <SectionHeader title="Contact Information" icon={faPhone} completion={completionPercentage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name}>
            {field.customRender ? field.customRender() : (
              <FormInput
                label={field.label}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                type={field.type}
                placeholder={field.placeholder}
                error={errors[field.name]}
                maxLength={field.maxLength}
                tooltip={field.tooltip}
                id={`contact-${field.name}`}
                icon={field.icon}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h4 className="text-base font-medium text-gray-800 mb-4">Additional Contacts</h4>
        {formData.contacts.map((contact, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row gap-4 mb-4 p-4 bg-gray-50 rounded-md">
            <SelectInput
              label="Contact Type"
              name="type"
              value={contact.type}
              onChange={(e) => handleChange(e, idx)}
              onBlur={handleBlur}
              options={contactTypes}
              placeholder="Select contact type"
              tooltip="Type of contact person"
              id={`contact-type-${idx}`}
              icon={faUserShield}
            />
            <FormInput
              label="Name"
              name="name"
              value={contact.name}
              onChange={(e) => handleChange(e, idx)}
              onBlur={handleBlur}
              placeholder="Enter name"
              maxLength={50}
              tooltip="Name of the contact person"
              id={`contact-name-${idx}`}
              icon={faUserShield}
            />
            <FormInput
              label="Email"
              name="email"
              value={contact.email}
              onChange={(e) => handleChange(e, idx)}
              onBlur={handleBlur}
              placeholder="Enter email"
              maxLength={100}
              tooltip="Email address of the contact person"
              id={`contact-email-${idx}`}
              icon={faPhone}
            />
            <div className="flex-1">
              <label htmlFor={`contact-phone-${idx}`} className="mb-1 block text-sm font-medium text-gray-800 flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-500 h-4 w-4" />
                Phone
                <span className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" title="Phone number with country code">
                  <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
                </span>
              </label>
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={contact.countryCode}
                  onChange={(e) => handleChange(e, idx)}
                  onBlur={handleBlur}
                  className="w-1/3 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
                <input
                  id={`contact-phone-${idx}`}
                  type="text"
                  name="phone"
                  value={contact.phone}
                  onChange={(e) => handleChange(e, idx)}
                  onBlur={handleBlur}
                  placeholder="Enter phone number"
                  className="w-2/3 px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  maxLength={15}
                />
              </div>
            </div>
            {formData.contacts.length > 1 && (
              <button
                type="button"
                onClick={() => removeContact(idx)}
                className="text-red-500 hover:text-red-600 transition-colors p-2 self-end sm:self-center"
                aria-label="Remove contact"
              >
                <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addContact}
          className="mt-2 text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
          aria-label="Add another contact"
        >
          + Add Contact
        </button>
      </div>
    </div>
  );
};

const AcademicSection = ({ formData, handleChange, handleBlur, errors, setFormData }) => {
  const facilities = ['Library', 'Sports', 'Labs', 'Wi-Fi', 'Cafeteria', 'Hostel', 'Gym', 'Medical Center'];
  const fields = [
    { label: 'Popular Streams', name: 'streams', type: 'text', placeholder: 'e.g., Engineering, Arts', tooltip: 'Major academic streams offered', maxLength: 200, icon: faGraduationCap },
    { label: 'Total Students', name: 'students', type: 'number', placeholder: 'Enter number of students', tooltip: 'Total enrolled students', icon: faGraduationCap },
    { label: 'Total Faculty', name: 'faculty', type: 'number', placeholder: 'Enter number of faculty', tooltip: 'Total faculty members', icon: faGraduationCap },
    { label: 'Hostel Available', name: 'hostel', type: 'text', placeholder: 'Yes / No', tooltip: 'Availability of hostel facilities', maxLength: 10, icon: faBuilding },
    { label: 'Campus Area (acres)', name: 'campusArea', type: 'number', placeholder: 'Enter area in acres', tooltip: 'Campus size in acres', icon: faBuilding },
    { label: 'Annual Fees Range', name: 'annualFees', type: 'text', placeholder: 'e.g., ₹1L - ₹5L', tooltip: 'Range of annual tuition fees', maxLength: 50, icon: faMoneyBillWave },
    { label: 'International Collaborations', name: 'internationalCollaborations', type: 'text', placeholder: 'e.g., MIT, Oxford', tooltip: 'List of international partner universities', maxLength: 200, icon: faGlobe },
    { label: 'Scholarship Details', name: 'scholarships', type: 'textarea', placeholder: 'Describe available scholarships...', tooltip: 'Details of scholarships offered', maxLength: 500, icon: faAward },
    { label: 'Admission Process', name: 'admissionProcess', type: 'textarea', placeholder: 'Describe admission process...', tooltip: 'Steps for admission', maxLength: 500, icon: faGraduationCap },
    { label: 'Entrance Exams Accepted', name: 'entranceExams', type: 'text', placeholder: 'e.g., JEE, NEET', tooltip: 'List of accepted entrance exams', maxLength: 200, icon: faGraduationCap },
    { label: 'Courses Excel File', name: 'coursesFile', type: 'file', accept: '.xls,.xlsx', tooltip: 'Upload an Excel file with course details', icon: faFileExcel },
    { label: 'Download Sample Excel', name: 'sampleExcel', type: 'download', href: '/sample-courses.xlsx', text: 'Download Sample Excel', tooltip: 'Download sample Excel template', icon: faFileExcel },
  ];

  const completedFields = fields.filter(field => field.type !== 'download' && formData[field.name] && (field.type !== 'file' ? formData[field.name].toString().trim() !== '' : true)).length;
  const completionPercentage = Math.round((completedFields / (fields.length - 1)) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <SectionHeader title="Academic Details" icon={faGraduationCap} completion={completionPercentage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name}>
            {field.type === 'file' ? (
              <FileInput
                label={field.label}
                name={field.name}
                onChange={handleChange}
                onBlur={handleBlur}
                accept={field.accept}
                tooltip={field.tooltip}
                error={errors[field.name]}
                id={`academic-${field.name}`}
                icon={field.icon}
                selectedFile={formData[field.name]}
              />
            ) : field.type === 'download' ? (
              <div className="border border-gray-300 rounded-md p-4">
                <label className="mb-1 block text-sm font-medium text-gray-800 flex items-center">
                  <FontAwesomeIcon icon={field.icon} className="mr-2 text-blue-500 h-4 w-4" />
                  {field.label}
                  <span className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" title={field.tooltip}>
                    <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
                  </span>
                </label>
                <a
                  href={field.href}
                  download
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                  aria-label="Download sample Excel template"
                >
                  {field.text}
                </a>
              </div>
            ) : field.type === 'textarea' ? (
              <TextAreaInput
                label={field.label}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                error={errors[field.name]}
                tooltip={field.tooltip}
                id={`academic-${field.name}`}
                icon={field.icon}
              />
            ) : (
              <FormInput
                label={field.label}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                type={field.type}
                placeholder={field.placeholder}
                error={errors[field.name]}
                maxLength={field.maxLength}
                tooltip={field.tooltip}
                id={`academic-${field.name}`}
                icon={field.icon}
              />
            )}
          </div>
        ))}
        <div className="col-span-1 sm:col-span-2">
          <label className="mb-1 block text-sm font-medium text-gray-800 flex items-center">
            <FontAwesomeIcon icon={faBuilding} className="mr-2 text-blue-500 h-4 w-4" />
            Facilities Available
            <span className="ml-2 text-gray-400 hover:text-gray-600 transition-colors" title="Select available campus facilities">
              <FontAwesomeIcon icon={faQuestionCircle} className="h-4 w-4" />
            </span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
            {facilities.map((facility) => (
              <label key={facility} className="flex items-center">
                <input
                  type="checkbox"
                  name="facilities"
                  value={facility}
                  checked={formData.facilities?.includes(facility)}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      facilities: prev.facilities?.includes(value)
                        ? prev.facilities.filter((f) => f !== value)
                        : [...(prev.facilities || []), value],
                    }));
                  }}
                  className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                  aria-label={`Select ${facility} facility`}
                />
                <span className="text-sm text-gray-700">{facility}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MediaUploadSection = ({ formData, handleChange, handleBlur, imagePreviews, setImagePreviews, videoPreviews, setVideoPreviews, removeImage, removeVideo, errors }) => {
  const fields = [
    { label: 'Logo Upload', name: 'logo', type: 'file', accept: 'image/png,image/jpeg', tooltip: 'Upload university logo (PNG/JPEG, max 2MB)', icon: faImage },
    { label: 'Brochure Upload', name: 'brochure', type: 'file', accept: 'application/pdf', tooltip: 'Upload university brochure (PDF, max 5MB)', icon: faFileExcel },
    { label: 'Images Upload', name: 'images', type: 'file', multiple: true, accept: 'image/png,image/jpeg', tooltip: 'Upload multiple campus images (PNG/JPEG, max 2MB each)', icon: faImage },
    { label: 'Videos Upload', name: 'videos', type: 'file', multiple: true, accept: 'video/mp4', tooltip: 'Upload campus videos (MP4, max 10MB each)', icon: faImage },
  ];

  const completedFields = fields.filter(field => formData[field.name] && (field.multiple ? formData[field.name].length > 0 : true)).length;
  const completionPercentage = Math.round((completedFields / fields.length) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <SectionHeader title="Media Uploads" icon={faImage} completion={completionPercentage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <FileInput
            key={field.name}
            label={field.label}
            name={field.name}
            onChange={handleChange}
            onBlur={handleBlur}
            accept={field.accept}
            multiple={field.multiple}
            tooltip={field.tooltip}
            error={errors[field.name]}
            id={`media-${field.name}`}
            icon={field.icon}
            selectedFile={formData[field.name]}
          />
        ))}
      </div>
      {(imagePreviews.length > 0 || videoPreviews.length > 0) && (
        <div className="mt-6">
          <h4 className="text-base font-medium text-gray-800 mb-4">Uploaded Media</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {imagePreviews.map((preview, idx) => (
              <div key={`image-${idx}`} className="relative bg-white rounded-md shadow-sm overflow-hidden group">
                <img src={preview} alt={`Image preview ${idx + 1}`} className="w-full h-24 object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(idx)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-label={`Remove image ${idx + 1}`}
                >
                  <FontAwesomeIcon icon={faTimes} className="h-3 w-3" />
                </button>
              </div>
            ))}
            {videoPreviews.map((preview, idx) => (
              <div key={`video-${idx}`} className="relative bg-white rounded-md shadow-sm overflow-hidden group">
                <video src={preview} controls className="w-full h-24 object-cover" aria-label={`Video preview ${idx + 1}`} />
                <button
                  type="button"
                  onClick={() => removeVideo(idx)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  aria-label={`Remove video ${idx + 1}`}
                >
                  <FontAwesomeIcon icon={faTimes} className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PlacementSection = ({ formData, handleChange, handleBlur, errors }) => {
  const fields = [
    { label: 'Placement Rate (%)', name: 'placementRate', type: 'number', placeholder: 'Enter placement rate (e.g., 85)', tooltip: 'Percentage of students placed annually', icon: faBriefcase },
    { label: 'Top Recruiters', name: 'topRecruiters', type: 'text', placeholder: 'e.g., Google, Microsoft, TCS', tooltip: 'Major companies recruiting from campus', maxLength: 200, icon: faBriefcase },
    { label: 'Average Package', name: 'averagePackage', type: 'text', placeholder: 'e.g., 10 LPA or $50,000', tooltip: 'Average salary package offered', maxLength: 50, icon: faMoneyBillWave },
    { label: 'Highest Package', name: 'highestPackage', type: 'text', placeholder: 'e.g., 20 LPA or $100,000', tooltip: 'Highest salary package offered', maxLength: 50, icon: faMoneyBillWave },
    { label: 'Placement Cell Email', name: 'placementCellContactEmail', type: 'email', placeholder: 'Enter placement cell email', tooltip: 'Email for placement inquiries', maxLength: 100, icon: faPhone },
  ];

  const completedFields = fields.filter(field => formData[field.name] && formData[field.name].toString().trim() !== '').length;
  const completionPercentage = Math.round((completedFields / fields.length) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <SectionHeader title="Placement & Career Services" icon={faBriefcase} completion={completionPercentage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <FormInput
            key={field.name}
            label={field.label}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            type={field.type}
            placeholder={field.placeholder}
            error={errors[field.name]}
            maxLength={field.maxLength}
            tooltip={field.tooltip}
            id={`placement-${field.name}`}
            icon={field.icon}
          />
        ))}
      </div>
    </div>
  );
};

const AdminSection = ({ formData, handleChange, handleBlur, errors }) => {
  const fields = [
    { label: 'Admin Login Email', name: 'adminEmail', type: 'email', required: true, placeholder: 'Enter admin email', tooltip: 'Email for admin login', maxLength: 100, icon: faUserShield },
    { label: 'Password', name: 'password', type: 'password', required: true, placeholder: 'Enter password', tooltip: 'Password for admin login', maxLength: 50, icon: faUserShield },
    { label: 'Confirm Password', name: 'confirmPassword', type: 'password', required: true, placeholder: 'Confirm password', tooltip: 'Re-enter password to confirm', maxLength: 50, icon: faUserShield },
  ];

  const completedFields = fields.filter(field => formData[field.name] && formData[field.name].trim() !== '').length;
  const completionPercentage = Math.round((completedFields / fields.length) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <SectionHeader title="Admin Credentials" icon={faUserShield} completion={completionPercentage} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fields.map((field) => (
          <FormInput
            key={field.name}
            label={field.label}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            error={errors[field.name]}
            maxLength={field.maxLength}
            tooltip={field.tooltip}
            id={`admin-${field.name}`}
            icon={field.icon}
          />
        ))}
      </div>
    </div>
  );
};

const AboutSection = ({ formData, handleChange, handleBlur, errors }) => {
  const completedFields = formData.about && formData.about.trim() !== '' ? 1 : 0;
  const completionPercentage = completedFields * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <SectionHeader title="About University" icon={faInfoCircle} completion={completionPercentage} />
      <TextAreaInput
        label="Brief Description"
        name="about"
        value={formData.about}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Provide a brief description of the university..."
        maxLength={1000}
        error={errors.about}
        tooltip="Brief overview of the university"
        id="about-university"
        icon={faInfoCircle}
      />
    </div>
  );
};

const UniversityRegister = () => {
  const [formData, setFormData] = useState({
    name: '', type: '', affiliation: '', established: '', website: '', naacGrade: '', nirfRanking: '', accreditationValidUntil: '',
    address: '', city: '', state: '', pincode: '',
    contact: '', altContact: { countryCode: '+91', phone: '' },
    contacts: [{ type: 'registrar', name: '', email: '', phone: '', countryCode: '+91' }],
    streams: '', students: '', faculty: '', hostel: '', campusArea: '', annualFees: '',
    internationalCollaborations: '', scholarships: '', admissionProcess: '', entranceExams: '', coursesFile: null, facilities: [],
    logo: null, brochure: null, images: [], videos: [],
    placementRate: '', topRecruiters: '', averagePackage: '', highestPackage: '', placementCellContactEmail: '',
    adminEmail: '', password: '', confirmPassword: '',
    about: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const universityTypes = ['Government', 'Private', 'Deemed', 'Central', 'State'];
  const affiliations = ['UGC', 'AICTE', 'NAAC', 'ICAR', 'BCI', 'MCI', 'Others'];
  const states = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];
  const countryCodes = ['+91', '+1', '+44', '+61', '+81', '+86', '+971'];
  const contactTypes = ['Director', 'Examiner', 'Vice Chancellor', 'MD', 'Owner', 'Registrar', 'Other'];
  const requiredFields = ['name', 'type', 'adminEmail', 'password', 'confirmPassword'];

  const steps = [
    { title: 'Basic Information', component: BasicInfoSection },
    { title: 'Location Details', component: LocationSection },
    { title: 'Contact Information', component: ContactSection },
    { title: 'Academic Details', component: AcademicSection },
    { title: 'Media Uploads', component: MediaUploadSection },
    { title: 'Placement & Career Services', component: PlacementSection },
    { title: 'Admin Credentials', component: AdminSection },
    { title: 'About University', component: AboutSection },
  ];

  const progress = useMemo(() => {
    const filledFields = requiredFields.filter(
      (field) => formData[field] && formData[field].trim() !== ''
    ).length;
    return Math.round((filledFields / requiredFields.length) * 100);
  }, [formData]);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'University name is required';
        break;
      case 'type':
        if (!value) error = 'University type is required';
        break;
      case 'website':
        if (value && !/^https?:\/\/.+/.test(value)) error = 'Invalid URL format';
        break;
      case 'adminEmail':
        if (!value.trim()) error = 'Admin email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 8) error = 'Password must be at least 8 characters';
        break;
      case 'confirmPassword':
        if (value !== formData.password) error = 'Passwords do not match';
        break;
      case 'contact':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$|^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/.test(value)) error = 'Invalid email or phone format';
        break;
      case 'altContact.phone':
        if (value && !/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/.test(value)) error = 'Invalid phone number';
        break;
      case 'placementCellContactEmail':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
        break;
      case 'about':
        if (value.length > 1000) error = 'Description cannot exceed 1000 characters';
        break;
      case 'logo':
        if (value && !['image/png', 'image/jpeg', 'image/jpg'].includes(value.type)) error = 'Logo must be PNG or JPEG';
        else if (value && value.size > 2 * 1024 * 1024) error = 'Logo must be under 2MB';
        break;
      case 'brochure':
        if (value && value.type !== 'application/pdf') error = 'Brochure must be PDF';
        else if (value && value.size > 5 * 1024 * 1024) error = 'Brochure must be under 5MB';
        break;
      case 'coursesFile':
        if (value && !['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(value.type)) error = 'Courses file must be Excel';
        else if (value && value.size > 5 * 1024 * 1024) error = 'Courses file must be under 5MB';
        break;
      case 'images':
        if (value) {
          const invalid = value.find(file => !['image/png', 'image/jpeg', 'image/jpg'].includes(file.type) || file.size > 2 * 1024 * 1024);
          if (invalid) error = 'Images must be PNG/JPEG and under 2MB each';
        }
        break;
      case 'videos':
        if (value) {
          const invalid = value.find(file => file.type !== 'video/mp4' || file.size > 10 * 1024 * 1024);
          if (invalid) error = 'Videos must be MP4 and under 10MB each';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const validateForm = () => {
    const newErrors = {};
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });
    if (formData.website) newErrors.website = validateField('website', formData.website);
    if (formData.contact) newErrors.contact = validateField('contact', formData.contact);
    if (formData.altContact.phone) newErrors.altContact = validateField('altContact.phone', formData.altContact.phone);
    if (formData.placementCellContactEmail) newErrors.placementCellContactEmail = validateField('placementCellContactEmail', formData.placementCellContactEmail);
    if (formData.about) newErrors.about = validateField('about', formData.about);
    if (formData.logo) newErrors.logo = validateField('logo', formData.logo);
    if (formData.brochure) newErrors.brochure = validateField('brochure', formData.brochure);
    if (formData.coursesFile) newErrors.coursesFile = validateField('coursesFile', formData.coursesFile);
    if (formData.images.length > 0) newErrors.images = validateField('images', formData.images);
    if (formData.videos.length > 0) newErrors.videos = validateField('videos', formData.videos);
    formData.contacts.forEach((contact, index) => {
      if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
        newErrors[`contactEmail${index}`] = 'Invalid email format';
      }
      if (contact.phone && !/^[0-9]{7,15}$/.test(contact.phone)) {
        newErrors[`contactPhone${index}`] = 'Invalid phone number';
      }
    });
    return newErrors;
  };

  const handleChange = (e, index = null) => {
    const { name, value, files } = e.target;
    let newFormData = { ...formData };
    let newErrors = { ...errors };

    if (files) {
      if (name === 'images') {
        const newImages = Array.from(files);
        newFormData.images = [...newFormData.images, ...newImages];
        setImagePreviews((prev) => [...prev, ...newImages.map(file => URL.createObjectURL(file))]);
        newErrors.images = validateField('images', newImages);
      } else if (name === 'videos') {
        const newVideos = Array.from(files);
        newFormData.videos = [...newFormData.videos, ...newVideos];
        setVideoPreviews((prev) => [...prev, ...newVideos.map(file => URL.createObjectURL(file))]);
        newErrors.videos = validateField('videos', newVideos);
      } else {
        newFormData[name] = files[0];
        newErrors[name] = validateField(name, files[0]);
      }
    } else if (index !== null) {
      newFormData.contacts = [...newFormData.contacts];
      newFormData.contacts[index] = { ...newFormData.contacts[index], [name]: value };
      if (name === 'email') newErrors[`contactEmail${index}`] = validateField('contactEmail', value);
      if (name === 'phone') newErrors[`contactPhone${index}`] = validateField('contactPhone', value);
    } else {
      newFormData[name] = value;
      newErrors[name] = validateField(name, value);
    }

    setFormData(newFormData);
    setErrors(newErrors);
  };

  const handleAltContactChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      altContact: { ...prev.altContact, [name]: value },
    }));
    setErrors((prev) => ({
      ...prev,
      altContact: validateField('altContact.phone', name === 'phone' ? value : formData.altContact.phone),
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const addContact = () => {
    setFormData((prev) => ({
      ...prev,
      contacts: [...prev.contacts, { type: '', name: '', email: '', phone: '', countryCode: '+91' }],
    }));
  };

  const removeContact = (index) => {
    setFormData((prev) => ({
      ...prev,
      contacts: prev.contacts.filter((_, i) => i !== index),
    }));
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[`contactEmail${index}`];
      delete newErrors[`contactPhone${index}`];
      return newErrors;
    });
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => ({ ...prev, images: validateField('images', formData.images.filter((_, i) => i !== index)) }));
  };

  const removeVideo = (index) => {
    setFormData((prev) => ({
      ...prev,
      videos: prev.videos.filter((_, i) => i !== index),
    }));
    setVideoPreviews((prev) => prev.filter((_, i) => i !== index));
    setErrors((prev) => ({ ...prev, videos: validateField('videos', formData.videos.filter((_, i) => i !== index)) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      alert('Please fix the errors in the form before submitting.');
      return;
    }

    setIsSubmitting(true);
    try {
      const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

      const newUniversity = {
        id: Date.now(),
        ...formData,
        logo: formData.logo ? await fileToBase64(formData.logo) : null,
        brochure: formData.brochure ? await fileToBase64(formData.brochure) : null,
        images: await Promise.all(formData.images.map(fileToBase64)),
        videos: await Promise.all(formData.videos.map(fileToBase64)),
      };

      const existingUniversities = JSON.parse(localStorage.getItem('universities')) || [];
      existingUniversities.push(newUniversity);
      localStorage.setItem('universities', JSON.stringify(existingUniversities));

      alert('University registered successfully!');
      setFormData({
        name: '', type: '', affiliation: '', established: '', website: '', naacGrade: '', nirfRanking: '', accreditationValidUntil: '',
        address: '', city: '', state: '', pincode: '',
        contact: '', altContact: { countryCode: '+91', phone: '' },
        contacts: [{ type: 'registrar', name: '', email: '', phone: '', countryCode: '+91' }],
        streams: '', students: '', faculty: '', hostel: '', campusArea: '', annualFees: '',
        internationalCollaborations: '', scholarships: '', admissionProcess: '', entranceExams: '', coursesFile: null, facilities: [],
        logo: null, brochure: null, images: [], videos: [],
        placementRate: '', topRecruiters: '', averagePackage: '', highestPackage: '', placementCellContactEmail: '',
        adminEmail: '', password: '', confirmPassword: '',
        about: '',
      });
      setImagePreviews([]);
      setVideoPreviews([]);
      setErrors({});
      setCurrentStep(0);
    } catch (error) {
      alert('Error submitting registration.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = () => {
    const formErrors = validateForm();
    const stepFields = steps[currentStep].component === BasicInfoSection ? ['name', 'type'] :
                      steps[currentStep].component === AdminSection ? ['adminEmail', 'password', 'confirmPassword'] : [];
    if (stepFields.some(field => formErrors[field])) {
      setErrors(formErrors);
      return;
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="relative mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center" aria-label="University Registration Form">
            University Registration
          </h2>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
              <circle className="text-gray-200" strokeWidth="8" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
              <circle
                className="text-blue-500"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="45"
                cx="50"
                cy="50"
                strokeDasharray="283"
                strokeDashoffset={283 - (progress * 2.83)}
                transform="rotate(-90 50 50)"
              />
              <text x="50" y="50" fill="#2563eb" fontSize="18" textAnchor="middle" dy=".3em">
                {progress}%
              </text>
            </svg>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-between mb-4 overflow-x-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <div
                  className={`inline-block w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${index <= currentStep ? 'border-blue-500 text-blue-500 bg-blue-50' : 'border-gray-300 text-gray-500'}`}
                  aria-current={index === currentStep ? 'step' : undefined}
                >
                  {index + 1}
                </div>
                <p className="text-xs mt-1 text-gray-600">{step.title}</p>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="space-y-6">
          {React.createElement(steps[currentStep].component, {
            formData,
            handleChange,
            handleBlur,
            handleAltContactChange,
            addContact,
            removeContact,
            errors,
            universityTypes,
            affiliations,
            states,
            countryCodes,
            contactTypes,
            setFormData,
            imagePreviews,
            setImagePreviews,
            videoPreviews,
            setVideoPreviews,
            removeImage,
            removeVideo,
          })}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 0}
              className={`w-32 py-2.5 px-4 text-sm font-medium rounded-md transition-all duration-200 ${currentStep === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              aria-label="Previous step"
            >
              Previous
            </button>
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="w-32 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-all duration-200"
                aria-label="Next step"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-32 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-all duration-200 flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                aria-label="Submit registration"
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2 h-4 w-4 text-white" />
                    Submitting
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityRegister;