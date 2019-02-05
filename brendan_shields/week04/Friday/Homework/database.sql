CREATE TABLE coffee_shops (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  image TEXT
);

CREATE TABLE coffee_menus (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  taste TEXT,
  origin TEXT,
  milk TEXT,
  other TEXT,
  profiles TEXT,
  cost INTEGER
);

INSERT INTO coffee_shops (name, location) VALUES ("Caf Fiend", 'Knightsbridge');
INSERT INTO coffee_menus (name, taste, origin, cost) VALUES ('Marsellesa','Golden Syrup, Shortbread & Lemon Marmalade','Guadalupe Zaju, Mexico',20);
