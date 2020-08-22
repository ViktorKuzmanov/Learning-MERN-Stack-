import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

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

  componentDidMount() {
    this.setState({
      username: "testUser1",
      users: ["testUser1", "testUser2"],
    });
    axios.get("http://localhost:5000/users").then((response) => {
      if (response.data.length > 0) {
        this.setState({
          username: response.data[0].username,
          users: response.data.map((user) => user.username),
        });
      }
    });
  }

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  onSubmit = (event) => {
    event.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));

    console.log(exercise);
  };

  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
    console.log(this.state);
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
          <button type="submit">Create exercise</button>
        </form>
      </div>
    );
  }
}
