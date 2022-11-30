import { useEffect, useState, useMemo } from 'react'
import './App.css'
import * as db from './db.json'
import CityList from './CityList'

// Mock feature flag implementation
const getMockFeatureFlag = () => false

const getUrlParams = (id) => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get(id)
}

const staticData = [
  {
    id: 1,
    title: 'Munich',
    specs: {
      country: 'Germany',
    },
  },
  {
    id: 2,
    title: 'Oslo',
    specs: {
      country: 'Norway',
    },
  },
]

function App() {
  const [count, setCount] = useState(0)
  const [cities, setCities] = useState(staticData)

  const selected = parseInt(getUrlParams('selected'))
  const loadServerDataFeature = getMockFeatureFlag()

  // load mock data on initialization
  useEffect(() => {
    // this could be loaded from an external API
    setTimeout(() => {
      if (loadServerDataFeature) {
        setCities(db.default)
      } else {
        setCities(staticData)
      }
    }, 500)
  }, [])

  console.log('render')

  return (
    <div className="app">
      <h1>
        React.useEffect() &<br /> react-hooks/exhaustive-deps
      </h1>
      <div className="card">
        <CityList cities={cities} selected={selected} />
      </div>
      <div className="card">
        <h2>Unrelated Counter</h2>
        <button onClick={() => setCount((curr) => curr + 1)}>Count +1</button>
        <p>Current counter is {count}</p>
      </div>
    </div>
  )
}

export default App
