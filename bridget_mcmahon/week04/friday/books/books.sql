CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  genre TEXT,
  cover TEXT,
  author_id INTEGER
);

INSERT INTO books (title, genre) VALUES ("Harry Potter and the Philisopher's Stone", "Fantasy");
