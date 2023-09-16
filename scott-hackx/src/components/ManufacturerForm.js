import React, { useState } from 'react';
import { addManufacturer } from '../contractInteraction'; // Replace with the path to your JavaScript file
import './ManufacturerForm.css'; // Import the CSS file

function ManufacturerForm() {
  const [formData, setFormData] = useState({
    productId: '',
    productType: '',
    name: '',
    cost: '',
    defectRates: '',
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
      await addManufacturer(
        formData.productId,
        formData.productType,
        formData.name,
        formData.cost,
        formData.defectRates,
        formData.shippingCost,
        formData.shippingTime,
        formData.transportMode,
        formData.routes,
        formData.destinations
      );

      alert('Manufacturer added successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add Manufacturer</h2>
      <form onSubmit={handleSubmit}>
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
                <label>Defect Rates:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="defectRates"
                  value={formData.defectRates}
                  onChange={handleChange}
                />
              </td>
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
          <button type="submit">Add Manufacturer</button>
        </div>
      </form>
    </div>
  );
}

export default ManufacturerForm;
