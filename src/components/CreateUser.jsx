import React, { Component } from "react";

export default class CreateUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
    console.log(this.state.username);
  };

  onSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: this.state.username,
    };
    this.setState({ username: "" });
  };

  render() {
    return (
      <div>
        <p>Create new user</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onChangeUsername}
            placeholder="username"
            value={this.state.username}
            required
          />
          <button type="submit">Create user</button>
        </form>
      </div>
    );
  }
}
