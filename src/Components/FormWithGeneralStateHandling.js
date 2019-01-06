import React, { Component } from "react";

class FormWithGeneralStateHandling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "bnaya",
      comment: "",
      topic: "react",
      summary: ""
    };
  }

  handleChange(e) {
    // If you are using babel, you can use ES 6 dictionary syntax
    // let change = { [e.target.name] = e.target.value }
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  onSubmitHandler = event => {
    alert(`${this.state.userName}: ${this.state.topic}, ${this.state.comment}`);
    event.preventDefault();
  };

  render() {
    const { userName, comment, topic } = this.state; // destructor

    return (
      <>
        <h3>General Form Handler</h3>
        <form action="" onSubmit={this.onSubmitHandler}>
          <div>
            <label>user name:</label>
            <input
              name="userName"
              type="text"
              value={userName}
              onChange={this.handleChange.bind(this)}
            />
            <label>{userName}</label>
          </div>
          <div>
            <label>comment:</label>
            <textarea
              name="comment"
              value={comment}
              onChange={this.handleChange.bind(this)}
            />
            <label>{comment}</label>
          </div>
          <div>
            <label>Topic:</label>
            <select
              name="topic"
              value={topic}
              onChange={this.handleChange.bind(this)}
            >
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

export default FormWithGeneralStateHandling;
