CREATE TABLE wizards (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  wand TEXT,
  image TEXT,
  house_id INTEGER
);

INSERT INTO wizards (name, wand) VALUES ("Harry Potter", "11 inch Phoenix Feather");
