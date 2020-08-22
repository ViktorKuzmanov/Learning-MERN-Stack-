import React, { Component } from "react";
import axios from "axios";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises")
      .then((response) => {
        this.setState({ exercises: response.data });
        console.log(this.state.exercises);
      })
      .catch((err) => console.log(err));
  }

  exercisesList = () => {
    return this.state.exercises.map((currentexercise) => {
      return (
        <Exercise
          exercise={currentexercise}
          deleteExercise={this.deleteExercise}
          key={currentexercise._id}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h3>Exercises:</h3>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exercisesList()}</tbody>
        </table>
      </div>
    );
  }
}
