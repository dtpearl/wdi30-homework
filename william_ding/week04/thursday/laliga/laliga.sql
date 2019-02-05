CREATE TABLE laliga (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  city TEXT,
  stadium TEXT,
  stadium_capacity INTEGER,
  last_rank INTEGER,
  title INTEGER,
  logo TEXT
);

INSERT INTO laliga VALUES (
  1,
 "Real Madrid",
 "Madrid",
 "Santiago Bernabéu Stadium",
 81044,
 3,
 33,
 "/pic/real_madrid.png"
);

INSERT INTO laliga VALUES (
  2,
 "Barcelona",
 "Barcelona",
 "Camp Nou",
 99354,
 1,
 25,
 "/pic/barcelona.png"
);

INSERT INTO laliga VALUES (
  3,
 "Atlético Madrid",
 "Madrid",
 "Wanda Metropolitano Stadium",
 67703,
 2,
 10,
 "/pic/atletico_madrid.png"
);
