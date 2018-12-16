var arr1    = ['H', 'E', 'L', 'L', 'O'];
      var guessarr  = ['_', '_', '_', '_'];

      function guessLetter(letter) {
          var goodGuess = false;
          var moreToGuess = false;
          for (var i = 0; i < arr1.length; i++) {
              if (arr1[i] == letter) {
                  guessarr[i] = letter;
                  goodGuess = true;
              }
              if (guessarr[i] == '_') {
                  moreToGuess = true;
              }
          }
          if (goodGuess) {
              console.log('Correct!');
              console.log(guessarr.join(''));
              if (!moreToGuess) {
                  console.log('YOU WON!');
              }
          } else {
              console.log('Incorrect');
          }
      }

      guessLetter('h');
      guessLetter('e');
      guessLetter('l');
      guessLetter('A');
      guessLetter('O');
