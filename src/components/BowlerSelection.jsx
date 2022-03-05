import React, { Component, useState } from "react";
import useAnalyseComment from "./hooks/AnalyseComment";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Tracker.css";

function BowlerSelection() {
  const ballHook = useAnalyseComment();
  const handleBowlerChange = event => {
    ballHook.setBowler(event.target.value);
  };
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-header">
          <span className="alignleft">Choose Bowler</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <form
              onChange={e => {
                ballHook.changeBowler(e.target.value);
              }}
            >
              <div className="form-row">
                <div className="form-group col-md-10">
                  <select id="inputState" className="form-control">
                    <option value="Mitchell Starc">Mitchell Starc</option>
                    <option value="Pat Cummins">Pat Cummins</option>
                    <option value="Josh Hazlewood">Josh Hazlewood</option>
                    <option value="Nathan Lyon">Nathan Lyon</option>
                  </select>
                </div>
              </div>
            </form>
          </li>
          <li className="list-group-item">
            <button className="btn btn-warning">Undo Last Entry</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default BowlerSelection;
