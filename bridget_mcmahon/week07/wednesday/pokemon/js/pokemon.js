////////////// CAPITALISE FUNCTION //////////////


const capitalise = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

////////////// SHOW POKEMON ON PAGE //////////////

const showPokemonInfo = function(results) {
  let name = `<p>Name: ${ capitalise(results.name) }</p>`;
  let number = `<p>Number: ${ results.id }</p>`;
  let image = `<img src="${ results.sprites.front_default }">`;
  let typeOne = `<p>Type: ${ results.types[0].type.name }</p>`;
  let typeTwo;
  if (results.types.length === 2) {
    typeTwo = `<p>Second type: ${ results.types[1].type.name }</p>`;
  } else {
    typeTwo = null;
  }

  const $info = $('#info');
  $info.empty();
  $info.append(name, number, typeOne);
  if (typeTwo !== null) {
    $info.append(typeTwo);
  }
  $info.append(image);
};

///////////////// SEARCH POKEAPI /////////////////

const searchPokemon = function(searchTerm) {
  const pokeURL = `https://pokeapi.co/api/v2/pokemon/${ searchTerm }/`;

  $.getJSON(pokeURL, function(data) {
    console.log(data);
  }).done(showPokemonInfo);
};

///////////////// DOCUMENT READY /////////////////

$(document).ready(function() {

  //////////////// EVENT LISTENER ////////////////
  $('#search').on('submit', function(event) {
    event.preventDefault();
    const $query = $('#query').val().toLowerCase();
    searchPokemon($query);
  });
});
