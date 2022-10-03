import React, { useState, useEffect } from "react";
import {Main, Title2, ModalItem,
  Title,
  BodyContainer,
  BodyContainer2,
} from "./styles/Container.styled";
import Form from "./Form.jsx";
import TestScript from "./TestScript.jsx";
import Stats from "./Stats.jsx";
const axios = require("axios");

const App = function () {
  const [testReady, SetTestReady] = useState(true);
  const [statReady, SetStatReady] = useState(false);
  const [userInfo, SetUserInfo] = useState({});
  const [userStat, SetUserStat] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [typeTestWords, setTypeTestWords] = useState([]);
  const [testTopic, SetTestTopic] = useState("everything");

  var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  };
  var setUserEmail = function (e, email) {
    e.preventDefault();
    SetUserEmail(email);
  };

  //get data function
  var setTest = function (e, topic = "everything") {
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
  return (
    <div>
      <Title>TYPE MASTER</Title>
      <Title2>Improve your typing speed and accuracy!</Title2>
      {openModal && (
        <ModalItem>
          <Stats
            userInfo={userInfo}
            userStat={userStat}
            closeModal={setOpenModal}
          />
        </ModalItem>
      )}
      <BodyContainer>
        <Form setTest={setTest} SetUserInfo={SetUserInfo} />
      </BodyContainer>
      <BodyContainer2>
        <TestScript
          SetStatReady={SetStatReady}
          SetUserStat={SetUserStat}
          openModal={setOpenModal}
          testWords={typeTestWords.join(". ")}
        />
      </BodyContainer2>
    </div>
  );
};
export default App;
