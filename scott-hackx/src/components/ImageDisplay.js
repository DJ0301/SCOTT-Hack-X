import React, { useState } from 'react';
import transact from './transact.png'
function ImageDisplay() {
  const [showImage, setShowImage] = useState(false);

  const handleValidateClick = () => {
    // Perform any validation logic here if needed
    // For now, we'll just show the image
    setShowImage(true);
  };

  return (
    <div>
      <h2>Image Display</h2>
      <button onClick={handleValidateClick}>VALIDATE TRANSACTION</button>
      {showImage && (
        <div>
          <img
            src={transact}
            alt="Your Image"
          />
        </div>
      )}
    </div>
  );
}

export default ImageDisplay;