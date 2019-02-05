const img = document.getElementsByTagName('img')[0];
img.style.left = '0px';
const catWalk = function() {
    const currentLeft = parseInt(img.style.left);
    img.style.left = (currentLeft + 10) + 'px';
    if (currentLeft > (window.innerWidth - img.width)) {
        img.style.left = '0px';
    }
}
window.setInterval(catWalk, 50);
transform.catWalk: scaleX(-1)