import React, { useState, useEffect } from 'react';
import { getReturns } from './contractFunctions'; // Import the getReturns function

function CompanyReturns() {
  const [returnsData, setReturnsData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const returns = await getReturns();
      setReturnsData(returns);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Company Returns</h2>
      {/* Render company returns data here */}
    </div>
  );
}

export default CompanyReturns;
