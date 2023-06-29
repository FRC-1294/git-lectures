const scores = { X: 1, O: -1, tie: 0 };


function aiMove(calls) {

  // Use alpha–beta pruning to fix the performance issue 
  // https://en.wikipedia.org/wiki/Alpha-beta_pruning
  let alpha = -Infinity;
  let beta = Infinity;

  let move = maxScore(board, alpha, beta,calls).move;
  board[move.i][move.j] = ai;
  player = human;
}

function actions(board) {
  let emptySpots = [];
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (board[i][j] == '') emptySpots.push({i, j});
  return emptySpots;
}

function maxScore(board, alpha, beta,calls) {
  calls.countMaxScores++;
  let bestScore = -Infinity, move = null;
  const winner = findWinner();
  if (winner != null) {
    bestScore = scores[winner];
    return {bestScore, move};
  }

  for (const action of actions(board)) {
    let {i, j} = action;  
    board[i][j] = ai;
    let score = minScore(board, alpha, beta,calls).bestScore;
    
    board[i][j] = '';
    if (score > bestScore) {
      bestScore = score;
      move = {i, j};
      alpha = Math.max(alpha, bestScore);
      if (alpha >= beta) break;
    }
  }

  return {bestScore, move};
}

function minScore(board, alpha, beta,calls) {
  calls.countMinScores++;
  let bestScore = Infinity, move = null;
  const winner = findWinner();  
  if (winner != null) {
    bestScore = scores[winner];
    return {bestScore, move};
  }

  for (const action of actions(board)) {
    let {i, j} = action;  
    board[i][j] = human;
    let score = maxScore(board, alpha, beta,calls).bestScore;
    board[i][j] = '';
    if (score < bestScore) {
      bestScore = score;
      move = {i, j};
      beta = Math.min(beta, bestScore);
      if (alpha >= beta) break;
    }
  }

  return {bestScore, move};
}