const pool = require("./database.js");

const fetchStat = function(req) {
  var {email} = req.query;

  console.log('get received in server', req)
  var queryStr = `
  SELECT * FROM type_test
  WHERE email = '${email}'
  ORDER BY created_at DESC
  LIMIT 5;
  `;
  console.log('get processed in server')
  return pool.query(queryStr)
}

const postStat = function(req) {
  console.log('post req received')
  // console.log(req.body.userData);
  const {email, firstName, lastName, testWord, acc_rate, duration, wpm} = req.body.userData;
  // console.log(email, firstName, lastName, testWord, acc_rate, duration, wpm)
  var queryStr = `
  INSERT INTO type_test(email, first_name, last_name, test_word, acc_rate, duration, WPM)
  VALUES ('${email}', '${firstName}', '${lastName}', '${testWord}', ${acc_rate}, ${duration}, ${wpm})
  `;
  console.log('post req processed')
  return pool.query(queryStr)
}

module.exports = {fetchStat, postStat}