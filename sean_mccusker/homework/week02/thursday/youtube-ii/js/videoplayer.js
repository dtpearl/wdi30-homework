const $links = $('ul a');

for (let i = 0; i < $links.length; i++) {

  // Convert a single vanilla DOM node back into a jQuery-powered object.
  const $link = $( $links[i] );

  const href = $link.attr('href'); // Getter
  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const $thumbnail = $('<img>').attr('src', thumbnailURL); // Setter
  $link.prepend($thumbnail);

  // Alternatively:
  // $('<img>').attr('src', thumbnailURL).prependTo($link);
}

// "Pure" jQuery version:
// $('ul a').each(function (index, element) {
//   const href = $(element).attr('href');
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   $('<img>').attr('src', thumbnailURL).prependTo(element);
// });
