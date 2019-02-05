const fetchBook = function () {
  const location = $('#location').val();
  $.ajax(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=326ed1378220425bab0e042186f49154`).done(function (data) {
    console.log(data);
    $('#city-name').html(data.name);
    const temp = parseInt(data.main.temp - 273.15) + " &#8451;"
    $('#temp').html(temp);
    const temp_max = parseInt(data.main.temp_max - 273.15) + " &#8451;"
    const temp_min = parseInt(data.main.temp_min - 273.15) + " &#8451;"
    $('#range').html(temp_max + " - " + temp_min);
    $('#weather').html(data.weather[0].description);

  });
}


$('#search-form').on('submit', function (e) {
  e.preventDefault();
  fetchBook();
});
// $('#search').on('click', fetchBook);
