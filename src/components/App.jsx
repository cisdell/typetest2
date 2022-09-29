import React, { useState, useEffect } from "react";
import Form from "./Form.jsx";
import TestScript from "./TestScript.jsx";
import Stats from "./Stats.jsx";
const axios = require("axios");

const App = function() {
  const [testReady, SetTestReady] = useState(true);
  const [statReady, SetStatReady] = useState(false);
  const [userInfo, SetUserInfo] = useState({});
  const [userStat, SetUserStat] = useState({});
  const [typeTestWords, setTypeTestWords] = useState([]);
  const [testTopic, SetTestTopic] = useState("everything");


  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };
  var setUserEmail = function(e, email) {
    e.preventDefault();
    SetUserEmail(email);
  }

  //get data function
  var setTest = function (e, topic='everything') {
    e.preventDefault();
    var params = { q: topic };
    return axios
      .get("/getdata", { params })
      .then((result) => {
        // setTypeTestWords(result.data.)
        var meat0 = result.data.articles[0].title;
        var meat1 = result.data.articles[1].title;
        var meat2 = result.data.articles[2].title;
        setTypeTestWords([meat0, meat1, meat2]);
        // console.log(result.data.articles);
      })
      .catch((err) => console.log(err));
  };
  var postResult = function() {

  }

  return (
    <div>
      <h1>TYPING TEST</h1>
      {statReady ? <Stats userInfo={userInfo} userStat={userStat}/>: null}
      <Form setTest={setTest} SetUserInfo={SetUserInfo}/>
      {testReady ? <TestScript SetStatReady={SetStatReady} SetUserStat={SetUserStat} testWords={typeTestWords.join('. ')}/> : null}
    </div>
  );
};
export default App;
