import React, { useState, useEffect } from "react";

var StatsItems = function (props) {
  console.log(props);
  const {
    acc_rate,
    created_at,
    duration,
    email,
    first_name,
    last_name,
    id,
    test_word,
    wpm,
  } = props;

  return (
    <ul>
      <li>Test Date{created_at}</li>
      <li>Accurate Rate{acc_rate}"%"</li>
      <li>TestWord{test_word}</li>
      <li>Duration{duration} Seconds</li>
    </ul>
  );
};

export default StatsItems;
