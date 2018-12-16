// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever. /// ??

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.



// heart ////////////////////////////////////////////////////
const heartImage = document.getElementsByTagName('img')[4];
heartImage.style.opacity = 1.0;
heartImage.style.position = 'absolute';
heartImage.style.top = '130px';

const fadeAwayMoveUp = function () {
    heartImage.style.opacity = heartImage.style.opacity - 0.008;
    const heartOldTop = parseInt(heartImage.style.top);
    const heartNewTop = heartOldTop - 1;
    heartImage.style.top = heartNewTop + 'px';
    if (heartImage.style.opacity === 0) {
        window.clearInterval(firstTimer);
    }
};

const firstTimer = window.setInterval(fadeAwayMoveUp, 100);


// clouds ////////////////////////////////////////////////////
const cloudImage1 = document.getElementsByTagName('img')[1];
const cloudImage2 = document.getElementsByTagName('img')[2];

cloudImage1.style.position = 'absolute';
cloudImage2.style.position = 'absolute';

cloudImage1.style.left = '60px';
cloudImage2.style.left = '260px';


const cloudsMove = function () {
    const oldCloud1 = parseInt(cloudImage1.style.left);
    const newCloud1 = oldCloud1 + 1;
    cloudImage1.style.left = newCloud1 + 'px';

    const oldCloud2 = parseInt(cloudImage2.style.left);
    const newCloud2 = oldCloud2 + 1;
    cloudImage2.style.left = newCloud2 + 'px';

    if (cloudImage2.style.left === '1300px') {
        window.clearInterval(cloudTimer);
    }
};

const cloudTimer = window.setInterval(cloudsMove, 30);

// happy dog /////////////////////////////////////////////////////

const happyDogImage = document.getElementsByTagName('img')[5];
happyDogImage.style.position = 'absolute';
happyDogImage.style.left = '0px';


let happyDogTimer;

const dogWalk = function () {
    const oldPosition = parseInt(happyDogImage.style.left);
    const newPosition = oldPosition + 1;
    happyDogImage.style.left = newPosition + 'px';

    if (happyDogImage.style.left === '1450px') {
        window.clearInterval(happyDogTimer);

        const reverseDogImage = document.getElementsByTagName('img')[6];
        reverseDogImage.src = '../images/dog01.gif';
        reverseDogImage.style.position = 'absolute';
        reverseDogImage.style.right = '0px';

        const dogWalkBack = function () {
            const oldPosition = parseInt(reverseDogImage.style.right);
            const newPosition = oldPosition + 1;
            reverseDogImage.style.right = newPosition + 'px';
            if (reverseDogImage.style.right === '1450px') {
                window.clearInterval(reverseDogTimer);

                happyDogImage.style.left = '0px';
                happyDogTimer = window.setInterval(dogWalk, 3);
            }
        };

        const reverseDogTimer = window.setInterval(dogWalkBack, 3);
    }
};

happyDogTimer = window.setInterval(dogWalk, 3);



// crazy dog /////////////////////////////////////////////////////

const crazyDogImage = document.getElementsByTagName('img')[7];
crazyDogImage.style.position = 'absolute';
crazyDogImage.style.right = '0px';



// right to left
const crazyDogWalk = function () {
    const oldPosition = parseInt(crazyDogImage.style.right);
    const newPosition = oldPosition + 1;
    crazyDogImage.style.right = newPosition + 'px';

    if (crazyDogImage.style.right === '630px') {
        window.clearInterval(crazyDogTimer);
        crazyDogImage.style.opacity = 0;

        const dancingDogImage = document.getElementsByTagName('img')[9];
        dancingDogImage.src = '../images/dog02.gif';
        dancingDogImage.style.position = 'absolute';
        dancingDogImage.style.right = '630px';

        const stopDancing = function () {
            dancingDogImage.style.opacity = 0;
        }

        const stopTimer = window.setTimeout(stopDancing, 3000);
    }

};

const crazyDogTimer = window.setInterval(crazyDogWalk, 3);


// left to right

const crazyDogImage2 = document.getElementsByTagName('img')[8];
crazyDogImage2.src = '../images/dog03.gif';
crazyDogImage2.style.position = 'absolute';
crazyDogImage2.style.left = '0px';

const crazyDogWalk2 = function () {
    const oldPosition = parseInt(crazyDogImage2.style.left);
    const newPosition = oldPosition + 1;
    crazyDogImage2.style.left = newPosition + 'px';

    if (crazyDogImage2.style.left === '630px') {
        window.clearInterval(crazyDogTimer2);
        crazyDogImage2.style.opacity = 0;

    }
};

crazyDogTimer2 = window.setInterval(crazyDogWalk2, 3);