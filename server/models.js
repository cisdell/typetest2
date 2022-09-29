const pool = require("./database.js");

const fetchStat = function(req) {
  var user = req.query.user
  var queryStr = `
  SELECT id, name, slogan, description, category, default_price
  FROM products
  LIMIT ${lim};`;
  return pool.query(queryStr)
}

const postStat = function(req) {
  req.query
  let lim = 5;
  req.query.count ? (lim = req.query.count) : null;
  var queryStr = `
  SELECT id, name, slogan, description, category, default_price
  FROM products
  LIMIT ${lim};`;
  return pool.query(queryStr)
}