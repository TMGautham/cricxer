import React, { Component, useState } from "react";
import BowlerSelection from "./BowlerSelection";
import BowlerChosen from "./BowlerChosen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tracker.css";

function BowlerPanel(props) {
  const isBowlerFound = props.isBowlerFound;
  console.log(isBowlerFound);
  if (isBowlerFound) {
    return <BowlerChosen />;
  } else {
    return <BowlerSelection />;
  }
}

export default BowlerPanel;
