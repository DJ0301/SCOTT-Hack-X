import React, { useState } from 'react';
import QRCode from 'qrcode.react'; // Import the QRCode component
import { tx } from '../contractInteraction';

function DynamicQRCode() {
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    setShowQR(true);
  };
  let text = `https://explorer.apothem.network/tx/${tx.hash}`
  return (
    <div>
      <button onClick={handleGenerateQR}>Validate Transaction</button>
      {showQR && tx.hash && (
        <div>
          <QRCode value={text} /> 
        </div>
      )}
    </div>
  );
}

export default DynamicQRCode;
