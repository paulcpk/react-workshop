import React from "react";

function Product({ name, price }) {
  return (
    <div className="product">
      <h3 className="is-family-monospace has-text-weight-bold">{name}</h3>
      <span className="product-price">${price}</span>
    </div>
  );
}

export default Product;
