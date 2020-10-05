import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Stack = ({ photos, setMain, setIndex, mainID, fadeHelper }) => {
  // the mainID prop is used to highlight the thumbnail matching the main
  // photo with a black border, as Etsy does. If the mainID matches that particular
  // photo's id, it gets the class 'active', otherwise nothing happens

  // render one div for each 'image' in photos
  // on click of any thumbnail, set state of 'main' to be that photo
  const carousel = photos.map((photo, index) =>
    <img
      className={`car-thumbnail ${mainID === photo.id ? 'car-active' : ''}`}
      alt={`thumbnail ${index + 1} of ${photo.product}`}
      src={photo.url}
      onClick={() => {
        setMain(photo);
        setIndex(index);
        fadeHelper();
      }}
      key={index}
    />
  );

  return (
    <div className='car-stack'>{carousel}</div>
  )
};

export default Stack;