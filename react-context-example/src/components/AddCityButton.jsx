import { useContext, useState } from 'react'
import { WeatherContext } from '../App'

const AddCityButton = (props) => {
  const context = useContext(WeatherContext)
  const [name, setName] = useState('')
  const submit = () => {
    context.addCity(name, Math.ceil(Math.random() * 10))
    setName('')
  }
  return (
    <div className="add-city-form">
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="input" onClick={submit}>
        Add
      </button>
    </div>
  )
}

export default AddCityButton
