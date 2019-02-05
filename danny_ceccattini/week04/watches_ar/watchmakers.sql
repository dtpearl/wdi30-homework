CREATE TABLE watchmakers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  photo TEXT -- URL of photo
);

INSERT INTO watchmakers (name, country, photo) VALUES ("George Daniels", "England", "https://www.economist.com/sites/default/files/imagecache/full-width/images/print-edition/20111126_OBP001_0.jpg");
