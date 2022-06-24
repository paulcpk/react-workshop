import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  COFFEE_OPTION_STRINGS,
  getCoffeePrice,
  getFormattedPrice,
} from '../../utils/getCoffeePrice'
import {
  checkoutPostOrder,
  removeProduct,
  selectProducts,
  selectStatus,
} from './checkoutSlice'

const getTotal = (productList) =>
  productList
    .map((product) => getCoffeePrice(product))
    .reduce((a, b) => a + b, 0)

const CheckoutItem = (props) => {
  const dispatch = useDispatch()
  const { name, addSugar, addShot, index } = props
  return (
    <div className="checkout-item">
      <span className="checkout-item-title is-size-5 is-family-monospace">
        {name}{' '}
        <button
          className="delete"
          onClick={() => dispatch(removeProduct(index))}
        ></button>
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
  )
}

export default function Checkout() {
  const products = useSelector(selectProducts)
  const status = useSelector(selectStatus)
  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(checkoutPostOrder(products))
    // dispatch(reset())
  }

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return products.length ? (
    <>
      {products.map((product, index) => (
        <CheckoutItem key={index} index={index} {...product} />
      ))}
      <span className="checkout-total-price is-size-4">
        Total: {getFormattedPrice(getTotal(products))}
      </span>
      <button className="button is-fullwidth" onClick={submitHandler}>
        Submit Order
      </button>
    </>
  ) : (
    <p>Nothing to display.</p>
  )
}
