// TODO: Implement this component
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

  render() {
    return (
      <div>
        <p>Create new user</p>
        <form>
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
