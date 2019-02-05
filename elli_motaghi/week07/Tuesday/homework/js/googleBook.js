const fetchBookInfo = function () {
    query = document.getElementById('title').value;

    const xhr = new XMLHttpRequest;
    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${query}`);

    xhr.onreadystatechange = function () {
        if ( xhr.readyState !== 4 ) {
            return;
        }

        const library = JSON.parse(xhr.responseText);

        for (let i = 0; i < library.items.length; i++) {

            const bookInfo = document.createElement('div');
            bookInfo.classList = 'card mx-auto shadow p-3 mb-5 bg-white rounded';
            bookInfo.style = "width: 18rem";

            const div = document.createElement('div');
            div.classList = 'card-body'
          
            bookInfo.appendChild(div);

            const title = document.createElement('h4');
            title.classList = 'card-title';
            title.innerHTML = library.items[i].volumeInfo.title;

            const author = document.createElement('h6');
            author.classList = 'card-text';
            author.innerHTML = library.items[i].volumeInfo.authors;

            const image = document.createElement('img');
            image.src = library.items[i].volumeInfo.imageLinks.thumbnail;
            image.classList = 'rounded mx-auto d-block'; 

            // function addDescription() {
            //     bookInfo.classList.remove("mx-auto");

            //     const div = document.createElement('div');
            //     div.classList = "text"

            //     const date = document.createElement('p');
            //     date.innerHTML = library.items[i].volumeInfo.publishedDate;

            //     const desc = document.createElement('p');
            //     desc.innerHTML = library.items[i].volumeInfo.description;

            //    div.appendChild(date);
            //    div.appendChild(desc);

            //    document.getElementById('books').appendChild(div);
            // };

            // bookInfo.addEventListener('click', addDescription);

            div.appendChild(title);
            div.appendChild(author);
            div.appendChild(image);

            document.getElementById('books').appendChild(bookInfo);

        }
    }
    
    xhr.send();

};

document.getElementById('fetch').addEventListener('click', fetchBookInfo);