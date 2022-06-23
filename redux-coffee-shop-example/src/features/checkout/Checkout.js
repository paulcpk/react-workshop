import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  COFFEE_OPTION_STRINGS,
  getCoffeePrice,
  getFormattedPrice,
} from "../../utils/getCoffeePrice";
import {
  addProduct, // global state setter
  selectProducts, // global state getter
} from "./checkoutSlice";

const getTotal = (productList) =>
  productList
    .map((product) => getCoffeePrice(product))
    .reduce((a, b) => a + b, 0);

const CheckoutItem = (props) => {
  console.log("props", props);
  const { name, addSugar, addShot } = props;
  return (
    <div className="checkout-item">
      <span className="checkout-item-title is-size-5 is-family-monospace">
        {name} <button className="delete"></button>
      </span>
      {(addSugar || addSugar) && (
        <ul className="is-size-7">
          {addSugar && <li>{COFFEE_OPTION_STRINGS.addSugar}</li>}
          {addShot && <li>{COFFEE_OPTION_STRINGS.addShot}</li>}
        </ul>
      )}
      <span className="checkout-item-price has-text-weight-bold">
        {getFormattedPrice(getCoffeePrice(props))}
      </span>
    </div>
  );
};

export default function Checkout() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("products were updated");
    console.log("products", products);

    console.log("getTotal(products))", getTotal(products));
  }, [products]);

  return (
    <>
      <h3 className="subtitle has-text-weight-bold">Your Order Summary</h3>
      {products.length ? (
        <>
          {products.map((product, index) => (
            <CheckoutItem key={index} {...product} />
          ))}
          <span className="checkout-total-price is-size-4">
            Total: {getFormattedPrice(getTotal(products))}
          </span>
          <button className="button is-fullwidth">Submit Order</button>
        </>
      ) : (
        <p>Nothing to display.</p>
      )}
    </>
  );
}
