import { createContext, useState } from 'react'
import './App.css'
import AddCityButton from './components/AddCityButton'
import CityList from './components/CityList'
import TemperatureAverage from './components/TemperatureAverage'

// Credits: https://rapidapi.com/blog/react-context-api/

export const WeatherContext = createContext({
  cities: [],
  addCity: (name, temperature) => {},
})

function App() {
  const [cities, setCities] = useState([])
  const addCity = (name, temperature) => {
    const newCity = { name, temperature }
    setCities((prevCities) => [...prevCities, { name, temperature }])
  }
  return (
    <WeatherContext.Provider
      value={{
        cities,
        addCity,
      }}
    >
      <div className="city-overview">
        <h2>Multi-Weather App</h2>
        <CityList />
        <AddCityButton />
        <TemperatureAverage />
      </div>
    </WeatherContext.Provider>
  )
}

export default App
