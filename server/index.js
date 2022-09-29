require('dotenv').config();
const express = require("express");

const app = express();
const path = require('path');
const axios = require('axios');
app.use(express.static(path.join(__dirname, "../public")));

app.get("/getdata", (req, res) => {
  var Params = {...req.query,...{apiKey:process.env.API_KEY}};
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

app.get("/stats", (req, res) => {
  return null;
})

app.post("/stats", (req, res) => {
  return null;
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

module.exports = {app};