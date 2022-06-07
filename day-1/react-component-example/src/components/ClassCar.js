import React from 'react'

export default class Car extends React.Component {
  componentDidMount() {
    console.log('Class based car has mounted')
  }

  render() {
    return <div style={{marginBottom: '1rem'}}>Hi, I am a {this.props.color} Car! 🚙</div>
  }
}
