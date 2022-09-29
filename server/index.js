require('dotenv').config();
const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const path = require('path');
const axios = require('axios');
const models = require("./models.js")
app.use(bodyParser.json());
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
  models.fetchStat(req)
  .then((results)=> {
    console.log(results)
    res.send(results.rows)
  })
  .catch(err => console.log(err))
});

app.post("/stats", (req, res) => {
  console.log('received post')
  models.postStat(req)
  .then((results)=> {
    console.log(results)
    res.sendStatus(201);
  })
  .catch(err => console.log(err))
});



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

module.exports = {app};