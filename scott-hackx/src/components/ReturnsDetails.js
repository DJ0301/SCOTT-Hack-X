import React, { useState, useEffect } from 'react';
import { getReturns } from '../contractRead';

function ReturnsDetails() {
  const [returnsData, setReturnsData] = useState({
    productId: '',
    productType: '',
    productReturns: '',
  });

  useEffect(() => {
    async function fetchData() {
      const returns = await getReturns();
      setReturnsData(returns);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Return Details</h2>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product ID</td>
            <td>{returnsData.productId}</td>
          </tr>
          <tr>
            <td>Product Type</td>
            <td>{returnsData.productType}</td>
          </tr>
          <tr>
            <td>Product Returns</td>
            <td>{returnsData.productReturns}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ReturnsDetails;
