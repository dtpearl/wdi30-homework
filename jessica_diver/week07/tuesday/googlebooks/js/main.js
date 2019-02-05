document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault(); //disable the form redirecting to another page.

  const title = document.getElementById("book_title").value;
  document.getElementById("book_title").value = "";

  const xhr = new XMLHttpRequest();
  let url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) return;
    const info = JSON.parse(xhr.responseText);
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail
    document.getElementById('cover').src = cover;
  }

  xhr.open('GET', url);
  xhr.send();

});
