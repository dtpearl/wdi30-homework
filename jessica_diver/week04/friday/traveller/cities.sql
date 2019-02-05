CREATE TABLE cities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  city TEXT,
  year INTEGER,
  image TEXT,
  country_id INTEGER
);


INSERT INTO cities (city, year) VALUES ('Sydney', 1993);
