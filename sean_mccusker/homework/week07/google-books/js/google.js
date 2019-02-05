console.log('Is there anybody out there?');
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
})
const fetchBook = function() {

  const xhr = new XMLHttpRequest();
  // This makes an HTTP request. This creates an instance of an object.

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
      // Request is still in progress so don't do anything yet.
    }

    const info = JSON.parse(xhr.responseText);
    // The 'responseText' is used to access the data from the server. In this case
    // it transforms the JSON into a JS object.

    // Displays the book cover
    const img = document.createElement('img') // Creates an image element
    img.src = info.items[0].volumeInfo.imageLinks.thumbnail; // Gets the image src
    document.body.appendChild( img );

    const p = document.createElement('p')// Creates the p element
    p.innerHTML = info.items[0].volumeInfo.description; // Inserts the data into the p element
    document.body.appendChild( p ); // Appends

  };

  const title = document.getElementById('userInput').value; // Gets the user input form.

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${title}`);
  // Uses interpolation to make an HTTP request

  xhr.send();

};

document.getElementById('fetch').addEventListener('click', fetchBook);
fetchBook();
