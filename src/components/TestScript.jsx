import React, { useState, useEffect } from "react";
import Stats from "./stats.jsx";
//lanuches
var TestScript = function (props) {
  var { testWords, SetUserStat, SetStatReady, openModal} = props;
  const [tester, SetTester] = useState("");
  // const [tester, SetTester] = useState('')
  const [startTime, SetStartTime] = useState(null);
  const [statPage, SetStatPage] = useState(false);

  const onChange = function (e) {
    if (e.target.name === "attempts") {
      SetTester(e.target.value);
    }
    if (!startTime) {
      SetStartTime(new Date())
    }
  };
  const grader = function (e, t1, t2) {
    e.preventDefault();
    // dur = SetDuration( (new Date()-startTime)/1000);
    var dur = (new Date()-startTime)/1000;
    let diffArr = [];
    for (let i = 0; i < t1.length; i += 1) {
      t1[i] !== t2[i] ? diffArr.push(t2[i]) : null;
    }
    let accuracyRate = (1 - diffArr.length / t1.length) * 100;
    //let duration = 34; //will have to change later
    let wpm = t2.split(" ").length * (60 / dur);
    let userdata = { acc_rate: accuracyRate, duration: dur, wpm: wpm };
    SetUserStat(userdata);
  };
  // const startTimeFunc = function() {
  //   SetStartTime(1)
  //   //SetStartTime(new Date());
  // }

  return (
    <div>
      {statPage ? <Stats duration={endTime} SetStatPage={SetStatPage} /> : null}
      <textarea
        maxLength="60"
        rows="7"
        cols="80"
        name="answers"
        placeholder="Type everything in this box below as soon as you can and press Submit!"
        readOnly
        value={testWords}
      ></textarea>
      <br></br>
      <textarea
        maxLength="400"
        rows="7"
        cols="80"
        name="attempts"
        placeholder="When you type the clock starts! Click 'I'M DONE' when you finish!"
        onChange={onChange}
        // onkeypress={startTimeFunc}
        // value={}
      ></textarea>
      <br />
      <button
        onClick={(e) => {
          grader(e, testWords, tester);
          SetStatReady(true);
          openModal(true);
          SetStartTime(null);
        }}
      >
        I'M DONE!
      </button>
    </div>
  );
};

export default TestScript;
