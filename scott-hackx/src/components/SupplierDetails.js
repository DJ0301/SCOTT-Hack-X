import React, { useState } from 'react';
import { getSupplierDetails } from '../contractRead'; // Import the function

function SupplierDetails() {
  const [supplierIndex, setSupplierIndex] = useState(0); // Initial index, you can change it as needed
  const [supplierData, setSupplierData] = useState(null);

  const handleGetSupplierDetails = async () => {
    try {
      const data = await getSupplierDetails(supplierIndex);
      setSupplierData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Supplier Details</h2>
      <div>
        <label>
          Supplier Index:
          <input
            type="number"
            value={supplierIndex}
            onChange={(e) => setSupplierIndex(e.target.value)}
          />
        </label>
        <button onClick={handleGetSupplierDetails}>Get Details</button>
      </div>
      {supplierData && (
        <div>
          <h3>Supplier Information</h3>
          <table>
            <tbody>
              <tr>
                <td>Product ID:</td>
                <td>{supplierData.productId}</td>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{supplierData.name}</td>
              </tr>
              <tr>
                <td>Stock:</td>
                <td>{supplierData.stock}</td>
              </tr>
              <tr>
                <td>Cost Per Item:</td>
                <td>{supplierData.costPerItem}</td>
              </tr>
              <tr>
                <td>Order Quantity:</td>
                <td>{supplierData.orderQuantity}</td>
              </tr>
              <tr>
                <td>Shipping Cost:</td>
                <td>{supplierData.shippingCost}</td>
              </tr>
              <tr>
                <td>Shipping Time:</td>
                <td>{supplierData.shippingTime}</td>
              </tr>
              <tr>
                <td>Transport Mode:</td>
                <td>{supplierData.transportMode}</td>
              </tr>
              <tr>
                <td>Routes:</td>
                <td>{supplierData.routes}</td>
              </tr>
              <tr>
                <td>Destinations:</td>
                <td>{supplierData.destinations}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SupplierDetails;
