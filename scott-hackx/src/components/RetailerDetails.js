import React, { useState, useEffect } from 'react';
import { getRetailerDetails } from './contractFunctions';

function RetailerDetails({ retailerIndex }) {
  const [retailerData, setRetailerData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const retailer = await getRetailerDetails(retailerIndex);
      setRetailerData(retailer);
    }
    fetchData();
  }, [retailerIndex]);

  return (
    <div>
      <h2>Retailer Details</h2>
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
            <td>{retailerData.productId}</td>
          </tr>
          <tr>
            <td>Product Type</td>
            <td>{retailerData.productType}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{retailerData.name}</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>{retailerData.cost}</td>
          </tr>
          <tr>
            <td>Products Sold</td>
            <td>{retailerData.productsSold}</td>
          </tr>
          <tr>
            <td>Shipping Cost</td>
            <td>{retailerData.shippingCost}</td>
          </tr>
          <tr>
            <td>Shipping Time</td>
            <td>{retailerData.shippingTime}</td>
          </tr>
          <tr>
            <td>Transport Mode</td>
            <td>{retailerData.transportMode}</td>
          </tr>
          <tr>
            <td>Routes</td>
            <td>{retailerData.routes}</td>
          </tr>
          <tr>
            <td>Destinations</td>
            <td>{retailerData.destinations}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RetailerDetails;
