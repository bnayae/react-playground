import React, { Component } from "react";
import Pure from "./Pure";
import Regular from "./Regular";
import Memo from "./Memo.js";

export class Composed extends React.Component<
  any,
  { name: string; index: number }
> {
  constructor(props: any) {
    super(props);

    this.state = { name: "Ben", index: 1 };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.index % 4 === 0 || this.state.index % 4 === 1) {
        // pure component shouldn't be update on % 1
        this.setState({ name: "Arik", index: this.state.index + 1 });
      } else if (this.state.index % 3 === 1)
        this.setState({ name: "Mike", index: this.state.index + 1 });
      else this.setState({ name: "ignore", index: this.state.index + 1 });
    }, 2000);
  }

  render() {
    // <> is React.Fragment shortcut
    return (
      <>
        Parent {this.state.name}
        <Pure name={this.state.name} />
        <Memo name={this.state.name} />
        <Regular name={this.state.name} />
        <hr />
      </>
    );
  }
}

export default Composed;
