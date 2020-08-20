import React, { Component } from "react";

export default class CreateExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  render() {
    return (
      <div>
        <h3>Create exercise</h3>
        <form action="" onSubmit={this.onSubmit}>
          <label>Username:</label>
          <select>
            {this.state.users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
          <input
            onChange={this.onChange}
            type="text"
            name="description"
            placeholder="description"
            value={this.state.description}
          />
          <input
            onChange={this.onChange}
            type="number"
            name="duration"
            placeholder="duration"
            value={this.state.duration}
          />
          <button type="submit">Create exercise</button>
        </form>
      </div>
    );
  }
}
