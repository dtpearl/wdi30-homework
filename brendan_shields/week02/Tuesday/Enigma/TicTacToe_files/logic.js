const wins = {
  //col        1  2  3
  row:        [0, 0, 0],
  //row        1  2  3
  col:        [0, 0, 0],
  //diag       1  2  3
  diag:       [0, 0, 0],

  win: function() {
  for (i = 0; i < 3; i++) {
    if (+wins.row[i] === 3 || +wins.col[i] === 3 || +wins.diag[i] === 3) {
      win('.player1')
    } else if (+wins.row[i] === 15 || +wins.col[i] === 15 || +wins.diag[i] === 15) {
      win('.player2')
    }
  }
}
}
