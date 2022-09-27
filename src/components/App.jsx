import React, { useState, useEffect } from "react";
import Form from "./Form.jsx";
import TestScript from "./TestScript.jsx";
const axios = require("axios");

const App = () => {
  const [testReady, SetTestReady] = useState(true);
  const [typeTestWords, setTypeTestWords] = useState("");
  const [testTopic, SetTestTopic] = useState("everything");

  //get data function
  var getTest = function () {
    var params = {q: testTopic};
    return axios
      .get("/getdata", { params })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>TYPING TEST</h1>
      <Form />
      {testReady ? <TestScript /> : null}
      <button onClick={() => getTest()}>TEST</button>
    </div>
  );
};
export default App;
