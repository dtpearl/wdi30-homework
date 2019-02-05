$(document).ready(function(){
  // alert($('input[name=input_number]').val());
  $('#btnsubmit').click(function(){
    // alert('1');
    animatesecretnum();
  });
  const animatesecretnum = function(){
    if($('#msg').val() == "Error")
    {
      // alert('1');
      $('input[name=input_number]').addClass("animated shake");
    }
    else{
      $('input[name=input_number]').removeClass("animated shake");
    }
  };
});
