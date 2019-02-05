const fetchFact = function(name){
  const xhr = new XMLHttpRequest();
  xhr.open('GET','https://www.googleapis.com/books/v1/volumes?q=search+'+ name);
  xhr.onreadystatechange = function(){
    if (xhr.readyState !== 4){
      return;
    }
    // console.log( xhr.responseText);
    const data = JSON.parse(xhr.responseText);
    // console.log(data["items"]["volumnInfo"]);
    console.log(data["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"]);
    const title = data["items"][0]["volumeInfo"]["title"];
    const imagelink = data["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"];
    console.log(data["items"][0]["volumeInfo"]);
    const authors = data["items"][0]["volumeInfo"]["authors"];
    // console.log(authors);
    const p = document.createElement('p');
    p.innerHTML = title;
    // div = $('<div>');

    const img = $('<img>');
    img.attr('src' ,imagelink);
    const br = $('<br >');

    const lb = $('<label>');
    lb.html("Author:")
    const ul = $('<ul>');
    $.each(authors, function( index, value ){
      const li = $('<li>');
      li.html(value);
      li.appendTo(ul);
    });

    // const div = $('<div>');
    const div = document.createElement('div');
    // const img = $(document.createElement('img'));
    // img.attr('src' ,imagelink);
    div.appendChild(p);
    img.appendTo(div);
    br.appendTo(div);
    lb.appendTo(div);
    ul.appendTo(div);

    // p.appendTo('div');
    // document.body.appendChild(p);
    // div.appendChild(img);

    // document.body.innerHTML = data.text;
    document.body.appendChild(div);
  }
  // xhr.onerror = function(){
  //   console.log('error');
  // }
  xhr.send();
};

$('#search').on('click', function(){
  if($('#bookname').val() !== "")
  fetchFact($('#bookname').val());
});
