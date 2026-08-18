import React, { Component } from 'react'
import HoverCounter from './HoverCounter'

 class ClickCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Click {this.state.count} times
        </button>
      
      </div>
    );
  }
}

export default ClickCounter