import React from 'react';
import './RestaurantMap.css'

const RestaurantMap = () => {
  return (
    <div className='map-container'>
       <h2>Location</h2>
      <iframe
        title="Restaurant Location"
        width="600"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6517125921805!2d77.58481247507794!3d13.057827487265493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19064c5a498d%3A0x56b43473c6faf533!2sGrill%20square!5e0!3m2!1sen!2sin!4v1695202284589!5m2!1sen!2sin" 
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default RestaurantMap;
