import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import Greet from "./Components/HelloFuncComp"; // used for default components
import { Greet } from "./Components/HelloFuncComp";
import Welcome from "./Components/HelloClassCom";
import Counter from "./Components/Counter";
import EventBind from "./Components/EventBind";
import Parent from "./Components/Parent-Child/Parent";
import ListSample from "./Components/ListSample";
import StyleSheet from "./Components/Css/Stylesheet";
import Form from "./Components/Form";
import Composed from "./Components/PureComp/Composed";
import LifeCycleA from "./Components/LifeCycle/LifeCycleA";
import FormWithGeneralStateHandling from "./Components/FormWithGeneralStateHandling";

class App extends Component {
  render() {
    var now = new Date();
    var ticks = now.getTime();
    let useStyle = ticks % 2 == 0;
    return (
      <div className="App">
        <LifeCycleA head="Some Title" size={10} />
        <Composed />
        <FormWithGeneralStateHandling />
        <Form />
        <Form message="Hi" />
        <StyleSheet useStyle={useStyle} />
        <ListSample />
        <Parent />
        <Counter />
        <Counter Name="John" />
        <hr />
        <EventBind />
        <hr />
        <Greet>
          <p>This is children tag</p>
        </Greet>
        <Greet Id="1">
          <button>Action</button>
        </Greet>
        <Greet Id="2" Name="Bnaya" />
        <hr />
        <Welcome>
          <h3>Child Data</h3>
        </Welcome>
        <Welcome Name="Bnaya" />
        <Welcome />
      </div>
    );
  }
}

export default App;
