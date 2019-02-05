CREATE TABLE cheeses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  province TEXT,
  region TEXT,
  image TEXT -- URL of image of the cheese
);

INSERT INTO cheeses (name, province, region, image) VALUES ('Taleggio', 'Lecco', 'Lombardia', 'http://therivierawoman.com/pics/2014/08/Taleggio_2.jpg');
