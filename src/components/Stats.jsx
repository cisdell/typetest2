import React, { useState, useEffect } from "react";
import StatsItems from "./StatsItems.jsx";
const axios = require("axios");

var Stats = function (props) {
  const { userInfo, userStat } = props;
  var userData = { ...userInfo, ...userStat };
  const [testRecord, SetTestRecord] = useState([
    {
      firstName: "Papa",
      lastName: "Cho",
      email: "cisdell@gmail.com",
      testWord: "Russia",
      acc_rate: 53.888888888888886,
      duration: 30,
      wpm: 1.47058,
    },
  ]);

  useEffect(() => {
    console.log("sending Post req from client", userData); //check
    return axios
      .post("/stats", { userData })
      .then((response) => {
        // console.log(results1);
        return axios.get("/stats", { params: { email: userData.email } });
      })
      .then((response2) => {
        SetTestRecord(response2.data);
        console.log("response2", response2);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2>TEST RECORDS</h2>
      <div>
        (
        {testRecord.map((item) => (
          <StatsItems
            acc_rate={item.acc_rate}
            created_at={item.created_at}
            duration={item.duration}
            email={item.email}
            first_name={item.first_name}
            last_name={item.last_name}
            id={item.id}
            test_word={item.test_word}
            wpm={item.wpm}
          />
        ))}
        )
      </div>
    </div>
  );
};
// first_name={item.first_name}
// last_name={item.last_name}
// id={item.id}
// test_word={item.test_word}
// wpm={item.wpm}

export default Stats;
