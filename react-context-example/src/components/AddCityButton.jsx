import { useContext, useState } from 'react'
import { WeatherContext } from '../App'

const AddCityButton = (props) => {
  const context = useContext(WeatherContext)
  const [name, setName] = useState('')
  const submit = () => {
    const unit = 'metric';
    const mode = 'json';
    const encodedName = encodeURIComponent(name);
    console.log('process.env', process.env);
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&mode=${mode}&q=${encodedName}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    })
      .then(response => {
        console.log(response);
        if (response.status !== 200) throw new Error();
        return response.json();
      }).then(json => {
        console.log(json);
        context.addCity(name, json.main.temp);
        setName('');
      })
      .catch(err => {
        console.log(err);
      });
  };
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
