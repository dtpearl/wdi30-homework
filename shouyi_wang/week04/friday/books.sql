CREATE TABLE books (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  author_id INTEGER,
  image TEXT -- URL for a photo of a butterfly
);

INSERT INTO books (name, image) VALUES ('Pride and Prejudice', 'https://cf3.s3.souqcdn.com/item/2018/03/19/32/56/13/93/item_XL_32561393_119325275.jpg');
