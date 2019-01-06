$('h2').funText(33, 'candy');
const links = document.querySelectorAll('ul a');

for (let i = 0; i < links.length; i++) {
  const href = links[i].getAttribute('href');

  const thumbNailUrl = youtube.generateThumbNailUrl(href);

  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', thumbNailUrl);

  links[i].appendChild(thumbnail);
}
