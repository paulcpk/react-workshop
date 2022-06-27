import { useState } from 'react'
import useAsyncEffect from 'use-async-effect'
import axios from '../api/axios'
import { getModelTable } from '../utils/getModelTable'

const Orders = () => {
  const [orders, setOrders] = useState(null)

  useAsyncEffect(async () => {
    console.log('init')

    try {
      const response = await axios.get('/orders', {
        withCredentials: true,
      })

      console.log('response', response)
      const orderData = response?.data?.data
      setOrders(orderData)
    } catch (err) {
      console.log('err', err)
    }
  }, [])

  return (
    <>
      <header className="app-header">
        <h2>Orders</h2>
      </header>
      {orders && orders.map((order) => (
        <div className="card" style={{marginBottom: '2rem', width: '20rem'}}>
          <div className="card-body">
            {console.log(order)}
            {getModelTable(order)}
          </div>
        </div>
      ))}
    </>
  )
}

export default Orders
