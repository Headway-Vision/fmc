import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity, faMapMarkerAlt, faPhone, faBook, faInfoCircle, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { colleges as mockColleges } from '../data/mockData';

const CollegePage = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const [showFullAbout, setShowFullAbout] = useState(false);

  useEffect(() => {
    const savedUniversities = JSON.parse(localStorage.getItem('universities')) || [];
    const allColleges = [...mockColleges, ...savedUniversities];
    const collegeId = Number(id);
    const foundCollege = allColleges.find((col) => Number(col.id) === collegeId);
    setCollege(foundCollege);
  }, [id]);

  if (!college) {
    return <p className="p-6 text-center text-gray-600">College not found.</p>;
  }

  const getMediaSrc = (media) => {
    if (typeof media === 'string' && media.startsWith('data:')) {
      return media;
    } else if (typeof media === 'string') {
      return media;
    } else if (media instanceof Blob || media instanceof File) {
      return URL.createObjectURL(media);
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8">
          {college.logo && (
            <img
              src={getMediaSrc(college.logo)}
              alt={`${college.name} logo`}
              className="h-20 w-20 sm:h-24 sm:w-24 object-contain mb-4"
            />
          )}
          <div className="text-center">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3656E5]">{college.name}</h1>
            <p className="text-gray-600 text-sm sm:text-base">{college.city}, {college.state}</p>
            {college.website && (
              <a
                href={college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3656E5] text-sm sm:text-base hover:underline"
              >
                Visit Website
              </a>
            )}
          </div>
        </div>

        <div className="space-y-8">
          {/* Basic Information */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-[#3656E5] flex items-center mb-8">
              <FontAwesomeIcon icon={faUniversity} className="mr-2" />
              <span className="border-b-2 border-[#3656E5]">Basic Information</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mb-6">
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">University Type:</p>
                <p className="text-gray-600">{college.type || 'N/A'}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Affiliation:</p>
                <p className="text-gray-600">{college.affiliation || 'N/A'}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Established:</p>
                <p className="text-gray-600">{college.established || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-[#3656E5] flex items-center mb-8">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span className="border-b-2 border-[#3656E5]">Location Details</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mb-6">
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Address:</p>
                <p className="text-gray-600">{college.address || 'N/A'}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Pincode:</p>
                <p className="text-gray-600">{college.pincode || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-[#3656E5] flex items-center mb-8">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span className="border-b-2 border-[#3656E5]">Contact Information</span>
            </h2>
            {college.contacts && college.contacts.length > 0 ? (
              <div className="space-y-4 mb-5">
                {college.contacts.map((contact, index) => (
                  <div key={index}>
                    <p className="text-sm font-medium text-gray-700">{contact.type || 'Contact'}:</p>
                    <div className="flex items-center justify-center">
                      <p className="text-sm font-medium text-gray-700 mr-2">Name:</p>
                      <p className="text-gray-600">{contact.name || 'N/A'}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-sm font-medium text-gray-700 mr-2">Email:</p>
                      <p className="text-gray-600">{contact.email || 'N/A'}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="text-sm font-medium text-gray-700 mr-2">Phone:</p>
                      <p className="text-gray-600">{contact.countryCode || ''}{contact.phone || 'N/A'}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center">No contact information available.</p>
            )}
          </div>

          {/* Academic Details */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-[#3656E5] flex items-center mb-8">
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              <span className="border-b-2 border-[#3656E5]">Academic Details</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mb-6">
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Popular Streams:</p>
                <p className="text-gray-600">{college.streams || 'N/A'}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Total Students:</p>
                <p className="text-gray-600">{college.students || 'N/A'}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Total Faculty:</p>
                <p className="text-gray-600">{college.faculty || 'N/A'}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Hostel Available:</p>
                <p className="text-gray-600">{college.hostel || 'N/A'}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm font-medium text-gray-700 mr-2">Campus Area:</p>
                <p className="text-gray-600">{college.campusArea ? `${college.campusArea} acres` : 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Placement & Career Services */}
          {(college.placementRate || college.topRecruiters || college.averagePackage || college.highestPackage || college.placementCellContactEmail) && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-[#3656E5] flex items-center mb-8">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                <span className="border-b-2 border-[#3656E5]">Placement & Career Services</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center mb-6">
                <div className="flex items-center justify-center">
                  <p className="text-sm font-medium text-gray-700 mr-2">Placement Rate:</p>
                  <p className="text-gray-600">{college.placementRate ? `${college.placementRate}%` : 'N/A'}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-sm font-medium text-gray-700 mr-2">Top Recruiters:</p>
                  <p className="text-gray-600">{college.topRecruiters || 'N/A'}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-sm font-medium text-gray-700 mr-2">Average Package:</p>
                  <p className="text-gray-600">{college.averagePackage || 'N/A'}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-sm font-medium text-gray-700 mr-2">Highest Package:</p>
                  <p className="text-gray-600">{college.highestPackage || 'N/A'}</p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-sm font-medium text-gray-700 mr-2">Placement Cell Email:</p>
                  <p className="text-gray-600">{college.placementCellContactEmail || 'N/A'}</p>
                </div>
              </div>
            </div>
          )}

          {/* About University with Read More */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-[#3656E5] flex items-center mb-8">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              <span className="border-b-2 border-[#3656E5]">About University</span>
            </h2>
            <div className="relative">
              <p
                className={`text-gray-600 text-sm sm:text-base ${!showFullAbout ? 'line-clamp-7' : ''}`}
                ref={(el) => {
                  if (el && !showFullAbout && el.scrollHeight > el.clientHeight) {
                    const button = el.nextSibling;
                    if (button && button.tagName === 'BUTTON') button.style.display = 'block';
                  }
                }}
              >
                {college.about || 'No description available.'}
              </p>
              {(!showFullAbout && college.about && college.about.length > 200) && (
                <button
                  onClick={() => setShowFullAbout(true)}
                  className="mt-2 text-[#3656E5] text-sm sm:text-base hover:underline focus:outline-none"
                  style={{ display: 'none' }}
                >
                  Read More
                </button>
              )}
              {showFullAbout && (
                <button
                  onClick={() => setShowFullAbout(false)}
                  className="mt-2 text-[#3656E5] text-sm sm:text-base hover:underline focus:outline-none"
                >
                  Read Less
                </button>
              )}
            </div>
          </div>

          {/* Media Section */}
          {(college.images?.length > 0 || college.videos?.length > 0) && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-[#3656E5] flex items-center mb-8">
                <span className="border-b-2 border-[#3656E5]">Media</span>
              </h2>
              {college.images?.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-md sm:text-lg font-medium text-gray-700 mb-8">Images</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {college.images
                      .filter((img) => getMediaSrc(img))
                      .map((img, index) => (
                        <img
                          key={index}
                          src={getMediaSrc(img)}
                          alt={`College image ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                          loading="lazy"
                        />
                      ))}
                  </div>
                </div>
              )}
              {college.videos?.length > 0 && (
                <div>
                  <h3 className="text-md sm:text-lg font-medium text-gray-700 mb-8 mt-14">Videos</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {college.videos
                      .filter((vid) => getMediaSrc(vid))
                      .map((vid, index) => (
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                          <video
                            key={index}
                            src={getMediaSrc(vid)}
                            controls
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegePage;