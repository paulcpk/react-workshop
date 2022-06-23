import React, { useState } from "react";

function Product({ id, name, price }) {
  const [productPrice, setProductPrice] = useState(price);

  const optionClickHandler = (e, extraCost) => {
    const optionSum = e.target.checked
      ? productPrice + extraCost
      : productPrice - extraCost;
    setProductPrice(optionSum);
  };

  return (
    <div className="product">
      <div className="product-content">
        <h3 className="is-family-monospace has-text-weight-bold">{name}</h3>
        <span className="product-price is-size-5">
          ${productPrice.toFixed(2)}
        </span>
        <label htmlFor={`add-sugar-${id}`} className="checkbox product-option">
          <input
            id={`add-sugar-${id}`}
            type="checkbox"
            onChange={(e) => optionClickHandler(e, 0.5)}
          />
          Extra Sugar + $0.50
        </label>
        <label
          htmlFor={`add-espresso-${id}`}
          className="checkbox product-option"
        >
          <input
            id={`add-espresso-${id}`}
            type="checkbox"
            onChange={(e) => optionClickHandler(e, 1)}
          />
          Extra Espresso Shot + $1.00
        </label>
      </div>
      <button className="button is-small">Add to Cart</button>
    </div>
  );
}

export default Product;
