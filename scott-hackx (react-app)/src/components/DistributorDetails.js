import React, { useState, useEffect } from 'react';
import { getDistributorDetails } from './contractFunctions';

function DistributorDetails({ distributorIndex }) {
  const [distributorData, setDistributorData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const distributor = await getDistributorDetails(distributorIndex);
      setDistributorData(distributor);
    }
    fetchData();
  }, [distributorIndex]);

  return (
    <div className="form-container shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Distributor Details</h2>
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
            <td>{distributorData.productId}</td>
          </tr>
          <tr>
            <td>Product Type</td>
            <td>{distributorData.productType}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{distributorData.name}</td>
          </tr>
          <tr>
            <td>Cost</td>
            <td>{distributorData.cost}</td>
          </tr>
          <tr>
            <td>Shipping Cost</td>
            <td>{distributorData.shippingCost}</td>
          </tr>
          <tr>
            <td>Shipping Time</td>
            <td>{distributorData.shippingTime}</td>
          </tr>
          <tr>
            <td>Transport Mode</td>
            <td>{distributorData.transportMode}</td>
          </tr>
          <tr>
            <td>Routes</td>
            <td>{distributorData.routes}</td>
          </tr>
          <tr>
            <td>Destinations</td>
            <td>{distributorData.destinations}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DistributorDetails;
