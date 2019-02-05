console.log(`Is there anybody out there?`);

$(document).ready(function () {
  $('#wherenow').on('click', position);
});

const position = function() {
  $.get(`http://api.open-notify.org/iss-now.json`).done(function (info) {
    const latitude = parseFloat(info.iss_position.latitude);
    const longitude = parseFloat(info.iss_position.longitude);

    
    console.log(`The current latitude is: ${latitude}`);
    console.log(`The current longitude is: ${longitude}`);

    $('#lat').text(latitude);
    $('#long').text(longitude);

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: latitude, lng: longitude},
      zoom: 2.5,
      mapTypeControl: false,
      mapTypeId: 'satellite'
    });
    $("#wherenow").css("opacity", "0.7");
    $("#coordinates").text("CURRENT COORDINATES: ");

    marker = new google.maps.Marker({
          position: {lat: latitude, lng: longitude},
          map: map,
          icon: { url: 'images/astronaut.jpg'
         }
    });

  })
};
