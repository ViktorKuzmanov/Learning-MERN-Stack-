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
  render() {
    return <p>ExercisesList component</p>;
  }
}
