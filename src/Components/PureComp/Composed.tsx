import React, { Component } from "react";
import Pure from "./Pure";
import Regular from "./Regular";
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
      if (this.state.index % 3 === 0)
        this.setState({ name: "Arik", index: this.state.index + 1 });
      else if (this.state.index % 3 === 1)
        this.setState({ name: "Mike", index: this.state.index + 1 });
      else this.setState({ name: "ignore", index: this.state.index + 1 });
    }, 2000);
  }

  render() {
    return (
      <div>
        Parent {this.state.name}
        <Pure name={this.state.name} />
        <Regular name={this.state.name} />
        <hr />
      </div>
    );
  }
}

export default Composed;
