import React, { useState, useEffect } from "react";
import StatsItems from "./StatsItems.jsx";
import {ModalItem,
  Title,
  BodyContainer,
  BodyContainer2,
} from "./styles/Container.styled";
const axios = require("axios");

var Stats = function (props) {
  const { userInfo, userStat, closeModal} = props;
  var userData = { ...userInfo, ...userStat };
  const [testRecord, SetTestRecord] = useState([]);

  useEffect(() => {
    console.log("sending Post req from client", userData); //check
    axios
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
      <h2>RESULTS!</h2>

      <button onClick={()=>closeModal(false)}>RETURN</button>
      <div>
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
        ))}s
      </div>
    </div>
  );
};

export default Stats;
