const fetchBook = function () {
  const title = $('#title').val();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyAys8z47PrHg6ebR1Vw4CE6rGSowTzkqN4`);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }
    const data = JSON.parse(xhr.responseText).items[0].volumeInfo;

    $("#book-title").text(data.title);
    $("#author").text(`by: ${data.authors}`);
    $("#thumbnail").html("")
    $("#thumbnail").append(`<img src=${data.imageLinks.thumbnail}>`);
    $("#description").text(data.description);
  }

  xhr.send();
}


$('#search-form').on('submit', function (e) {
  e.preventDefault();
  fetchBook();
});
$('#search').on('click', fetchBook);
