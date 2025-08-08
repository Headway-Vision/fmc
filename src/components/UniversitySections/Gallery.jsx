import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [showMoreInfra, setShowMoreInfra] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const infrastructureImages = [
    'https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1745234452086.JPG',
    'https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1745240450871.jpg',
    'https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1745240450871.jpg',
    'https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1745240450871.jpg',
    'https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1745234452086.JPG',
    'https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1745240450871.jpg',
    'https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1745240450871.jpg',
    'https://dfhe5ze0n4pxu.cloudfront.net/College/Image/Image-1745240450871.jpg',
  ];

  const visibleImages = showMoreInfra
    ? infrastructureImages
    : infrastructureImages.slice(0, 4);

  return (
    <div className="gallery-container">
      <section className="gallery-section">
        <h2 className="heading">University Infrastructure Gallery</h2>
        <div className="image-layout">
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className={`image-item ${index === 0 ? 'main-image' : ''}`}
            >
              <img src={src} alt={`Image ${index + 1}`} />
              <button className="preview-btn" onClick={() => setPreviewImage(src)}>
                <FaEye />
              </button>
            </div>
          ))}

          <div className="image-item show-more-item" onClick={() => setShowMoreInfra(!showMoreInfra)}>
            {showMoreInfra ? 'Show less' : 'Show more'}
          </div>
        </div>
      </section>

      {previewImage && (
        <div className="preview-modal" onClick={() => setPreviewImage(null)}>
          <img src={previewImage} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
