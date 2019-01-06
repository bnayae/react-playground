import React, { Component } from "react";

export interface MyProps {
  message: string;
}
type MyState = {
  userName: string;
  comment?: string;
  topic: string;
  summary?: string;
};

class FormWithCentralStateHandling extends React.Component<MyProps, MyState> {
  constructor(props: Readonly<MyProps> = { message: "" }) {
    super(props);
    this.state = {
      userName: this.props.message,
      topic: "react"
    };
  }

  static defaultProps: MyProps = { message: "default" }; // default for props

  handleChange = (e: any) => {
    // this syntax preserve 'this' like the use of 'bind'

    // If you are using babel, you can use ES 6 dictionary syntax
    // let change = { [e.target.name] = e.target.value }
    let change: any = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  onSubmitHandler = (event: any) => {
    alert(`${this.state.userName}: ${this.state.topic}, ${this.state.comment}`);
    event.preventDefault();
  };

  render() {
    const { userName, comment, topic, summary } = this.state; // destructor

    return (
      <>
        <h3>Form Central ({this.props.message})</h3>
        <form action="" onSubmit={this.onSubmitHandler}>
          <div>
            <label>user name:</label>
            <input
              name="userName"
              type="text"
              value={userName}
              onChange={this.handleChange}
            />
            <label>{userName}</label>
          </div>
          <div>
            <label>comment:</label>
            <textarea
              name="comment"
              value={comment}
              onChange={this.handleChange}
            />
            <label>{comment}</label>
          </div>
          <div>
            <label>Topic:</label>
            <select name="topic" value={topic} onChange={this.handleChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
            <label>{topic}</label>
          </div>
          <button type="submit">Submit</button>
          <hr />
        </form>
      </>
    );
  }
}

export default FormWithCentralStateHandling;
