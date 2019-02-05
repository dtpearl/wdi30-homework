CREATE TABLE locations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  break TEXT,
  district TEXT,
  state TEXT,
  country TEXT,
  wave_type TEXT,
  wave_direction TEXT,
  breaks_other TEXT,
  wind_direction TEXT,
  tide TEXT,
  swell_direction TEXT,
  season_start TEXT,
  season_end TEXT,
  reliability TEXT,
  latitude REAL, -- N
  longitude REAL, -- E
  image TEXT,
  summary TEXT
);

INSERT INTO locations VALUES ( 1, "Banzai Pipeline", "Oahu", "Hawaii", "United States", "reef", "left", "Backdoor", "ESE", "All", "NW", "November", "February", "Fairly consistent", 21.6649, -158.0530, "https://en.wikipedia.org/wiki/Banzai_Pipeline#/media/File:Empty_wave_at_Banzai_Pipeline.jpeg", "The Banzai Pipeline, or simply Pipeline or Pipe, is a surf reef break located in Hawaii, off Ehukai Beach Park in Pupukea on O'ahu's North Shore. A reef break is an area in the ocean where waves start to break once they reach the shallows of a reef. Pipeline is notorious for huge waves which break in shallow water just above a sharp and cavernous reef, forming large, hollow, thick curls of water that surfers can tube ride. There are three reefs at Pipeline in progressively deeper water further out to sea that activate according to the increasing size of approaching ocean swells.");

INSERT INTO locations VALUES ( 2, "Gold Coast", "", "Queensland", "Australia", "point/groyne", "right", "Kirra, Snapper, D-bah, Greenmount", "S", "All", "SE", "March", "August", "Fairly consistent", -28.167, 153.533, "https://farm6.static.flickr.com/5539/11210527176_8859be96e6_b.jpg", "The Superbank extends from Snapper Rocks Point, through Rainbow Bay, Greenmount Point, Coolangatta Beach, and Kirra, for a distance of around 2 kilometres (1.2 mi). Multiple barrel sections can now occur at any point along this length. The quality of the surf in the first 4 of these sections has markedly improved since the 1990s, and is now of legendary quality, creating one of the longest, hollowest and best waves in the world.");


CREATE TABLE athletes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fullname TEXT,
  firstname TEXT,
  lastname TEXT,
  abname TEXT,
  country TEXT,
  hometown TEXT,
  stance TEXT,
  birthday TEXT,
  height INTEGER,
  weight INTEGER,
  url TEXT
);

INSERT INTO athletes VALUES ( 1, "Adrian Buchan", "Adrian", "Buchan", "A. Buchan", "Australia", "Avoca Beach, NSW, Australia", "Goofy", "1982-09-21", 175, 75, "http://www.worldsurfleague.com/athletes/575/adrian-buchan");
INSERT INTO athletes VALUES ( 2, "Julian Wilson",	"Julian",	"Wilson",	"J. Wilson",	"Australia", "Coolum Beach, Queensland, Australia",	"Regular",	"1988-11-08",	180,	80,	"http://www.worldsurfleague.com/athletes/763/julian-wilson");


CREATE TABLE events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  year INTEGER,
  num INTEGER,
  tour TEXT,
  title TEXT,
  location TEXT,
  location_id INTEGER,
  startdate TEXT,
  enddate TEXT,
  champion TEXT,
  athlete_id INTEGER,
  url TEXT
);

INSERT INTO events VALUES (1, 2018,	1,	"mct",	"Quiksilver Pro Gold Coast",	"Gold Coast, Queensland, Australia", 2,	"2018-03-11",	"2018-03-22",	"Julian Wilson", 2,	"http://www.worldsurfleague.com/events/2018/mct/2647/quiksilver-pro-gold-coast");
