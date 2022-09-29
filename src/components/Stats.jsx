import React, { useState, useEffect } from "react";
const axios = require("axios");
// { email: userData.email }
var Stats = function (props) {
  const { userInfo, userStat } = props;
  const userData = { ...userInfo, ...userStat };
  console.log(userData);
  useEffect(() => {
    console.log('Johnny Mok Says console log') //check
    axios.post("/stats", { userData })
    .then((results)=> {
      console.log(results)
    })
    .then(()=>{
      axios.get("/stats",{ params: {email: userData.email} })
    })
    .then((results)=>console.log(results))
  }, []);

  return <div>hello</div>;
};

export default Stats;
