import React, { useState } from 'react';
import { interactWithContract } from './contractInteraction.js'; 

function ProductForm() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');

  const handleAddProduct = async () => {
    await interactWithContract(productId, productName);
    setProductId('');
    setProductName('');
  };

  return (
    <div>
      <h2>Add a Product</h2>
      <label>
        Product ID:
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Product Name:
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
}

export default ProductForm;