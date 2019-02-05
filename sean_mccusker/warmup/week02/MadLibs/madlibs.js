function libIt () {
  var storyDiv = document.getElementById( "story" );
  const person = document.getElementById( "person" ).value;
  const adjective = document.getElementById( "adjective" ).value;
  const noun = document.getElementById( "noun" ).value;
  storyDiv.innerHTML = person + " went to the moon in a  " + adjective + " " + noun + ", Awesome!!";
  //storyDiv.innerHTML = person + " went to the moon " + adjective + " " + noun + "... So weird!";
  //const story = `${ name } went to the moon in a ${ adjectives } ${ noun } , Awesome!`;
}

var libButton = document.getElementById( 'lib-button' );
libButton.addEventListener( 'click', libIt );
