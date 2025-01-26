import React from 'react';
import './PhotoSection.css'; // Стили для раздела

function PhotoSection({ id, title, description, images }) {
  return (
    <div id={id} className="photo-section">
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slide"
          />
        ))}
      </div>
      <div className="text-overlay">
        <h1>{title}</h1>
      </div>
      <div className="text-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PhotoSection;
