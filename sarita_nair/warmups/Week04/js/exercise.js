$(document).ready(function(){
  let duration = 5000;
  alert(duration);
  $('#fadein').click(function(){
    $('#span1').animate({fontSize:`-=20px`}).fadeIn(1)

  });
  $('#fadeout').click(function(){
    duration = $('#time').val() !== '' ? Number($('#time').val()) : 5000;
    $('#span1').animate({fontSize:`+=20px`}).fadeOut(duration)
  });

});
