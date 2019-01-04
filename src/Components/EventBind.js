import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello"
    };

    this.ctorBindClickHandler = this.ctorBindClickHandler.bind(this); // safety recommendation for event handler
  }

  // ASK: how to flow the props?
  clickHandler() {
    console.log(this);
    this.setState({ message: "Next time " });
  }
  ctorBindClickHandler() {
    console.log(this);
    this.setState({ message: "Ctor Bind" });
  }

  safeLambdaClickHandler = () => this.setState({ message: "Safe Click" });

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button name="Safe Lambda" onClick={this.safeLambdaClickHandler}>
          Class Lambda
        </button>
        <button name="Ctor Bind" onClick={this.ctorBindClickHandler}>
          Ctor Bind
        </button>
        <button name="Bind" onClick={this.clickHandler.bind(this)}>
          Bind
        </button>
        <button name="Lambda" onClick={() => this.clickHandler()}>
          Lambda
        </button>
        <button
          onClick={() => {
            this.setState({ message: "Goodby" });
          }}
        >
          Nested Lambda
        </button>
      </div>
    );
  }
}

export default EventBind;
