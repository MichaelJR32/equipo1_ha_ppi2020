import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class NavbarPage extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/home" nav className="navbar-brand">
          <img
            src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/388/aiga_taxi-256.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          Learning Drive
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/home" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/senalesp1" className="nav-link">
                Clases
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/progress" className="nav-link">
                Progreso
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
