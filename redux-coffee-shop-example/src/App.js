import React from 'react'
import { Counter } from './features/counter/Counter'
import 'bulma/css/bulma.css'
import './App.css'
import Product from './components/Product'
import Checkout from './features/checkout/Checkout'

const PRODUCT_DEFINITIONS = [
  {
    id: 1,
    name: 'Cappucccino',
    price: 3.5,
  },
  {
    id: 2,
    name: 'Flat White',
    price: 4,
  },
  {
    id: 3,
    name: 'Americano',
    price: 2.5,
  },
  {
    id: 4,
    name: 'Espresso',
    price: 1.5,
  },
  {
    id: 5,
    name: 'Filter Coffee',
    price: 2.5,
  },
]

const addProductOptions = (products) =>
  products.map((product) => ({ ...product, addSugar: false, addShot: false }))

function App() {
  return (
    <div className="app">
      <header className="app-header container">
        <figure className="brand-image">
          <img src="/coffee-shop.png" height={64} width={64} />
        </figure>
        <hr />
      </header>
      <main className="container">
        <div className="app-content">
          <div className="products-panel">
            <h2 className="title has-text-weight-bold">Select a Coffee</h2>
            {addProductOptions(PRODUCT_DEFINITIONS).map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
          <div className="checkout-panel box">
            <h3 className="subtitle has-text-weight-bold">
              Your Order Summary
            </h3>
            <Checkout />
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <Counter />
      </footer>
    </div>
  )
}

export default App
