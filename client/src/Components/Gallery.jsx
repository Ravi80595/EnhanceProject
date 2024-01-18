import React from 'react';

const Gallery = ({ images }) => {
  // Ensure that the number of images doesn't exceed 6
  const limitedImages = images.slice(0, 6);

  return (
    <div style={galleryContainerStyle}>
      {limitedImages.map((image, index) => (
        <div key={index} style={imageContainerStyle}>
          <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
        </div>
      ))}
    </div>
  );
};

// Inline styles
const galleryContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  maxWidth: '600px',
  margin: 'auto',
};

const imageContainerStyle = {
  margin: '10px',
  overflow: 'hidden',
  borderRadius: '8px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
};

export default Gallery;
