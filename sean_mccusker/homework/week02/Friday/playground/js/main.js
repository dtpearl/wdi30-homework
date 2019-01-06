$(document).ready(function () {

  $('#name').on('keyup', function () {
    // Update the heading with the user input
    const name = $(this).val();
    $('header h1').text(`Welcome ${ name }`);
  }).on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  });

  const randomColor = function () {
    return Math.random() * 255;
  }

  $(window).on('mousemove', function (event) {
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    $('body').css('background-color', bgColor);
  });

  $(window).on('mousemove', function (event) {
    // Get the mouse y position as a percentage of the window
    const opacity = (window.innerHeight - event.clientY) / window.innerHeight;
    $('img').css('opacity', opacity);
  });

  $('button').on('mouseover', function () {
    $(this).css('background-color', 'pink');
  });
  $('button').on('mouseout', function () {
    $(this).css('background-color', 'initial')
  });

  $('button').hover(function () {
    $(this).css('background-color', 'pink');
  }, function () {
    $(this).css('background-color', 'initial');
  });
});
