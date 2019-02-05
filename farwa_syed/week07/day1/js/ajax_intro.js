const fetchCover = function (book) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET','https://www.googleapis.com/books/v1/volumes?q=search+' + book);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }


    const data = JSON.parse(xhr.responseText);
    const title = data["items"][0]["volumeInfo"]["title"];
    const imagelink = data["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"];
    const p = document.createElement('p');
    p.innerHTML = title

    const img = $('<img>');
    img.attr('src',imagelink);
    img.appendTo('body');

    document.body.appendChild(p);
    // img.appendTo('body');

}

  xhr.send();
};

$('#fetch').on('click', function () {
  // console.log(document.getElementById('book').value)
  if(document.getElementById('book').value !== "")
  fetchCover(document.getElementById('book').value);

});
