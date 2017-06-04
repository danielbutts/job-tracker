DROP TABLE users IF EXISTS;

CREATE TABLE users  (
    person_id BIGINT IDENTITY NOT NULL PRIMARY KEY,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    city VARCHAR(20),
    state VARCHAR(20),
    email VARCHAR(20)

);