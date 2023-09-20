import React, { useState } from 'react';
import './Gallery.css'

const Gallery = () => {
  // Define an array of restaurant ambiance images
  const ambianceImages = [
    'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2975%2Ftrend20201030124515.jpg',
    'https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/133.jpg',
    'https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2020/01/Bier-Garten-21987-2-1.jpg',
    'https://im.whatshot.in/img/2018/Oct/london-curry-house-cropped-1539605352.jpg?w=1336&h=890&cc=1'
    // Add more image URLs here
  ];

  // Initialize the state with the first image as the initial displayed image
  const [currentImage, setCurrentImage] = useState(ambianceImages[0]);

  // Function to handle image click and update the current image
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="gallery">
        <h2>Gallery</h2>
      <div className="gallery-images">
        {ambianceImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Restaurant Ambiance ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="current-image">
        <img src={currentImage} alt="Current Restaurant Ambiance" />
      </div>
    </div>
  );
};

export default Gallery;
