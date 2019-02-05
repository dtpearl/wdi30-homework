CREATE TABLE beers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  brewer TEXT,
  image TEXT -- URL for a photo of a beer
);

INSERT INTO beers (name, brewer) VALUES ('Tricerahops', 'Ninkasi');
