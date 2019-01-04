import React, { PureComponent } from "react";

export default class Pure extends React.PureComponent<
  { name: string },
  { changed: string }
> {
  shouldComponentUpdate = (
    nextProps: Readonly<{ name: string }>,
    nextState: Readonly<{ changed: string }>
  ) => {
    if (nextProps.name == "ignore") return false;
    // recursion: this.setState({ changed: `${nextProps} -> ${nextState}` });
    return true;
  };

  render() {
    return <div>Pure {this.props.name}</div>;
  }
}
