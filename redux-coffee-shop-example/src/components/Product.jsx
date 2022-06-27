import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/product/productSlice";
import { getCoffeePrice, getFormattedPrice } from "../utils/getCoffeePrice";

export default function Product(props) {
  const dispatch = useDispatch();
  const [coffeeState, setCoffeeState] = useState(props);
  const { id, name, price, addSugar, addShot } = props;

  const addToCartHandler = () => {
    dispatch(addProduct(coffeeState))
    setCoffeeState(props);
  };

  return (
    <div className="product">
      <div className="product-content">
        <h3 className="is-family-monospace has-text-weight-bold">{name}</h3>
        <span className="product-price is-size-5">
          {getFormattedPrice(getCoffeePrice(coffeeState))}
        </span>
        <label htmlFor={`add-sugar-${id}`} className="checkbox product-option">
          <input
            id={`add-sugar-${id}`}
            type="checkbox"
            checked={coffeeState.addSugar}
            onChange={(e) =>
              setCoffeeState((prev) => ({
                ...prev,
                addSugar: e.target.checked,
              }))
            }
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
            checked={coffeeState.addShot}
            onChange={(e) =>
              setCoffeeState((prev) => ({
                ...prev,
                addShot: e.target.checked,
              }))
            }
          />
          Extra Espresso Shot + $1.00
        </label>
      </div>
      <button
        className="button is-small"
        onClick={addToCartHandler}
      >
        Add to Cart
      </button>
    </div>
  );
}
