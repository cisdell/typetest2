import React, { useState, useEffect } from 'react';
import Form from './Form.jsx'
import TestScript from './TestScript.jsx'
const axios = require("axios");

const App = () => {
  const [testReady, SetTestReady] = useState(true);
  const [testwords, setTestWords] = useState('');
  var getTest = function() {
    var params = {
      q:'russia'
    }
  }


  return (
    <div>
      <h1>TYPING TEST</h1>
      <Form/>
      {testReady? <TestScript/>: null}
    </div>
  );
};
export default App;
