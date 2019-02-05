CREATE TABLE catbook (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  profile_name TEXT,
  profile_image TEXT, --url for photo
  article_title TEXT, --url for photo of butterfly
  article_subtitle TEXT,
  article_text TEXT,
  thumb1 TEXT,
  thumb2 TEXT,
  thumb3 TEXT
);

INSERT INTO catbook (profile_name, profile_image, article_title, article_subtitle, article_text, thumb1, thumb2, thumb3) VALUES (

  'Casper Hamshield',
   "https://scontent.fsyd8-1.fna.fbcdn.net/v/t31.0-8/25588125_10210905237123967_1856941294765128661_o.jpg?_nc_cat=106&_nc_ht=scontent.fsyd8-1.fna&oh=88843cf89e8f02e41524416cefbade63&oe=5CC7C048",
  'The pinacle of feline fashion',
  'The face of catfood now takes on the catwalk with his adventurous outfits.',
  'He is short, fat, and full of biscuits but that will not stop Casper from taking the fashion world by storm. Only a year ago he was living in Five Dock, chewing some grass and wondering where life would take him next. He had just landed his first gig as the face of a prestigious catfood, little did he know that Kmart would soon be selling a huge range of cat costumes. Throwing caution to the wind, he revamped his wardrobe, and now he is ready to take the world by storm.',
  "https://scontent.fsyd8-1.fna.fbcdn.net/v/t31.0-8/23737553_10210707352976987_8843821197079000985_o.jpg?_nc_cat=103&_nc_ht=scontent.fsyd8-1.fna&oh=4b9d20b0227641fb3e7b89f680249c6b&oe=5CD822AE",
  'https://scontent.fsyd8-1.fna.fbcdn.net/v/t31.0-8/22254718_10210422912186145_4603514911127796537_o.jpg?_nc_cat=103&_nc_ht=scontent.fsyd8-1.fna&oh=aa75b9c965c1f7f9b3f9877b63d02727&oe=5CC30C84',
  'https://scontent.fsyd8-1.fna.fbcdn.net/v/t31.0-8/21368952_10210242551677245_1166399574957701923_o.jpg?_nc_cat=106&_nc_ht=scontent.fsyd8-1.fna&oh=ff4dbc0d68cafdd5b81ca3d9ce8a7824&oe=5CD8A98D'
);
