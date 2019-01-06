const $links = $('ul a');

for (let i = 0; i < links.length; i++) {

  // Convert a single vanilla DOM back into a jQuery-powered object
  const $link = $( link[i] );

  const href = $link.attr('href');


  const thumbNailUrl = youtube.generateThumbNailUrl(href);

  const $thumbnail = $('<img>');

  $thumbnail.attr('src', thumbNailUrl); // Setter

  $link.prepend($thumbnail);
  // $links[i].appendChild(thumbnail);
}
