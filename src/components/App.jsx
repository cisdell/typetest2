import React, { useState, useEffect } from "react";
import Form from "./Form.jsx";
import TestScript from "./TestScript.jsx";
const axios = require("axios");

const App = () => {
  const [testReady, SetTestReady] = useState(true);
  const [typeTestWords, setTypeTestWords] = useState([]);
  const [testTopic, SetTestTopic] = useState("everything");
  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };

  //get data function
  var setTest = function () {
    var params = { q: testTopic };
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

  return (
    <div>
      <h1>TYPING TEST</h1>
      <Form />
      {testReady ? <TestScript testWords={typeTestWords.join('. ')}/> : null}
      <button onClick={() => setTest()}>TEST</button>
    </div>
  );
};
export default App;
