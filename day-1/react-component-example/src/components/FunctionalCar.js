import React, { useEffect } from 'react'

const Car = (props) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('Function based car has mounted')
  }, [])

  return <div style={{marginBottom: '1rem'}}>Hi, I am a {props.color} Car! 🚙</div>
}

export default Car
