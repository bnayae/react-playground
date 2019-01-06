import React, { Component } from "react";
import { ILifeCycleDemoState } from "./ILifeCycleDemoState";
import { ILifeCycleDemoProps } from "./ILifeCycleDemoProps";
import LifeCycleB from "./LifeCycleB";

export class LifeCycleA extends React.Component<
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
    state.value = props.size;
    console.log("Life-cycle A: getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Life-cycle A: componentDidMount");
  }

  shouldComponentUpdate() {
    // used for optimization
    console.log("Life-cycle A: shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(
    props: ILifeCycleDemoProps,
    state: ILifeCycleDemoState
  ) {
    console.log("Life-cycle A: getSnapshotBeforeUpdate");
    return null; // the return will be the parameter of componentDidUpdate
  }

  componentDidUpdate(
    props: ILifeCycleDemoProps,
    state: ILifeCycleDemoState,
    snapshot: any
  ) {
    // perfect place for side effects
    console.log("Life-cycle A: componentDidUpdate");
  }

  render() {
    console.log("Life-cycle A: render");
    return (
      <>
        <h1>
          Life-cycle A: {this.state.title} = {this.state.value}
        </h1>
        <button onClick={event => this.setState({ value: 100 })}>
          Change State
        </button>
        <LifeCycleB head={`#${this.state.title}`} />
        <hr />
      </>
    );
  }
}

export default LifeCycleA;
