import { useState, useEffect } from "react"

const CityList =
  ({ cities }) => {
  const [loading, setLoading] = useState(true)
    console.log('run CityList component')

    // do we need this?
    useEffect(() => {
      if (cities.length) {
        setLoading(false)
      }
    }, [cities.length])

    if (loading) {
      return <p>{'Loading...'}</p>
    }

    // Or can this be enough
    // if (!cities.length) {
    //   return <p>{'Loading...'}</p>
    // }

    return (
        <ul className="post-list">
          {cities.map((city) => (
            <li
              key={city.id}
            >
              {city.title} | {city.specs.country}
            </li>
          ))}
        </ul>
    )
  }


export default CityList
