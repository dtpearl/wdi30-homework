const fetchFact = function (name) {
  const xhr = new XMLHttpRequest(); // Create a lil Javascript browser
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${name}&maxResults=40`); // Configure the "browser"

  // This callback function will fire at every stage of the AJAX request process:
  xhr.onreadystatechange = function () {
    // 4 is the only readyState we care about.
    if (xhr.readyState !== 4) {
      return; // Request is still in progress so don't do anything yet.
    }
// Translate the string response into a real JS object.
    const data = JSON.parse(xhr.responseText);
    const maxVal=40;
    const randValue=Math.round(Math.random()*(maxVal+1));


    // Vanilla DOM manipulation to show a new paragraph with a random fact.
    const title = document.createElement('p');
    title.innerHTML = data["items"][randValue]["volumeInfo"]["title"];
    document.body.appendChild(title);

    const p = document.createElement('p');
    p.innerHTML = data["items"][randValue]["volumeInfo"]["description"];
    document.body.appendChild(p);

    const newImage = document.createElement('img');
    newImage.src = data["items"][randValue]["volumeInfo"]["imageLinks"]["thumbnail"];
    document.body.appendChild(newImage);
  }

  xhr.send(); // Asynchronous! This runs "in the background".
};

$('#fetch').on('click', function(){
  if($('#bookname').val() !== "")
  fetchFact($('#bookname').val());
});
