import React, { useState } from 'react';
import { addSupplier } from '../contractInteraction'; // Replace with the path to your JavaScript file

function SupplierForm() {
  const [formData, setFormData] = useState({
    productId: '',
    name: '',
    stock: '',
    costPerItem: '',
    orderQuantity: '',
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
      await addSupplier(
        formData.productId,
        formData.name,
        formData.stock,
        formData.costPerItem,
        formData.orderQuantity,
        formData.shippingCost,
        formData.shippingTime,
        formData.transportMode,
        formData.routes,
        formData.destinations
      );

      alert('Supplier added successfully!');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add Supplier</h2>
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
                <label>Stock:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                />
              </td>
              <td>
                <label>Cost Per Item:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="costPerItem"
                  value={formData.costPerItem}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Order Quantity:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="orderQuantity"
                  value={formData.orderQuantity}
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
          <button type="submit">Add Supplier</button>
        </div>
      </form>
    </div>
  );
}

export default SupplierForm;
