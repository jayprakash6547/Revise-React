import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>
          Hovered {this.state.count} times
        </h2>
      </div>
    );
  }
}

export default HoverCounter;
