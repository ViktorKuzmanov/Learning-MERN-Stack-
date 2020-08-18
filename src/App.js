import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={ExercisesList} />
    </Router>
  );
}

export default App;
