require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');
const axios = require('axios');

app.get("/getTests", (req, res) => {
  var Params = {...req.query,...{apiKey:"2698cb711a1349a299581d40562d6b3e"}};
  let config = {
    url:"https://newsapi.org/v2/everything",
    params: Params
  }
  return axios(config)
  .then((result) => {
    console.log(result.data)
    res.send(result.data)})
    .catch(err => console.log(err))
});




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});