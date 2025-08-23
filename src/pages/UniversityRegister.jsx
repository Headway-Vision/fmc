  import React, { useState, useMemo } from 'react';
  import FormInput from '../components/FormInput'; // Custom input component
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {
    faUniversity,
    faMapMarkerAlt,
    faPhone,
    faBook,
    faImage,
    faUserShield,
    faInfoCircle,
    faSpinner,
    faUpload,
    faTimes,
    faBriefcase,
  } from '@fortawesome/free-solid-svg-icons';

  const UniversityRegister = () => {
    // State to store form data (all input fields)
    const [formData, setFormData] = useState({
      name: '',
      type: '',
      affiliation: '',
      established: '',
      website: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      altContact: { countryCode: '+91', phone: '' }, // Added altContact as an object
      contacts: [{ type: 'registrar', name: '', email: '', phone: '', countryCode: '+91' }],
      coursesFile: null,
      streams: '',
      students: '',
      faculty: '',
      hostel: '',
      campusArea: '',
      about: '',
      logo: null,
      brochure: null,
      images: [],
      videos: [],
      adminEmail: '',
      password: '',
      confirmPassword: '',
      placementRate: '',
      topRecruiters: '',
      averagePackage: '',
      highestPackage: '',
      placementCellContactEmail: '',
    });

    // State for form errors and submission status
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // State for previewing uploaded images and videos
    const [imagePreviews, setImagePreviews] = useState([]);
    const [videoPreviews, setVideoPreviews] = useState([]);

    // Lists for dropdown menus
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
    const requiredFields = ['name', 'type', 'adminEmail', 'password', 'confirmPassword'];

    // Calculate form completion progress
    const progress = useMemo(() => {
      const filledFields = requiredFields.filter(
        (field) => formData[field] && formData[field].trim() !== ''
      ).length;
      return Math.round((filledFields / requiredFields.length) * 100);
    }, [formData]);

    // Validate form inputs
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'University name is required';
      if (!formData.type) newErrors.type = 'University type is required';
      if (!formData.adminEmail) newErrors.adminEmail = 'Admin email is required';
      if (!formData.password) newErrors.password = 'Password is required';
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (formData.website && !/^https?:\/\/.+/.test(formData.website)) {
        newErrors.website = 'Invalid URL format';
      }
      formData.contacts.forEach((contact, index) => {
        if (contact.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
          newErrors[`contactEmail${index}`] = 'Invalid email format';
        }
      });
      if (formData.logo && !['image/png', 'image/jpeg', 'image/jpg'].includes(formData.logo.type)) {
        newErrors.logo = 'Logo must be a PNG or JPEG image';
      }
      if (formData.brochure && formData.brochure.type !== 'application/pdf') {
        newErrors.brochure = 'Brochure must be a PDF file';
      }
      if (formData.coursesFile && !['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(formData.coursesFile.type)) {
        newErrors.coursesFile = 'Courses file must be an Excel file';
      }
      if (formData.placementCellContactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.placementCellContactEmail)) {
        newErrors.placementCellContactEmail = 'Invalid email format';
      }
      return newErrors;
    };

    // Handle input changes
    const handleChange = (e, index = null) => {
      const { name, value, files } = e.target;
      if (files) {
        if (name === 'images') {
          const newImages = Array.from(files);
          setFormData((prev) => ({ ...prev, images: [...prev.images, ...newImages] }));
          setImagePreviews((prev) => [
            ...prev,
            ...newImages.map((file) => URL.createObjectURL(file))
          ]);
        } else if (name === 'videos') {
          const newVideos = Array.from(files);
          setFormData((prev) => ({ ...prev, videos: [...prev.videos, ...newVideos] }));
          setVideoPreviews((prev) => [
            ...prev,
            ...newVideos.map((file) => URL.createObjectURL(file))
          ]);
        } else {
          setFormData((prev) => ({ ...prev, [name]: files[0] }));
        }
      } else if (index !== null) {
        setFormData((prev) => {
          const newContacts = [...prev.contacts];
          newContacts[index] = { ...newContacts[index], [name]: value };
          return { ...prev, contacts: newContacts };
        });
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
    };

    // Handle altContact changes (country code and phone)
    const handleAltContactChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        altContact: { ...prev.altContact, [name]: value },
      }));
      if (errors.altContact) {
        setErrors((prev) => ({ ...prev, altContact: '' }));
      }
    };

    // Add a new contact field
    const addContact = () => {
      setFormData((prev) => ({
        ...prev,
        contacts: [...prev.contacts, { type: '', name: '', email: '', phone: '', countryCode: '+91' }]
      }));
    };

    // Remove a contact field
    const removeContact = (index) => {
      setFormData((prev) => ({
        ...prev,
        contacts: prev.contacts.filter((_, i) => i !== index)
      }));
    };

    // Remove an uploaded image
    const removeImage = (index) => {
      setFormData((prev) => ({
        ...prev,
        images: prev.images.filter((_, i) => i !== index)
      }));
      setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    };

    // Remove an uploaded video
    const removeVideo = (index) => {
      setFormData((prev) => ({
        ...prev,
        videos: prev.videos.filter((_, i) => i !== index)
      }));
      setVideoPreviews((prev) => prev.filter((_, i) => i !== index));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formErrors = validateForm();

      if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
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
          name: formData.name,
          type: formData.type,
          affiliation: formData.affiliation,
          established: formData.established,
          website: formData.website,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          altContact: formData.altContact, // Save altContact object
          contacts: formData.contacts,
          streams: formData.streams,
          students: formData.students,
          faculty: formData.faculty,
          hostel: formData.hostel,
          campusArea: formData.campusArea,
          about: formData.about,
          logo: formData.logo ? await fileToBase64(formData.logo) : null,
          brochure: formData.brochure ? await fileToBase64(formData.brochure) : null,
          images: await Promise.all(formData.images.map(fileToBase64)),
          videos: await Promise.all(formData.videos.map(fileToBase64)),
          adminEmail: formData.adminEmail,
          password: formData.password,
          placementRate: formData.placementRate,
          topRecruiters: formData.topRecruiters,
          averagePackage: formData.averagePackage,
          highestPackage: formData.highestPackage,
          placementCellContactEmail: formData.placementCellContactEmail,
        };

        const existingUniversities = JSON.parse(localStorage.getItem('universities')) || [];
        existingUniversities.push(newUniversity);
        localStorage.setItem('universities', JSON.stringify(existingUniversities));

        alert('University registered successfully!');
        setFormData({
          name: '',
          type: '',
          affiliation: '',
          established: '',
          website: '',
          address: '',
          city: '',
          state: '',
          pincode: '',
          altContact: { countryCode: '+91', phone: '' },
          contacts: [{ type: 'registrar', name: '', email: '', phone: '', countryCode: '+91' }],
          coursesFile: null,
          streams: '',
          students: '',
          faculty: '',
          hostel: '',
          campusArea: '',
          about: '',
          logo: null,
          brochure: null,
          images: [],
          videos: [],
          adminEmail: '',
          password: '',
          confirmPassword: '',
          placementRate: '',
          topRecruiters: '',
          averagePackage: '',
          highestPackage: '',
          placementCellContactEmail: '',
        });
        setImagePreviews([]);
        setVideoPreviews([]);
      } catch (error) {
        alert('Error submitting registration.');
      } finally {
        setIsSubmitting(false);
      }
    };

    // Form sections configuration
    const formSections = [
      {
        title: 'Basic Information',
        icon: faUniversity,
        fields: [
          { label: 'University Name', name: 'name', required: true, placeholder: 'Enter university name' },
          {
            label: 'University Type',
            name: 'type',
            type: 'select',
            options: universityTypes,
            required: true,
            placeholder: 'Select university type'
          },
          {
            label: 'Affiliation',
            name: 'affiliation',
            type: 'select',
            options: affiliations,
            placeholder: 'Select affiliation'
          },
          {
            label: 'Year Established',
            name: 'established',
            type: 'date',
            placeholder: 'Select establishment date'
          },
          { label: 'Official Website', name: 'website', type: 'url', placeholder: 'https://www.university.edu' },
        ],
      },
      {
        title: 'Location Details',
        icon: faMapMarkerAlt,
        fields: [
          { label: 'Address', name: 'address', placeholder: 'Enter street address' },
          { label: 'City', name: 'city', placeholder: 'Enter city name' },
          {
            label: 'State',
            name: 'state',
            type: 'select',
            options: states,
            placeholder: 'Select state'
          },
          { label: 'Pincode', name: 'pincode', placeholder: 'Enter postal code' },
        ],
      },
      {
        title: 'Contact Information',
        icon: faPhone,
        fields: [
          { label: 'Contact Email / Phone', name: 'contact', placeholder: 'Enter primary contact' },
          { label: 'Alternate Contact', name: 'altContact', customRender: () => (
            <div>
              <label className="mb-2 block text-xs sm:text-sm font-medium text-gray-700">Alternate Contact</label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.altContact.countryCode}
                  onChange={handleAltContactChange}
                  className="w-2/3 sm:w-1/4 py-2 text-sm border border-gray-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5]"
                >
                  {countryCodes.map((code) => (
                    <option key={code} value={code}>{code}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.altContact.phone}
                  onChange={handleAltContactChange}
                  placeholder="Enter alternate contact"
                  className="w-2/3 sm:w-3/4 px-3 py-2 text-sm border border-l-0 border-gray-500 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5]"
                />
              </div>
              {errors.altContact && <p className="text-xs text-red-600 mt-1">{errors.altContact}</p>}
            </div>
          )},
        ],
      },
      {
        title: 'Academic Details',
        icon: faBook,
        fields: [
          { label: 'Popular Streams', name: 'streams', placeholder: 'e.g., Engineering, Arts' },
          { label: 'Total Students', name: 'students', type: 'number', placeholder: 'Enter number of students' },
          { label: 'Total Faculty', name: 'faculty', type: 'number', placeholder: 'Enter number of faculty' },
          { label: 'Hostel Available', name: 'hostel', placeholder: 'Yes / No' },
          { label: 'Campus Area (in acres)', name: 'campusArea', type: 'number', placeholder: 'Enter area in acres' },
          {
            label: 'Courses Excel File',
            name: 'coursesFile',
            type: 'file',
            placeholder: 'Upload courses (Excel)',
            accept: '.xls,.xlsx'
          },
          {
            label: 'Download e.g. Excel Sheet',
            name: 'sampleExcel',
            type: 'download',
            href: '/sample-courses.xlsx',
            text: 'e.g. Excel Sheet'
          },
        ],
      },
      {
        title: 'Media',
        icon: faImage,
        fields: [
          { label: 'Logo Upload', name: 'logo', type: 'file', placeholder: 'Upload logo (PNG/JPEG)', accept: 'image/png,image/jpeg' },
          { label: 'Brochure Upload', name: 'brochure', type: 'file', placeholder: 'Upload brochure (PDF)', accept: 'application/pdf' },
          { label: 'Images Upload', name: 'images', type: 'file', multiple: true, placeholder: 'Upload images (PNG/JPEG)', accept: 'image/png,image/jpeg' },
          { label: 'Videos Upload', name: 'videos', type: 'file', multiple: true, placeholder: 'Upload videos (MP4)', accept: 'video/mp4' },
        ],
      },
      {
        title: 'Placement & Career Services',
        icon: faBriefcase,
        fields: [
          { label: 'Placement Rate (%)', name: 'placementRate', type: 'number', placeholder: 'Enter placement rate (e.g., 85)' },
          { label: 'Top Recruiters', name: 'topRecruiters', placeholder: 'e.g., Google, Microsoft, TCS' },
          { label: 'Average Package', name: 'averagePackage', placeholder: 'e.g., 10 LPA or $50,000' },
          { label: 'Highest Package', name: 'highestPackage', placeholder: 'e.g., 20 LPA or $100,000' },
          { label: 'Placement Cell Contact Email', name: 'placementCellContactEmail', type: 'email', placeholder: 'Enter placement cell email' },
        ],
      },
      {
        title: 'Admin Credentials',
        icon: faUserShield,
        fields: [
          { label: 'Admin Login Email', name: 'adminEmail', type: 'email', required: true, placeholder: 'Enter admin email' },
          { label: 'Password', name: 'password', type: 'password', required: true, placeholder: 'Enter password' },
          { label: 'Confirm Password', name: 'confirmPassword', type: 'password', required: true, placeholder: 'Confirm password' },
        ],
      },
    ];

    const contactTypes = ['Director', 'Examiner', 'Vice Chancellor', 'MD', 'Owner', 'Registrar', 'Other'];

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl bg-white rounded-xl shadow-xl p-4 sm:p-6 lg:p-15">
          <div className="relative mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3656E5] text-center">
              University Registration
            </h2>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-[#3656E5]"
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
                <text
                  x="50"
                  y="50"
                  fill="#3656E5"
                  fontSize="18"
                  textAnchor="middle"
                  dy=".3em"
                >
                  {progress}%
                </text>
              </svg>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            {formSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[#3656E5] border-b border-gray-200 py-1 flex items-center">
                  <FontAwesomeIcon icon={section.icon} className="mr-2 text-[#3656E5] text-base sm:text-lg" />
                  {section.title}
                </h3>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-15 gap-y-8">
                  {section.title === 'Contact Information' ? (
                    <>
                      {section.fields.map((field, idx) => (
                        <div key={field.name} className="space-y-1">
                          {field.customRender ? field.customRender() : (
                            <FormInput
                              label={field.label}
                              name={field.name}
                              value={formData[field.name] || ''}
                              onChange={handleChange}
                              type={field.type || 'text'}
                              placeholder={field.placeholder}
                              required={field.required}
                              error={errors[field.name]}
                              className="border-gray-300 focus:ring-[#3656E5] focus:border-[#3656E5] text-sm py-2 px-2"
                            />
                          )}
                        </div>
                      ))}
                      <div className="mt-8 col-span-1 sm:col-span-2">
                        <h4 className="text-base sm:text-lg font-medium text-gray-700 mb-2">Additional Contacts</h4>
                        {formData.contacts.map((contact, idx) => (
                          <div key={idx} className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3 mb-4">
                            <div className="flex-1">
                              <label className="mb-2 block text-xs sm:text-sm font-medium text-gray-700">Contact Type</label>
                              <select
                                name="type"
                                value={contact.type}
                                onChange={(e) => handleChange(e, idx)}
                                className="w-full px-3 py-2.5 text-sm border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5]"
                              >
                                <option value="">Select contact type</option>
                                {contactTypes.map((type) => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            </div>
                            <div className="flex-1">
                              <FormInput
                                label="Name"
                                name="name"
                                value={contact.name}
                                onChange={(e) => handleChange(e, idx)}
                                placeholder="Enter name"
                                className="text-sm py-2 px-3"
                              />
                            </div>
                            <div className="flex-1">
                              <FormInput
                                label="Email"
                                name="email"
                                value={contact.email}
                                onChange={(e) => handleChange(e, idx)}
                                placeholder="Enter email"
                                className="text-sm py-2 px-3"
                              />
                              {errors[`contactEmail${idx}`] && (
                                <p className="text-xs text-red-600 mt-1">{errors[`contactEmail${idx}`]}</p>
                              )}
                            </div>
                            <div className="flex-1">
                              <label className="mb-2 block text-xs sm:text-sm font-medium text-gray-700">Phone</label>
                              <div className="flex">
                                <select
                                  name="countryCode"
                                  value={contact.countryCode}
                                  onChange={(e) => handleChange(e, idx)}
                                  className="w-1/3 sm:w-1/4 py-2 text-sm border border-gray-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5]"
                                >
                                  {countryCodes.map((code) => (
                                    <option key={code} value={code}>{code}</option>
                                  ))}
                                </select>
                                <input
                                  type="text"
                                  name="phone"
                                  value={contact.phone}
                                  onChange={(e) => handleChange(e, idx)}
                                  placeholder="Enter phone number"
                                  className="w-2/3 sm:w-3/4 px-3 py-2 text-sm border border-l-0 border-gray-500 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5]"
                                />
                              </div>
                            </div>
                            {formData.contacts.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeContact(idx)}
                                className="text-red-600 hover:text-red-800 self-end sm:self-center p-2"
                              >
                                <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={addContact}
                          className="mt-2 text-[#3656E5] hover:text-[#466BE9] text-sm font-medium p-2"
                        >
                          + Add Contact
                        </button>
                      </div>
                    </>
                  ) : (
                    section.fields.map((field) => (
                      <div key={field.name} className="space-y-1">
                        {field.type === 'file' ? (
                          <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700">
                              {field.label}
                            </label>
                            <div className="mt-1 flex items-center">
                              <input
                                type="file"
                                name={field.name}
                                onChange={handleChange}
                                accept={field.accept}
                                multiple={field.multiple}
                                className="w-full px-3 py-2.5 text-sm border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5] transition duration-200"
                              />
                              <FontAwesomeIcon icon={faUpload} className="ml-2 text-[#3656E5] h-4 w-4" />
                            </div>
                            {formData[field.name] && !field.multiple && (
                              <p className="text-xs text-gray-500 mt-1">
                                Selected: {formData[field.name].name}
                              </p>
                            )}
                          </div>
                        ) : field.type === 'select' ? (
                          <div>
                            <label className="mb-2 block text-sm font-medium text-gray-700">
                              {field.label}
                            </label>
                            <select
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              className="w-full px-3 py-2.5 text-sm border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5]"
                            >
                              <option value="">{field.placeholder}</option>
                              {field.options.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                        ) : field.type === 'download' ? (
                          <div className="border border-gray-500 rounded-lg p-2">
                            <label className="block text-xs sm:text-sm font-medium text-gray-700">
                              {field.label}
                            </label>
                            <a
                              href={field.href}
                              download
                              className="text-[#3656E5] hover:text-[#466BE9] text-sm font-medium"
                            >
                              {field.text}
                            </a>
                          </div>
                        ) : (
                          <FormInput
                            label={field.label}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                            type={field.type || 'text'}
                            placeholder={field.placeholder}
                            required={field.required}
                            error={errors[field.name]}
                            className="border-gray-300 focus:ring-[#3656E5] focus:border-[#3656E5] text-sm py-2 px-3"
                          />
                        )}
                        {errors[field.name] && (
                          <p className="text-xs text-red-600 mt-1">{errors[field.name]}</p>
                        )}
                      </div>
                    ))
                  )}
                  {section.title === 'Media' && (
                    <>
                      {imagePreviews.length > 0 && (
                        <div className="col-span-1 sm:col-span-2">
                          <h4 className="text-base sm:text-lg font-medium text-gray-700 mb-2">Uploaded Images</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {imagePreviews.map((preview, idx) => (
                              <div key={idx} className="relative">
                                <img src={preview} alt={`Preview ${idx}`} className="w-full h-20 sm:h-24 object-cover rounded" />
                                <div className="absolute top-0 right-0 p-1">
                                  <button
                                    type="button"
                                    onClick={() => removeImage(idx)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {videoPreviews.length > 0 && (
                        <div className="col-span-1 sm:col-span-2">
                          <h4 className="text-base sm:text-lg font-medium text-gray-700 mb-2">Uploaded Videos</h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {videoPreviews.map((preview, idx) => (
                              <div key={idx} className="relative">
                                <video src={preview} controls className="w-full h-20 sm:h-24 object-cover rounded" />
                                <div className="absolute top-0 right-0 p-1">
                                  <button
                                    type="button"
                                    onClick={() => removeVideo(idx)}
                                    className="text-red-600 hover:text-red-800"
                                  >
                                    <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-[#3656E5] border-b border-gray-200 pb-1 flex items-center">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-[#3656E5] text-base sm:text-lg" />
                About University
              </h3>
              <div className="space-y-1">
                <label className="block text-xs sm:text-sm font-medium text-gray-700">
                  Brief Description
                </label>
                <textarea
                  name="about"
                  rows="4"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Provide a brief description of the university..."
                  className="w-full px-3 py-2.5 text-sm border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3656E5] focus:border-[#3656E5] transition duration-200"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-80 bg-[#3656E5] hover:bg-[#466BE9] text-white font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center text-sm sm:text-base ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-2 h-4 w-4 text-white" />
                    Submitting...
                  </>
                ) : (
                  'Submit Registration'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default UniversityRegister;