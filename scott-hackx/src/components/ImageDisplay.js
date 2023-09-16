import React, { useState, useEffect } from 'react';
import transact from './transact.png';

function ImageDisplay() {
  const [showImage, setShowImage] = useState(false);

  const handleValidateClick = () => {
    setShowImage(true);

    // Set a timeout to hide the image after 3 seconds
    setTimeout(() => {
      setShowImage(false);
    }, 6000); // 3000 milliseconds = 3 seconds
  };

  return (
    <div>
      <button onClick={handleValidateClick}>VALIDATE TRANSACTION</button>
      <br />
      {showImage && (
        <div>
          <img src={transact} alt="Your Image" />
        </div>
      )}
    </div>
  );
}

export default ImageDisplay;