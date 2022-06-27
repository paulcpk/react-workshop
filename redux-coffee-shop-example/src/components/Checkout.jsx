import { useSelector } from "react-redux";
import { selectProducts } from "../features/product/productSlice";

function Checkout() {
  const products = useSelector(selectProducts);

  return (
    <ul>
      {products.map((product) => (
        <li>{product.name}</li>
      ))}
    </ul>
  );
}

export default Checkout;
