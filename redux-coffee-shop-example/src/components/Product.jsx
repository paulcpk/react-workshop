import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  addProduct, // global state setter
} from '../features/checkout/checkoutSlice'
import { getCoffeePrice, getFormattedPrice } from '../utils/getCoffeePrice'

function Product(props) {
  const dispatch = useDispatch()
  const [coffeeState, setProductState] = useState(props)
  const { id, name, addSugar, addShot } = coffeeState

  const addToCartHandler = () => {
    dispatch(addProduct(coffeeState))
    setProductState(props)
  }

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
            onChange={(e) =>
              setProductState((prev) => ({
                ...prev,
                addSugar: e.target.checked,
              }))
            }
            checked={addSugar}
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
            onChange={(e) =>
              setProductState((prev) => ({
                ...prev,
                addShot: e.target.checked,
              }))
            }
            checked={addShot}
          />
          Extra Espresso Shot + $1.00
        </label>
      </div>
      <button className="button is-small" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
