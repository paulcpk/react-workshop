import React from "react";

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidMount");

    // state updated
    console.log("this.state.count", this.state.count);
  }

  render() {
    return (
      <button
        onClick={() => this.setState({ count: this.state.count + 1 })}
        style={{ display: "block", marginBottom: "1rem" }}
      >
        Count: {this.state.count}
      </button>
    );
  }
}
