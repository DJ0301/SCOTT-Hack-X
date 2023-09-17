import React, { useState } from 'react';
import QRCode from 'qrcode.react'; // Import the QRCode component
import { tx } from '../contractInteraction'; // Import the 'tx' variable from your contractInteraction.js file

function DynamicQRCode() {
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    setShowQR(true);
  };
  let text = `https://explorer.apothem.network/tx/0x75f078d337eb7a3784bc0a2e55c680468d38c6dd6dea0da41d1d2533029efc8d#overview`
  return (
    <div>
      <button onClick={handleGenerateQR}>Validate Transaction</button>
      {showQR && tx && (
        <div>
          <QRCode value={text} /> {/* Use the QRCode component with the 'tx' value */}
        </div>
      )}
    </div>
  );
}

export default DynamicQRCode;
