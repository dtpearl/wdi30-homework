let latitude = 0;
let longitude = 0;
let map = null;
var marker = null;

function initMap() {
  var pos = {lat: 0, lng: 0};
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
    zoom: 4
  });

  marker = new google.maps.Marker({
    position: pos,
    map: map
});
  map.setCenter(pos);
}

const spaceStation = function() {
  $.getJSON("http://api.open-notify.org/iss-now.json").done(function(results) {
    latitude = Number(results.iss_position.latitude);
    longitude = Number(results.iss_position.longitude);
  });

  var pos = {lat: latitude, lng: longitude};
  console.log("latitude" + latitude+ "longtitude" + longitude);
  marker.setPosition(pos);
  map.setCenter(pos);
};

$(document).ready(function() {


  setInterval(spaceStation, 1000);

});



// AIzaSyAwYnd-6mw5459WBpOwr596nk6sAzhXfIg
