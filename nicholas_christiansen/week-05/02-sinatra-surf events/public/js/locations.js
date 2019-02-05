
// A $( document ).ready() block.
$( document ).ready(function() {
  lat = [];
  lon = [];
  $( ".data" ).each(function( index ) {
    lat.push($(this).data("lat"))
    lon.push($(this).data("lon"))
  });

  console.log(lat, lon);





  var mymap = L.map('mapid').setView([0, -5], 2.3);



  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 1000,
      id: 'mapbox.satellite',
      accessToken: 'pk.eyJ1Ijoibml6emVjIiwiYSI6ImNqcXFoNXpuNTBjNno0Mmw1ZnY0OTlsbGwifQ.P72eg-vqN7Fe7oMNXfeIEw'
  }).addTo(mymap);

  for (let i = 0; i < lat.length; i++) {
    var marker = L.marker([lat[i], lon[i]]).addTo(mymap);
  }




});
