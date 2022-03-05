import React, { Component, useState } from "react";
import useAnalyseComment from "./hooks/AnalyseComment";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Tracker.css";
import BowlerPanel from "./BowlerPanel";

function Tracker() {
  const [comment, setComment] = useState("");
  const ballHook = useAnalyseComment();

  const handleCommentChange = event => {
    setComment(event.target.value);
  };
  let isBowlerFound = !(ballHook.ball === 0 && ballHook.extraMode === "");

  return (
    <div className="container">
      <div className="jumbotron row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <span className="alignleft">{ballHook.match.team}</span>
              <span className="alignright">
                0/0 ({ballHook.over}.{ballHook.ball})
              </span>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{ballHook.striker}</li>
              <li className="list-group-item">{ballHook.nonStriker}</li>
              <li className="list-group-item">This over: 0 1 4 0</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4">
          <form
            onSubmit={e => {
              e.preventDefault();
              ballHook.identifyBall(comment);
            }}
          >
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  0.5
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Comment!"
                aria-label="Comment"
                aria-describedby="basic-addon1"
                value={comment}
                onChange={handleCommentChange}
              />
              <button
                className="go-btn btn btn-success"
                type="submit"
                value="Submit"
              >
                Go!
              </button>
            </div>
          </form>
        </div>

        <BowlerPanel isBowlerFound={isBowlerFound} />
      </div>
    </div>
  );
}

export default Tracker;
