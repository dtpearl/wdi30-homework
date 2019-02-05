CREATE TABLE songs(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  url TEXT,
  artist_id INTEGER
);

INSERT INTO songs (id,name,url,artist_id) values (1,'Billie Jean','<iframe width="560" height="315" src="https://www.youtube.com/embed/rmCA3qQkqso" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',1);
