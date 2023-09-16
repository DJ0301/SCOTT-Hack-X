import React, { useState, useEffect } from 'react';
import { getManufacturerDetails } from '../contractRead';

function ManufacturerDetails({ manufacturerIndex }) {
  const [manufacturerData, setManufacturerData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const manufacturer = await getManufacturerDetails(manufacturerIndex);
      setManufacturerData(manufacturer);
    }
    fetchData();
  }, [manufacturerIndex]);

  return (
    <div>
      <h2>Manufacturer Details</h2>
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
            <td>{manufacturerData.productId}</td>
          </tr>
          <tr>
            <td>Product Type</td>
            <td>{manufacturerData.productType}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{manufacturerData.name}</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>{manufacturerData.cost}</td>
          </tr>
          <tr>
            <td>Defect Rates</td>
            <td>{manufacturerData.defectRates}</td>
          </tr>
          <tr>
            <td>Shipping Cost</td>
            <td>{manufacturerData.shippingCost}</td>
          </tr>
          <tr>
            <td>Shipping Time</td>
            <td>{manufacturerData.shippingTime}</td>
          </tr>
          <tr>
            <td>Transport Mode</td>
            <td>{manufacturerData.transportMode}</td>
          </tr>
          <tr>
            <td>Routes</td>
            <td>{manufacturerData.routes}</td>
          </tr>
          <tr>
            <td>Destinations</td>
            <td>{manufacturerData.destinations}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ManufacturerDetails;
