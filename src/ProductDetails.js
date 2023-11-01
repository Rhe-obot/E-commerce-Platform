// src/components/ProductDetails.js
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
