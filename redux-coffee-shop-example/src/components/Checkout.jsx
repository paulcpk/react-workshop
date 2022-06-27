import { useSelector } from "react-redux";
import { selectProducts } from "../features/product/productSlice";
import { getCoffeePrice, getFormattedPrice } from "../utils/getCoffeePrice";

function Checkout() {
  const products = useSelector(selectProducts);

  return (
    <ul>
      {products.map((product) => (
        <li>{product.name}, {getFormattedPrice(getCoffeePrice(product))}, <button>X</button></li>
      ))}
    </ul>
  );
}

export default Checkout;
