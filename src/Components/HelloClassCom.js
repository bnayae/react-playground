import React, { Component } from "react";

// class component can have internal state
// can provide life-cycle hooks
// this.props are immutable

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.Name}(class component)</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
