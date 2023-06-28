const scores = { X: 1, O: -1, tie: 0 };
function aiMove(calls) {
  let move = maxScore(board, calls).move;
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

function maxScore(board, calls) {
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
    let score = minScore(board, calls).bestScore;
    
    board[i][j] = '';
    if (score > bestScore) {
      bestScore = score;
      move = {i, j};
    }
  }

  return {bestScore, move};
}

function minScore(board, calls) {
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
    let score = maxScore(board, calls).bestScore;
    board[i][j] = '';
    if (score < bestScore) {
      bestScore = score;
      move = {i, j};
    }
  }

  return {bestScore, move};
}