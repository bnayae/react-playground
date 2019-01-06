import React, { PureComponent } from "react";

export default class Pure extends React.PureComponent<
  { name: string },
  { changed: string }
> {
  render() {
    console.log(`Pure render "${this.props.name}"`); //handle should component update with a shallow comparison of props and state
    return <div>Pure {this.props.name}</div>;
  }
}
