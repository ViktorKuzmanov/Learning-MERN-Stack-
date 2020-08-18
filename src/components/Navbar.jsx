import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">Exercise tracker</Link>
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/">Exercises</Link>
            </li>
            <li className="nav-item">
              <Link to="/create">Create exercise log</Link>
            </li>
            <li className="nav-item">
              <Link to="/user">Create user</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
