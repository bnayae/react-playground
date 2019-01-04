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

class Form extends React.Component<MyProps, MyState> {
  constructor(props: Readonly<MyProps> = { message: "" }) {
    super(props);
    this.state = {
      userName: this.props.message,
      topic: "react"
    };
  }

  static defaultProps: MyProps = { message: "default" }; // default for props

  handleUserChanged = (event: any) => {
    this.setState({
      userName: event.target.value
    });
  };

  handleCommentChanged = (event: any) => {
    this.setState({
      comment: event.target.value
    });
  };

  handleTopicChanged = (event: any) => {
    this.setState({
      topic: event.target.value
    });
  };

  onSubmitHandler = (event: any) => {
    alert(`${this.state.userName}: ${this.state.topic}, ${this.state.comment}`);
    event.preventDefault();
  };

  render() {
    const { userName, comment, topic, summary } = this.state; // destructor

    return (
      <form action="" onSubmit={this.onSubmitHandler}>
        <div>
          <label>user name:</label>
          <input
            type="text"
            value={userName}
            onChange={this.handleUserChanged}
          />
          <label>{userName}</label>
        </div>
        <div>
          <label>comment:</label>
          <textarea value={comment} onChange={this.handleCommentChanged} />
          <label>{comment}</label>
        </div>
        <div>
          <label>Topic:</label>
          <select value={topic} onChange={this.handleTopicChanged}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
          <label>{topic}</label>
        </div>
        <button type="submit">Submit</button>
        <hr />
      </form>
    );
  }
}

export default Form;
