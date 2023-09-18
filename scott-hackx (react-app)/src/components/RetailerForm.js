import React, { useState } from 'react';
import { addRetailer } from '../contractInteraction'; // Import the addRetailer function
import Table from 'react-bootstrap/Table';
import './rf.css';


function RetailerForm() {
  const [formData, setFormData] = useState({
    productId: '',
    productType: '',
    name: '',
    cost: '',
    productsSold: '',
    shippingCost: '',
    shippingTime: '',
    transportMode: '',
    routes: '',
    destinations: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addRetailer(
        formData.productId,
        formData.productType,
        formData.name,
        formData.cost,
        formData.productsSold,
        formData.shippingCost,
        formData.shippingTime,
        formData.transportMode,
        formData.routes,
        formData.destinations
      );

      alert('Retailer added successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Add Retailer</h2>
      <form onSubmit={handleSubmit} className="custom-form">
        <table>
          <tbody>
            <tr>
              <td>
                <label>Product ID:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="productId"
                  value={formData.productId}
                  onChange={handleChange}
                />
              </td>
              </tr>
          <tr>
              <td>
                <label>Product Type:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
              </tr>
          <tr>
              <td>
                <label>Cost:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="cost"
                  value={formData.cost}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Products Sold:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="productsSold"
                  value={formData.productsSold}
                  onChange={handleChange}
                />
              </td>
              </tr>
          <tr>
              <td>
                <label>Shipping Cost:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="shippingCost"
                  value={formData.shippingCost}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Shipping Time:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="shippingTime"
                  value={formData.shippingTime}
                  onChange={handleChange}
                />
              </td>
              </tr>
          <tr>
              <td>
                <label>Transport Mode:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="transportMode"
                  value={formData.transportMode}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Routes:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="routes"
                  value={formData.routes}
                  onChange={handleChange}
                />
              </td>
              </tr>
          <tr>
              <td>
                <label>Destinations:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="destinations"
                  value={formData.destinations}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">Add Retailer</button>
        </div>
      </form>
    </div>
  );
}

export default RetailerForm;
