import React, { Component } from "react";

export class Regular extends React.Component<{ name: string }> {
  shouldComponentUpdate = (
    nextProps: Readonly<{ name: string }>,
    nextState: Readonly<{ changed: string }>
  ) => {
    if (nextProps.name == "ignore") return false;
    // recursion: this.setState({ changed: `${nextProps} -> ${nextState}` });
    return true;
  };
  render() {
    console.log(`Regular render "${this.props.name}"`);
    return <div>Regular {this.props.name}</div>;
  }
}

export default Regular;
