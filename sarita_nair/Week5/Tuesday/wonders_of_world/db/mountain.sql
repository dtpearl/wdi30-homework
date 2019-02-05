CREATE TABLE mountains(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  height FLOAT,
  state TEXT,
  country TEXT
);

INSERT INTO mountains(name,image,height,state,country) values('Mount Everest','https://en.wikipedia.org/wiki/Mount_Everest#/media/File:Everest_kalapatthar.jpg',8848,'','Nepal');
