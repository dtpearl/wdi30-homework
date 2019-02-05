CREATE TABLE locations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  beach TEXT,
  state TEXT,
  country TEXT,
  latitude REAL, -- N
  longitude REAL, -- E
  url TEXT,
  summary TEXT
);

INSERT INTO locations VALUES ( 1, "Banzai Pipeline, Oahu", "Hawaii", "USA", 21.6649, -158.0530, "https://en.wikipedia.org/wiki/Banzai_Pipeline#/media/File:Empty_wave_at_Banzai_Pipeline.jpeg", "The Banzai Pipeline, or simply Pipeline or Pipe, is a surf reef break located in Hawaii, off Ehukai Beach Park in Pupukea on O'ahu's North Shore. A reef break is an area in the ocean where waves start to break once they reach the shallows of a reef. Pipeline is notorious for huge waves which break in shallow water just above a sharp and cavernous reef, forming large, hollow, thick curls of water that surfers can tube ride. There are three reefs at Pipeline in progressively deeper water further out to sea that activate according to the increasing size of approaching ocean swells.");
