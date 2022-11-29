import { useEffect, useState } from 'react'
import './App.css'
import * as db from './db.json'
import CityList from './CityList'

function getMockFeatureFlag() {
  return false;
}

function App() {
  const [count, setCount] = useState(0)
  const [cities, setCities] = useState([])
  const useServerData = getMockFeatureFlag()


  const staticData = [
    {
      id: 1,
      title: "Munich",
      specs: {
        country: "Germany",
      },
    },
    {
      id: 2,
      title: "Oslo",
      specs: {
        country: "Norway",
      },
    },
  ];

  // load mock data on initialization
  useEffect(() => {
    if (useServerData) {
      // this could be loaded from an external API
      setTimeout(() => {
        setCities(db.default)
      }, 500)
    } else {
      setCities(staticData)
    }
  }, [])

  console.log('render');

  return (
    <div className="app">
      <h1>
        React.useEffect() &<br /> react-hooks/exhaustive-deps
      </h1>
      <div className="card">
        <CityList
          cities={cities}
        />
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
