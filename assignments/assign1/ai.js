const scores = { X: 1, O: -1, tie: 0 };
function aiMove() {  
  let move = maxScore(board).move;
  board[move.i][move.j] = ai;
  player = human;
}

function maxScore(board) {
  let bestScore = -Infinity, move = null;
  const winner = findWinner();
  if (winner != null) {
    bestScore = scores[winner];
    return {bestScore, move};
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {      
      if (board[i][j] == '') {        
        board[i][j] = ai;
        let score = maxScore(board).bestScore;
        board[i][j] = '';
        if (score > bestScore) {
          bestScore = score;
          move = {i, j};
        }
      }
    }
  }
  return {bestScore, move};
}

function minScore(board) {
  let bestScore = Infinity, move = null;
  const winner = findWinner();
  if (winner != null) {
    bestScore = scores[winner];
    return {bestScore, move};
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {      
      if (board[i][j] == '') {        
        board[i][j] = human;
        let score = minScore(board).bestScore;
        board[i][j] = '';
        if (score < bestScore) {
          bestScore = score;
          move = {i, j};
        }       
      }
    }
  }
  return {bestScore, move};
}