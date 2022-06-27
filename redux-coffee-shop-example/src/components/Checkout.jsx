import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  removeProduct,
} from "../features/product/productSlice";
import { getCoffeePrice, getFormattedPrice } from "../utils/getCoffeePrice";

const getTotal = (productList) =>
  productList
    .map((product) => getCoffeePrice(product))
    .reduce((prev, current) => prev + current, 0)

function Checkout() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const submitHandler = () => {
    console.log('submit');
  }

  if (!products.length) {
    return <p>Nothing to display.</p>;
  }

  return (
    <>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}, {getFormattedPrice(getCoffeePrice(product))},{" "}
            <button
              onClick={() => {
                dispatch(removeProduct(index));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <span className="checkout-total-price is-size-4">
        Total: {getFormattedPrice(getTotal(products))}
      </span>
      <button className="button is-fullwidth" onClick={submitHandler}>
        Submit Order
      </button>
    </>
  );
}

export default Checkout;
