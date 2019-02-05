
$(document).ready(function () {

  let initialized = false;

  const findISSLocation = function () {
    const url = `http://api.open-notify.org/iss-now.json`;
    $.getJSON(url).done(mapShip);
  };

  const findISSAstros = function () {
    const url = `http://api.open-notify.org/astros.json`;
    $.getJSON(url).done(populateShip);
  };

  var myIcon = L.icon({
    iconUrl: 'img/icons8-satellite-480.png',
    iconSize: [50,50],
    iconAnchor: [24,50],
    popupAnchor: [1,-50]
  });

  let marker;

  let mapShip = function (results) {
    const lat = results.iss_position.latitude
    const lon = results.iss_position.longitude
    console.log(`mapped: ${ lat }, ${ lon }`);

    const newLatLng = new L.LatLng(lat, lon);

    if (initialized) {
      marker.setLatLng(newLatLng);
    } else {
      marker = L.marker([lat, lon], {
    		icon: myIcon
    	}).addTo(mymap);
    };

    mymap.setView(newLatLng);

  }


  let populateShip = function (results) {
    const astros = results.people
    let namesString = '<b>People in space:</b><br>'
    for (let i = 0; i < astros.length; i++) {
      namesString += astros[i].name + '<br>'
    }
    marker.bindPopup(namesString);
  }


  let mymap = L.map('mapid').setView([0, 0], 3);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1Ijoibml6emVjIiwiYSI6ImNqcmlyanNucDA0eHgzeW8zbXo2d210bWQifQ.n66FNwQ3pH8WXUs72a80jw'
  }).addTo(mymap);

  findISSLocation();
  findISSAstros();
  setInterval(function() {
    initialized = true;
    findISSLocation();
    findISSAstros();
  }, 5000);

});
