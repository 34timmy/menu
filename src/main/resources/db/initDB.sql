DROP TABLE IF EXISTS user_roles;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS meals;
DROP TABLE IF EXISTS restaurant;
DROP SEQUENCE IF EXISTS global_seq;

CREATE SEQUENCE global_seq START 1;

CREATE TABLE users (
  id         INTEGER PRIMARY KEY DEFAULT nextval('global_seq'),
  name       VARCHAR NOT NULL,
  email      VARCHAR NOT NULL,
  password   VARCHAR NOT NULL,
  registered TIMESTAMP           DEFAULT now(),
  enabled    BOOLEAN             DEFAULT TRUE,
  votetime   TIMESTAMP           DEFAULT NULL
);

CREATE UNIQUE INDEX users_unique_email_idx
  ON users (email);

CREATE TABLE user_roles
(
  user_id INTEGER NOT NULL,
  role    VARCHAR,
  CONSTRAINT user_roles_idx UNIQUE (user_id, role),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE restaurant (
  id           INTEGER PRIMARY KEY DEFAULT nextval('global_seq'),
  name         VARCHAR NOT NULL,
  address      VARCHAR NOT NULL,
  site         VARCHAR             DEFAULT NULL,
  mark         INTEGER             DEFAULT 0,
  votequantity INTEGER             DEFAULT 0
);
CREATE TABLE meals (
  id            INTEGER PRIMARY KEY DEFAULT nextval('global_seq'),
  name   TEXT    NOT NULL,
  price         INT     NOT NULL,
  restaurant_id INTEGER NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES restaurant (id) ON DELETE CASCADE
);


