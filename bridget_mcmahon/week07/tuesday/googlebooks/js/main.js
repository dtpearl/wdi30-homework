const fetchCover = function() {
  const xhr = new XMLHttpRequest();

  title = document.getElementById('book').value;
  url = `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`
  xhr.open('GET', url);

  xhr.onreadystatechange = function() {
    if (xhr.readyState !== 4) {
      return;
    }

    const data = JSON.parse( xhr.responseText );

    const cover = document.createElement('img');
    cover.src = data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

    const div = document.getElementById('cover');
    if (div.children.length > 0) {
      div.replaceChild(cover, div.children[0]);
    } else {
      div.appendChild(cover);
    }
  }

  xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchCover);

document.getElementById('book').addEventListener('keypress', function(e) {
  let key = e.which || e.keyCode;
  if (key === 13) {
    fetchCover();
  }
});
