const links = document.querySelectorAll('ul a');

for (let i = 0; i < links.length; i++) {
  const href = links[i].getAttribute('href');

  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const thumbnail = document.createElement('img'); // Detached DOM node
  thumbnail.setAttribute('src', thumbnailURL);

  links[i].appendChild(thumbnail);
}
