let player = 1
const grid = {

  1: $('#grid1').on('click', function() {
    wins.row[0] += player;
    wins.col[0] += player;
    wins.diag[0] += player
    wins.win()
  }),
  2: $('#grid2').on('click', function() {
    wins.row[0] += player;
    wins.col[1] += player;
    wins.win()
  }),
  3: $('#grid3').on('click', function() {
    wins.row[0] += player;
    wins.col[2] += player;
    wins.diag[1] += player
    wins.win()
  }),
  4: $('#grid4').on('click', function() {
    wins.row[1] += player;
    wins.col[0] += player;
    wins.win()
  }),
  5: $('#grid5').on('click', function() {
    wins.row[1] += player;
    wins.col[1] += player;
    wins.diag[0] += player;
    wins.diag[1] += player;
    wins.win()
  }),
  6: $('#grid6').on('click', function() {
    wins.row[1] += player;
    wins.col[2] += player;
    wins.win()
  }),
  7: $('#grid7').on('click', function() {
    wins.row[2] += player;
    wins.col[0] += player;
    wins.diag[1] += player;
    wins.win()
  }),
  8: $('#grid8').on('click', function() {
    wins.row[2] += player;
    wins.col[1] += player;
    wins.win()
  }),
  9: $('#grid9').on('click', function() {
    wins.row[2] += player;
    wins.col[2] += player;
    wins.diag[0] += player;
    wins.win()
  })
}

const gridScore = function (row, col, diag){
  if ($(this).hasClass("bgnoughts") === false){
    if ($(this).hasClass( "bgcrosses" ) === false){
  wins.row[row] += player;
  wins.col[col] += player;
  wins.diag[diag] += player;
    }
  }
}

$('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').on('click', function() {

if ($(this).hasClass("bgnoughts") === false){
  if ($(this).hasClass( "bgcrosses" ) === false){
  if (player === 1) {
    $(this).addClass( "bgnoughts" )
    $(this).html('<h1>O</h1>')
    player = 5;
  } else {
    $(this).addClass( "bgcrosses" )
    $(this).html('<h1>X</h1>')
    player = 1
    }
  }
}
})

$('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').mouseover(function() {
if (!$(this).hasClass( "bgnoughts" ) && !$(this).hasClass( "bgcrosses" ))
$(this).addClass( "animated flash" )
}).mouseout(function() {
    $( this ).removeClass( "animated flash" );
  });

const win = function (player){
    $('.grid').addClass('animated zoomOutUp')
    $(player).addClass('animated slideInUp')
    $(player).css('visibility', 'visible');
    for (let i = 0; i < 3; i++){
    wins.row[i] = 0;
    wins.col[i] = 0;
    wins.diag[i] = 0;
    }
  }

$('button').on('click', function() {
$('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6, #grid7, #grid8, #grid9').removeClass('bgnoughts').removeClass('bgcrosses').html('')
$('.player1, .player2').removeClass('animated slideInUp').css('visibility', 'hidden')
$('.grid').removeClass('animated zoomOutUp').addClass('animated rotateIn')
player = 1
});
