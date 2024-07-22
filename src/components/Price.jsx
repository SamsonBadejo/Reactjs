// src/components/Price.js
import React from 'react';
import product from '../product';

const Price = () => {
  return <p className="card-text">{product.price}</p>;
};

export default Price;
