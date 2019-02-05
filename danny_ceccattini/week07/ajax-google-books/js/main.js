const fetchBook = function () {

  document.querySelector('.book-title').innerHTML = null;
  document.querySelector('.book-image').src = null;
  document.querySelector('.book-desc').innerHTML = null;
  document.querySelector('.author-title').innerHTML = null;
  document.querySelector('.price-title').innderHTML = null;

  bookTitle = document.getElementById('search-input').value
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    };

    const data = JSON.parse(xhr.responseText);
    const volumeInfo = data["items"][0]["volumeInfo"];
    const title = volumeInfo["title"];
    const author = volumeInfo["authors"];
    const thumbnail = volumeInfo["imageLinks"]["thumbnail"];
    const synopsis = volumeInfo["description"];

    document.querySelector('.book-title').innerHTML = title;
    document.querySelector('.author-title').innerHTML = `By: ${author}`;
    document.querySelector('.book-image').src = thumbnail;
    document.querySelector('.book-desc').innerHTML = synopsis;

    if (data["items"][0]["saleInfo"]["saleability"] === "NOT_FOR_SALE") {
      document.querySelector('.price-title').innerHTML = "OUT OF STOCK";
    } else {
      const price = data["items"][0]["saleInfo"]["listPrice"]["amount"];
      document.querySelector('.price-title').innerHTML = `ONLY $${price}`;
    };

  } // function

  xhr.send();

};

document.getElementById('search-btn').addEventListener('click', fetchBook);

// document.querySelector('#search-input').addEventListener('keypress', function(e) {
//   if (e.keyCode === 13) {
//     fetchBook();
//   };
// });
