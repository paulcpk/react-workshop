export default function Product(props) {
  // const name = props.name
  const { id, name, price } = props;

  return (
    <div className="product">
      <div className="product-content">
        <h3 className="is-family-monospace has-text-weight-bold">{name}</h3>
        <span className="product-price is-size-5">
          {/* {getFormattedPrice(getCoffeePrice(coffeeState))} */}
        </span>
        <label htmlFor={`add-sugar-${id}`} className="checkbox product-option">
          <input
            id={`add-sugar-${id}`}
            type="checkbox"
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
          />
          Extra Espresso Shot + $1.00
        </label>
      </div>
      <button className="button is-small">
        Add to Cart
      </button>
    </div>
  )
}
