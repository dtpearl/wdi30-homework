CREATE TABLE beers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brewer TEXT,
  name, TEXT,
  style TEXT,
  image TEXT -- URL for a photo of a beer
);

INSERT INTO beer ( brewer, name, style ) VALUES ( 'Ninkasi', 'Tricerahops', 'Double IPA' );
