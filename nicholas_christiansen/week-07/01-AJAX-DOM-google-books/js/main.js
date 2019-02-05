

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const search = document.getElementById('search-input').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${ search }`);

  xhr.onreadystatechange = function () {

    if (xhr.readyState !== 4) return;

    const data = JSON.parse(xhr.responseText);

    console.log(data);

    book = {
      title: data.items[0].volumeInfo.title,
      thumbnail: data.items[0].volumeInfo.imageLinks.thumbnail,
      author: data.items[0].volumeInfo.authors,
      date: data.items[0].volumeInfo.publishedDate,
      pageCount: data.items[0].volumeInfo.pageCount,
      reviewCount: data.items[0].volumeInfo.ratingsCount,
      rating: data.items[0].volumeInfo.averageRating,
      summary: data.items[0].volumeInfo.description,
      bookLink: data.items[0].volumeInfo.previewLink

    }

    console.log(book);

    document.getElementById('booktitle').innerHTML = book.title;

    // Thumbnail
    if (document.getElementById('bookcover').firstChild) {
      document.getElementById('bookcover').firstChild.remove();
    }

    if (book.thumbnail != null) {
      const thumbnail = document.createElement('img')
      thumbnail.src = book.thumbnail
      thumbnail.alt = "Front Cover"
      thumbnail.width = 128
      thumbnail.border = 1
      thumbnail.setAttribute("id", "summary-frontcover");

      document.getElementById('bookcover').appendChild(thumbnail);
    }


    // removeElement()
    if (document.getElementById('author').firstChild) {
      document.getElementById('author').firstChild.remove();
    }

    if (book.author != null) {
      const author = document.createElement('span');
      author.innerHTML = book.author;

      author_link = document.createElement('a');
      author_link.href = `https://www.google.com.au/search?tbo=p&tbm=bks&q=inauthor:%22${ book.author }%22`
      author_link.appendChild(author);

      document.getElementById('author').appendChild(author_link);
    }


    if (book.date != null) {
      document.getElementById('date').innerHTML = book.date;
    }

    if (book.pageCount != null) {
      document.getElementById('page-count').innerHTML = " - " + book.pageCount + ' pages';
    }

    if (book.reviewCount != null) {
      document.getElementById('review-count').innerHTML = " - " + book.reviewCount + ' reviews';
    }

    if (book.rating != null) {
      document.getElementById('rating').innerHTML = " - " + book.rating + ' stars';
    }

    if (book.summary != null) {
      document.getElementById('synopsistext').innerHTML = book.summary;
    }

    if (document.getElementById("book-link")) {
      document.getElementById("book-link").remove();
    }

    if (book.bookLink != null) {
      const bookLink = document.createElement('a');
      bookLink.href = book.bookLink;
      bookLink.style = "cursor: pointer; padding-top: 6px;";
      bookLink.innerHTML = "More »";
      bookLink.setAttribute("id", "book-link");

      document.getElementById('synopsis').appendChild(bookLink);
    }

  };
  xhr.send();

});
