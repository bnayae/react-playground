import React, { Component } from "react";

export class Regular extends React.Component<{ name: string }> {
  render() {
    return <div>Regular {this.props.name}</div>;
  }
}

export default Regular;
