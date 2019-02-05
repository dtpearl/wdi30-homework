// https://www.googleapis.com/books/v1/volumes?q={search terms}
// const data = JSON.parse(xhr.responseText);
// const thumbnail = data["items"][3]["volumeInfo"]["imageLinks"]["thumbnail"];
// const author = data["items"][3]["volumeInfo"]["authors"];
// const synopsis = data["items"][3]["volumeInfo"]["description"];


bookTitle = "Kapital";
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`);
xhr.send();
