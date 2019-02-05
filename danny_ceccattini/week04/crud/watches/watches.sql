CREATE TABLE watches (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  company TEXT,
  model TEXT,
  country TEXT,
  dial TEXT, -- URL of an image of the dial
  movement TEXT -- URL of an image of the movement
);

INSERT INTO watches (company, model, country, dial, movement) VALUES ('George Daniels', 'Space Traveller', 'England', 'https://hodinkee.imgix.net/uploads/images/1505914109961-aa05cwir0sl-fc96d40a4f67ef5aa1b552faf7adb422/aaad.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12&s=74f4bf320752d971162b19118a3c60ee', 'https://cdn.shopify.com/s/files/1/0606/5325/files/DANIELS-04.jpg?v=1504175455');
