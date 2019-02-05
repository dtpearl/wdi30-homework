CREATE TABLE pokedex (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type TEXT,
  evolves INTEGER, -- boolean
  image TEXT
);

INSERT INTO pokedex (name, type, evolves) VALUES ('Bulbasaur', 'Grass/Poison', 1);
