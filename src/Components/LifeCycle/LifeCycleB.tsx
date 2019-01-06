import React, { Component } from "react";
import { ILifeCycleDemoState } from "./ILifeCycleDemoState";
import { ILifeCycleDemoProps } from "./ILifeCycleDemoProps";

export class LifeCycleB extends React.Component<
  ILifeCycleDemoProps,
  ILifeCycleDemoState
> {
  constructor(props: ILifeCycleDemoProps) {
    super(props);

    this.state = { title: this.props.head };
  }

  static getDerivedStateFromProps(
    props: ILifeCycleDemoProps,
    state: ILifeCycleDemoState
  ) {
    // shouldn't cause any side effect
    // should set the state according to the props
    state.value = props.size || 42;
    console.log("Life-cycle B: getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life-cycle B: componentDidMount");
  }

  shouldComponentUpdate() {
    // used for optimization
    console.log("Life-cycle B: shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(
    props: ILifeCycleDemoProps,
    state: ILifeCycleDemoState
  ) {
    console.log("Life-cycle B: getSnapshotBeforeUpdate");
    return "Hello from snapshot"; // the return will be the parameter of componentDidUpdate
  }

  componentDidUpdate(
    props: ILifeCycleDemoProps,
    state: ILifeCycleDemoState,
    snapshot: string
  ) {
    // perfect place for side effects
    console.log(`Life-cycle B: componentDidUpdate "${snapshot}"`);
  }

  render() {
    console.log("Life-cycle B: render");
    return (
      <>
        <h1>
          Life-cycle B: {this.state.title} = {this.state.value}
        </h1>
        <hr />
      </>
    );
  }
}

export default LifeCycleB;
