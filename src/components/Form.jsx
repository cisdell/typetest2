import React, { useState, useEffect } from "react";
const axios = require("axios");
var Form = function (props) {
  const { setTest, SetUserInfo } = props;
  // console.log(SetUserInfo)

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    testWord: "everything",
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }
  useEffect(()=> {
    console.log('useeffect from form.jsx')
    SetUserInfo(state)
  }, [state])

  return (
    <form>
      <label for="firstName"> Enter Your First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeHolder="Mike"
        onChange={handleChange}
        required
      ></input>
      <br />
      <label for="lastName"> Enter Your Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeHolder="Tyson"
        onChange={handleChange}
        required
      ></input>
      <br />
      <label for="email"> Enter email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeHolder="email"
        onChange={handleChange}
        required
      ></input>
      <br />
      <label for="testWord"> Enter a Random Word:</label>
      <input
        type="text"
        id="testWord"
        name="testWord"
        placeHolder="Random Word"
        onChange={handleChange}
        required
      ></input>
      <br/>
      <button onClick={
        (e)=>setTest(e, state.testWord)
        }>LOAD MY TEST!</button>
    </form>
  );
};

export default Form;
