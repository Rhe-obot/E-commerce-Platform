// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card" onClick={() => onProductClick(product)}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
