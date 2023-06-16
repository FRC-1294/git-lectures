function aiMove() {
  let bestScore = -Infinity;  
  let move;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {      
      if (board[i][j] == '') {        
        board[i][j] = ai;
        let score = minimax(board, false);
        board[i][j] = '';
        if (score > bestScore) {
          bestScore = score;  
          move = {i, j};
        }        
      }
    }
  }
  
  board[move.i][move.j] = ai;
  player = human;
}

const scores = { X: 1, O: -1, tie: 0 };
function minimax(board, scoreMaximizer) {
  const result = findWinner();
  if (result != null) return scores[result];  
    
  if (scoreMaximizer) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') { 
          board[i][j] = ai;
          let score = minimax(board, false);
          board[i][j] = '';
          bestScore = max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == '') { 
          board[i][j] = human;
          let score = minimax(board, true);
          board[i][j] = '';
          bestScore = min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}
