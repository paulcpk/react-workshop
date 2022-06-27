import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  removeProduct,
} from "../features/product/productSlice";
import { getCoffeePrice, getFormattedPrice } from "../utils/getCoffeePrice";

function Checkout() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

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
      <hr />
      <h4>TOTAL: ??</h4>
    </>
  );
}

export default Checkout;
