import React, { Component } from "react";

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [] };
  }

  render() {
    return <p>ExercisesList component</p>;
  }
}
