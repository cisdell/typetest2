require("dotenv").config();
const { Pool } = require("pg");
// const pool = require("../app.js");
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});
pool.connect()
.then(()=> {console.log(`successfully connected to ${process.env.DB_NAME}`)})
.catch((err)=> {console.log(err)});


module.exports = pool;
