let currentPage = 1;
let searchInProgress = false;
let lastPage = false;

const showImages = function (results) {
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret
    ].join('');
  };

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo) + '_q.jpg';
    const photoURL = generateURL(photo) + '_b.jpg';
    /*
    const $img = $('<img />', {src: thumbnailURL});
    const $imgWithLink = $img.wrap(`<a href = ${photoURL} target='_blank'></a>`).parent();
*/
    const $imgWithLink = $(`<a href = ${photoURL} target='_blank'> <img src = ${thumbnailURL}/></a>`);
    $imgWithLink.appendTo('#images');
  });
};

const countPages = function (results) {
  if (results.photos.page === results.photos.pages) {
    lastPage = true;
  }
  else {
    lastPage = false;
  }
};

const searchFlickr = function (term) {
  console.log(`Searching Flickr for ${term}`);

  searchInProgress = true;

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format: 'json',
    page: currentPage++
  }).done(showImages).
  done(countPages).
  done(setTimeout(function() {
    searchInProgress = false;
  }, 4000));
};

$(document).ready(function () {
  $('#search').on('submit', function(event) {
    currentPage = 1;
    lastPage = false;
    $('#images').empty();
    event.preventDefault();

    const query = $('#query').val();
    searchFlickr(query);

    //get the search query
    //search Flickr (query)
  });

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

    // You may need to tweak the value below
    if (scrollBottom <= 500) {
      const query = $('#query').val(); // There are better ways to do this.
      if(!searchInProgress && !lastPage) {
        searchFlickr(query);
      }
    }
  });
});
