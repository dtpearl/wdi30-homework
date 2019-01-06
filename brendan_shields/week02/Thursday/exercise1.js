const link = document.querySelectorAll('ul a');
console.log(link)


for (var i = 0; i < link.length; i++) {
  let href = link[i].getAttribute("href")


  console.log(href)
    const thumb = youtube.generateThumbnailUrl(href);
  console.log(thumb)
    const elem = document.createElement('img')
    console.log(elem)
    elem.setAttribute('src', thumb);
    link[i].appendChild(elem)
}
