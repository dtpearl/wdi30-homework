
const $links = $('ul a');

const thumbnailify = function($obj) {


  const $link = $( $links[i] );
  let href = $link.attr("href");
  const thumb = youtube.generateThumbnailUrl(href);
  const $elem = $('<img>');
  // $elem.attr('src', thumb);
  // $link.prepend($elem)
  $('<img>').attr('src', thumb).prependTo($link);
}

for (var i = 0; i < $links.length; i++) {
  thumbnailify($links)
}
//
// $('ul a').each(function (index, element) {
//   const href = $(element).attr('href');
//   const thumbnailURL = youtube.generateThumbnailURL(href);
//   $('<img>').attr('src' thumbnailURL).prepentTo(element)
// })

//
// let $links = $('ul a').attr('href')
// console.log(href)
// let thumb = youtube.generateThumbnailUrl(href)
// let elem = $thumb.create('img').attr('src', thumb);
// $('ul a').each.append(elem)
