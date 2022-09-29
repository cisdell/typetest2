DROP DATABASE IF EXISTS type_machine;
CREATE DATABASE type_machine;
\c type_machine;
CREATE TABLE type_test (
  id SERIAL NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  email VARCHAR(20),
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  test_word VARCHAR(20),
  acc_rate numeric NOT NULL,
  duration numeric NOT NULL,
  WPM numeric NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO type_test(email, first_name, last_name, test_word, acc_rate, duration, WPM)
VALUES ('cisdell@gmail.com', 'Andrew', 'Cho', 'Chopin', 90.56, 34.4, 60.4),
('cisdell@gmail.com', 'Andrew', 'Cho', 'Rachmaninoff', 78.54, 30.5, 80.3);
