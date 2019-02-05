drop table singer;

CREATE TABLE singers(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image TEXT,
  birthdate datetime,
  city TEXT,
  state TEXT,
  country TEXT
);

INSERT INTO singers (name,image,birthdate,city,state,country) values ('Michael Jackson','http://www.gstatic.com/tv/thumb/persons/512227/512227_v9_bb.jpg','29 August 1958','LA','California','US');
ALTER TABLE singers ADD description COLUMN NVARCHAR(2000);
