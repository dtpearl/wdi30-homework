CREATE TABLE buildings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    city TEXT,
    country TEXT,
    image TEXT
);

INSERT INTO buildings (name, city, country) VALUES ("Opera House", "Sydney", "Australia");