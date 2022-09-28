import React, { useState, useEffect } from 'react';
var TestScript = function(props) {

  var {testWords} = props;
  const [tester, SetTester] = useState('')
// const [tester, SetTester] = useState('')
  const [startTime, SetStartTime] = useState(null)
  const [endTime, SetEndTime] = useState(null)
  var onChange = function(e) {
    return null;
  }
  var grader = function() {

  }
  var startTimer = function() {

  }
  var endTimer = function() {}

  // console.log(props)
  return(<div>
    <textarea
          maxLength="60"
          rows="7"
          cols="80"
          name="summary"
          placeholder="Type everything in this box below as soon as you can and press Submit!"
          value={testWords}
        ></textarea>
        <br></br>
        <textarea
          maxLength="60"
          rows="7"
          cols="80"
          name="summary"
          placeholder="TYPE HERE!"
          // value={}
        ></textarea>
  </div>)
}

export default TestScript