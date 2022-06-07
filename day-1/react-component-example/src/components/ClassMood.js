import React from 'react'

export default class Mood extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      happy: true,
    }
  }

  render() {
    return (
      <button
        onClick={() => this.setState({ happy: !this.state.happy })}
        style={{display: 'block', marginBottom: '1rem', width: '10rem'}}
      >Mood: {this.state.happy ? 'Happy' : 'Sad'}</button>
    )
  }
}
