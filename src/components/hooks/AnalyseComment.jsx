import { useState } from "react";
let pool_base = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "6",
  "w",
  "wd",
  "1wd",
  "2wd",
  "3wd",
  "4wd",
  "nb",
  "1nb",
  "2nb",
  "3nb"
];
let pool_0 = ["no ball", "nb", "noball"];
let pool_1 = ["wide", "wd"];
let pool_2 = ["wicket", "w", "out"];
let pool_3 = ["bye", "byes", "b", "b1", "b2", "b3", "b4"];
let pool_4 = ["leg byes", "leg bye", "lb", "lb1", "lb2", "lb3", "lb4"];
let pool_5 = ["1", "single", "one", "one run", "1 run"];
let pool_6 = ["2", "double", "two", "two run", "two runs", "2 run", "2 runs"];
let pool_7 = [
  "3",
  "triple",
  "three",
  "three run",
  "three runs",
  "3 run",
  "3 runs"
];
let pool_8 = [
  "4",
  "four",
  "boundary",
  "four runs",
  "four run",
  "4 runs",
  "4 run"
];
let pool_9 = ["6", "six", "sixer", "six runs", "six run", "6 runs", "6 run"];
let pool_10 = ["0", "dot", "zero"];
let pool_11 = ["c", "caught", "caught by", "caughtby", "catch"];
let pool_12 = [
  "caught and bowled",
  "caught & bowled",
  "c&b",
  "c & b",
  "c &b",
  "c& b"
];
let pool_13 = ["hit out", "hitout", "hit wicket", "hitwicket"];
let pool_14 = ["bowled", "clean bowled"];
let pool_15 = ["stumped", "stumping"];
let pool_16 = ["lbw", "leg before", "leg before wicket"];
let pool_17 = ["run out", "runout"];
let pool_18 = ["retired hurt", "retires", "retire"];
let pool_19 = ["helmet penalty"];
let pool_20 = ["co", "crossover", "cross over"];
let pool_21 = ["overthrow", "over throw"];
let pool_def_check = [
  ...pool_10,
  ...pool_5,
  ...pool_8,
  ...pool_9,
  ...pool_6,
  ...pool_7
];

function useAnalyseComment() {
  const [match, setMatch] = useState({
    match: "1",
    team: "India",
    innings: 1,
    maxOvers: 20
  });
  const [over, setOver] = useState(0);
  const [ball, setBall] = useState(0);
  const [striker, setStriker] = useState("Rohit Sharma");
  const [nonStriker, setNonStriker] = useState("Shikar Dhawan");
  const [bowler, setBowler] = useState("Mitchell Starc");
  const [run, setRun] = useState(0);
  const [crossOver, setCrossOver] = useState("");
  const [boundary, setBoundary] = useState("");
  const [extraMode, setExtraMode] = useState("");
  const [extraRuns, setExtraRuns] = useState(0);
  const [wicket, setWicket] = useState("");
  const [wicketRuns, setWicketRuns] = useState("");
  const [secondaryWicketTaker, setSecondaryWicketTaker] = useState("");
  const [TertiaryWicketTaker, setTertiaryWicketTaker] = useState("");
  const [code, setCode] = useState("");

  const performCrossOver = () => {
    let player = striker;
    setStriker(nonStriker);
    setNonStriker(player);
  };

  const ballCompletion = (runs, extras) => {
    setRun(runs);
    if (ball !== 5 && extraMode === "") {
      setBall(ball + 1);
      if (runs % 2 !== 0) {
        performCrossOver();
      }
    } else if (ball === 5 && extraMode === "") {
      setBall(0);
      setOver(over + 1);
      if (runs % 2 === 0) {
        performCrossOver();
      }
    }
  };

  const findKeyWords = comment => {
    let collection = comment.split(" ");
    console.log(collection);
    let unparsed = [];
  };

  const changeBowler = value => {
    console.log("Bowler" + value);
    setBowler(value);
    console.log("Middle");
    setStriker("Virat Kohli");
  };

  const identifyBall = comment => {
    let extras = 0;
    console.log("start:" + bowler + "ball" + over + "." + ball);

    // If condition checks for single digit numberic comments like 0,1,2,3,4,6 and processes them
    if (!isNaN(comment) && comment.length === 1) {
      ballCompletion(comment, extras);
    }

    if (comment.toLowerCase() === "w") {
      setWicket("W");
      ballCompletion(comment, extras);
    }

    findKeyWords(comment);
    console.log("end:" + bowler + "ball" + over + "." + ball);
  };
  return {
    match,
    over,
    ball,
    striker,
    nonStriker,
    bowler,
    changeBowler,
    extraMode,
    identifyBall
  };
}

export default useAnalyseComment;
