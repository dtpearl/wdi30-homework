$(document).ready(function () {
  setInterval(function () {
    // $.get('/brother').done(function (name) {
    // $('#brother').text(name);
    // });

    // $('#brother').load('/brother');

    // $.get('/time').done(function (currentTime) {
    //   $('#time').text( currentTime )
    // });

    // $('#time').load('/time')

    // $.get('/uptime').done(function (uptime) {
    //   $('#uptime').text( uptime )
    // });

    // $('#uptime').load('/uptime')

    $.getJSON('/info').done(function (results) {
      $('#brother').text( results.brother );
      $('#time').text( results.time );
      $('#uptime').text( results.uptime );
      console.log( results.fortune );
    });
  }, 2000);
});
