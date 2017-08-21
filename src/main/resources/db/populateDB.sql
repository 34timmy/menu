DELETE FROM user_roles;
DELETE FROM meals;
DELETE FROM users;
DELETE FROM restaurant;
ALTER SEQUENCE global_seq RESTART WITH 1;
-- admin
INSERT INTO users (name, email, password)
VALUES ('User', 'user@yandex.ru', '$2a$10$Sh0ZD2NFrzRRJJEKEWn8l.92ROEuzlVyzB9SV1AM8fdluPR0aC1ni');

-- password
INSERT INTO users (name, email, password)
VALUES ('Admin', 'admin@gmail.com', '$2a$10$WejOLxVuXRpOgr4IlzQJ.eT4UcukNqHlAiOVZj1P/nmc8WbpMkiju');

INSERT INTO user_roles (role, user_id) VALUES
  ('ROLE_USER', 1),
  ('ROLE_ADMIN', 2),
  ('ROLE_USER', 2);


INSERT INTO restaurant (name, address) VALUES
  ('Roma', 'Msk str.'),
  ('Baker', 'Spb str.'),
  ('Cafe', 'LA str.');

INSERT INTO meals (description, price, restaurant_id) VALUES
  ('Завтрак', 500, 3),
  ('Молоко', 100, 3),
  ('Хлеб', 50, 4),
  ('Мясо', 5000, 4);
