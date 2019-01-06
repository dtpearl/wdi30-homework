$('h2').funText(33, 'candy');
const thumbnailify = function ($link) {
  const href = $link.attr('href'); // Getter
  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const $thumbnail = $('<img>').attr('src', thumbnailURL); // Setter

  $link.on('click', function (event) {
    event.preventDefault(); // Disables navigating to a new page.

    const embedURL = youtube.generateEmbedUrl(href);
    const embedCode = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    $('#player').hide().html( embedCode ).fadeIn(3000);
  });

  $link.prepend($thumbnail);
};

const $links = $('ul a');

for (let i = 0; i < $links.length; i++) {
  const $a = $( $links[i] );
  thumbnailify( $a );
}

// "Pure" jQuery version:
// $('ul a').each(function (index, element) {
//   const href = $(element).attr('href');
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//   $('<img>').attr('src', thumbnailURL).prependTo(element);
// });
