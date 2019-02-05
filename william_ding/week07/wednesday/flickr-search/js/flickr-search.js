let page = 1;
let loadMore = true;
let totalPages;
const showImages = function (results) {
  // Nested function AKA helper function returns a thumbnail URL for a given photo object.
  const generateURL = function(p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change 'q' to something else from the docs for different sizes
    ].join('');
  }

  results.photos.photo.forEach(function(photo){
    const thumbnailURL = generateURL(photo);
    const $img = $(`<img />`, {src : thumbnailURL});
    $img.appendTo('#images');
  });
  loadMore = true;
}

const searchFlickr = function (term, page) {
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    // Via Flickr Docs:
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    page: page,
    per_page: 100,
    format: 'json'
  }).done(showImages).done(function(data){
    console.log(data);
  }).done(function(data){
    totalPages = data.photos.pages;
    console.log(totalPages);
  });
}

$(document).ready(function() {

  $("#search").on('submit', function(event) {
    event.preventDefault();
    page = 1;
    $('#images').empty();
    const query = $('#query').val();
    searchFlickr(query, page);
  });

  $(window).on('scroll', function () {
    let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    // You may need to tweak the value below
    if (scrollBottom < 500 && loadMore && page <= totalPages) {
      loadMore = false;
      const query = $('#query').val(); // There are better ways to do this.
      page ++;
      searchFlickr(query, page);

    }
  });

});
