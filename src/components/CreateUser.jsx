// TODO: Implement this component
import React, { Component } from "react";

export default class CreateUsers extends Component {
  constructor(props) {
    this.state = {
      username: "",
    };
  }

  render() {
    return (
      <div>
        <p>Create new user</p>
        <form>
          <input type="text" placeholder="username" required />
          <button type="submit">Create user</button>
        </form>
      </div>
    );
  }
}
