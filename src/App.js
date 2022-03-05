import "./App.css";
import Tracker from "./components/TrackerHook";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link">Features</a>
            <a className="nav-item nav-link">Pricing</a>
            <a
              className="nav-item nav-link disabled"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>

      <div className="dashboard">
        <Tracker />
      </div>
    </React.Fragment>
  );
}

export default App;
