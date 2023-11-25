//Vaibhav's Version 
const scores = { X: 1, O: -1, tie: 0 };
function aiMove() {
  let move = maxScore(board).move;
  board[move.i][move.j] = ai;
  player = human;
}

// Finds open spots that the ai can place an x
function actions(board) {
  let emptySpots = [];
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (board[i][j] == '') emptySpots.push({i, j});
  return emptySpots;
}

//If the game is not over it
function maxScore(board) {
  let bestScore = -Infinity, move = null;

  // Check if previous move won the game
  const winner = findWinner();
  if (winner != null) {
    bestScore = scores[winner];
    return {bestScore, move};
  }

  // If no winner yet, decide AI's move
  for (const action of actions(board)) {
    let {i, j} = action;  
    board[i][j] = ai;
    //let score = maxScore(board).bestScore;
    let score = minScore(board).bestScore;
    //weeee
    board[i][j] = '';
    if (score > bestScore) {
      bestScore = score;
      move = {i, j};
    }
  }

  return {bestScore, move};
}


//
function minScore(board) {
  let bestScore = Infinity, move = null;
  const winner = findWinner();  
  if (winner != null) {
    bestScore = scores[winner];
    return {bestScore, move};
  }

  for (const action of actions(board)) {
    let {i, j} = action;  
    board[i][j] = human;
    //let score = minScore(board).bestScore;
    let score = maxScore(board).bestScore;
    board[i][j] = '';
    if (score < bestScore) {
      bestScore = score;
      move = {i, j};
    }
  }

  return {bestScore, move};
}