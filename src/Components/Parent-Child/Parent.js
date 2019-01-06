import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "mike"
    };
  }

  render() {
    return (
      // <> is React.Fragment shortcut
      <>
        <h2>Parent Child</h2>
        <Child handler={this.greet} />
        <hr />
      </>
    );
  }

  greet = childName => alert(`Hello ${this.state.message} from ${childName}`);
}

export default Parent;
