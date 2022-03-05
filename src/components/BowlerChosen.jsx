import React, { Component, useState } from "react";
import useAnalyseComment from "./hooks/AnalyseComment";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tracker.css";

function BowlerChosen() {
  const ballHook = useAnalyseComment();
  return (
    <div className="col-lg-4">
      <div className="card">
        <div className="card-header">
          <span className="alignleft">Previous Ball</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{ballHook.bowler}</li>
          <li className="list-group-item">
            <button className="btn btn-warning">Undo Last Entry</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default BowlerChosen;
