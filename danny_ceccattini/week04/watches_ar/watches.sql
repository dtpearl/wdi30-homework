CREATE TABLE watches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  dial TEXT, -- URL of photo
  movement TEXT -- URL of photo
);

INSERT INTO watches (name, dial, movement) VALUES ('Space Traveller', 'https://thumbor.forbes.com/thumbor/1280x868/https%3A%2F%2Fblogs-images.forbes.com%2Felizabethdoerr%2Ffiles%2F2017%2F09%2FGeorge-Daniels-SPACE-TRAVELLERS-WATCH-Sothebys.jpg', 'https://cdn.shopify.com/s/files/1/0606/5325/files/DANIELS-04.jpg?v=1504175455');
