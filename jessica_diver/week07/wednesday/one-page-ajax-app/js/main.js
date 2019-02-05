$(document).ready(function() {

  const $image = $('#image');

  $('#getCat').on('click', function(event) {
    $image.empty();
    event.preventDefault();
    
    $.getJSON('https://aws.random.cat/meow').done(function (data) {

      const catPic = data.file;
      $image.append('<img src=' + data.file + '>')
    });
  });
});
