import { useState } from "react";
import { getFormattedPrice } from "../utils/getCoffeePrice";

export default function Product(props) {
  const [coffeeState, setProductState] = useState(props);
  const { id, name, price, addSugar, addShot } = props;
  // const [optionsState, setOptionsState] = useState([addSugar, addShot])

  return (
    <div className="product">
      <div className="product-content">
        <h3 className="is-family-monospace has-text-weight-bold">{name}</h3>
        <span className="product-price is-size-5">
          {/* {getFormattedPrice(getCoffeePrice(coffeeState))} */}
          {getFormattedPrice(price)}
        </span>
        <label htmlFor={`add-sugar-${id}`} className="checkbox product-option">
          <input
            id={`add-sugar-${id}`}
            type="checkbox" checked={coffeeState.addSugar}
            onChange={(e) =>
              // setProductState((prev) => ({
              //   ...prev,
              //   addSugar: !prev.addSugar,
              // }))
              setProductState((prev) => ({
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
          <input id={`add-espresso-${id}`} type="checkbox" checked={coffeeState.addShot} onChange={(e) =>
              // setProductState((prev) => ({
              //   ...prev,
              //   addShot: !prev.addShot,
              // }))
              setProductState((prev) => ({
                ...prev,
                addShot: e.target.checked,
              }))
            } />
          Extra Espresso Shot + $1.00
        </label>
      </div>
      <button className="button is-small">Add to Cart</button>
    </div>
  );
}
