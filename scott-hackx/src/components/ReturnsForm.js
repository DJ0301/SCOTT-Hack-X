import React, { useState } from 'react';
import { setProductReturns } from '../contractInteraction'; // Import the setProductReturns function

function ReturnsForm() {
  const [formData, setFormData] = useState({
    productId: '',
    productType: '',
    productReturns: '',
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
      await setProductReturns(
        formData.productId,
        formData.productType,
        formData.productReturns
      );

      alert('Product Returns set successfully!');
      console.log(tx.hash);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Set Product Returns</h2>
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
                <label>Product Returns:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="productReturns"
                  value={formData.productReturns}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit">Set Product Returns</button>
        </div>
      </form>
    </div>
  );
}

export default ReturnsForm;
