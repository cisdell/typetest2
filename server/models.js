const pool = require("./database.js");

const fetchStat = function(req) {
  var email = req.body.email;
  var queryStr = `
  SELECT * FROM type_test
  WHERE email = ${email}
  ORDER BY created_at DESC
  LIMIT 10;
  `;
  return pool.query(queryStr)
}

const postStat = function(req) {
  // console.log(req.body);
  const {email, firstName, lastName, testWord, acc_rate, duration, wpm} = req.body;
  console.log(email, firstName, lastName, testWord, acc_rate, duration, wpm)
  var queryStr = `
  INSERT INTO type_test('email', 'first_name', 'last_name', 'test_word', 'acc_rate', 'duration', 'WPM')
  VALUES (${email}, ${firstName}, ${lastName}, ${testWord}, ${acc_rate}, ${duration}, ${wpm})
  `;
  return pool.query(queryStr)
}

module.exports = {fetchStat, postStat}