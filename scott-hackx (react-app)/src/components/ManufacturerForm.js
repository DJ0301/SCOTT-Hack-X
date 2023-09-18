import React, { useState } from 'react';
import { addManufacturer } from '../contractInteraction'; // Replace with the path to your JavaScript file
import './rf.css';

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
    <div className="form-container shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg p-8 ">
  <h2 className="text-2xl font-bold mb-4">Add Manufacturer</h2>
  <form onSubmit={handleSubmit}>
    <table>
      <tbody>
        <tr>
          <td>
            <label className="font-semibold">Product ID:</label>
          </td>
          <td>
            <input
              type="text"
              name="productId"
              value={formData.productId}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
          </tr>
          <tr>
          <td>
            <label className="font-semibold">Product Type:</label>
          </td>
          <td>
            <input
              type="text"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="font-semibold">Name:</label>
          </td>
          <td>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
          </tr>
          <tr>
          <td>
            <label className="font-semibold">Cost:</label>
          </td>
          <td>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="font-semibold">Defect Rates:</label>
          </td>
          <td>
            <input
              type="number"
              name="defectRates"
              value={formData.defectRates}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
          </tr>
          <tr>
          <td>
            <label className="font-semibold">Shipping Cost:</label>
          </td>
          <td>
            <input
              type="number"
              name="shippingCost"
              value={formData.shippingCost}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="font-semibold">Shipping Time:</label>
          </td>
          <td>
            <input
              type="text"
              name="shippingTime"
              value={formData.shippingTime}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
          </tr>
          <tr>
          <td>
            <label className="font-semibold">Transport Mode:</label>
          </td>
          <td>
            <input
              type="text"
              name="transportMode"
              value={formData.transportMode}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label className="font-semibold">Routes:</label>
          </td>
          <td>
            <input
              type="text"
              name="routes"
              value={formData.routes}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
          </tr>
          <tr>
          <td>
            <label className="font-semibold">Destinations:</label>
          </td>
          <td>
            <input
              type="text"
              name="destinations"
              value={formData.destinations}
              onChange={handleChange}
              className="border p-2 rounded-md w-full"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div className="mt-4">
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Manufacturer
      </button>
    </div>
  </form>
</div>

  );
}

export default ManufacturerForm;
