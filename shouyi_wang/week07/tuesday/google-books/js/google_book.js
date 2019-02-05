window.onload = function () {

document.querySelector('form').addEventListener("submit", function (event) {
  event.preventDefault();
  let name = document.getElementById('input_text').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.googleapis.com/books/v1/volumes?q=' + name);

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse(xhr.responseText);

    /*debugger*/

    const img_url = data.items[0].volumeInfo.imageLinks.thumbnail;

    document.getElementById('thumb').src = img_url;
  }

  xhr.send();

});
};
