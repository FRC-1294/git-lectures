let board = [  
  ['', '', ''],  
  ['', '', ''],
  ['', '', '']];

let ai = 'X';
let human = 'O';
let player = ai;

// width and height for each cell in the board
let w;
let h;

// Keep track number of function calls
let countMaxScores = 0;
let countMinScores = 0;
let calls = {countMaxScores, countMinScores};

function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
  aiMove(calls);
}

function mousePressed() {
  if (player == human) {    
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    
    if (board[i][j] == '') {
      board[i][j] = human;
      player = ai;
      aiMove(calls);
    }    
  }
}

function draw() {
  background(220);
  strokeWeight(4);
  textSize(32);
    
  line(w, 0, w, height);
  line(w*2, 0, w*2, height);
  line(0, h, width, h);
  line(0, h*2, width, h*2);
  
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      
      let x = w * i + w/2;
      let y = h * j + h/2;
      
      let current = board[i][j];                
      if (current == human) {
        noFill();
        ellipse(x, y, w/2);
      } else if (current == ai) {
        let xr = w/4;
        line(x-xr, y-xr, x + xr, y+xr);
        line(x+xr, y-xr, x - xr, y+xr);        
      }
    }    
  }
    
  let result = findWinner();
  if (result != null) {
    noLoop();
    let resultText = createP('');
    resultText.style('font-size', '32pt');
    if (result == 'tie') {
      resultText.html(`(${calls.countMaxScores}, ${calls.countMinScores}) - 'Tie!`);
    } else {
      resultText.html(`(${calls.countMaxScores}, ${calls.countMinScores}) - ${result} wins!`);
    }        
  }
}

function findWinner() {
  for (let i = 0; i < 3; i++) {
    if (e3(board[i][0], board[i][1], board[i][2])) {
      return board[i][0];
    }
  }

  for (let j = 0; j < 3; j++) {
    if (e3(board[0][j], board[1][j], board[2][j])) {
      return board[0][j];
    }
  }

  if (e3(board[0][0], board[1][1], board[2][2])) {
    return board[0][0];
  }
  
  if (e3(board[2][0], board[1][1], board[0][2])) {
    return board[2][0];
  }
  
  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        openSpots++;
      }
    }
  }
  
  if (openSpots == 0) {
    return 'tie';
  } 

  return null;  
}

function e3(a, b, c) {
  return a == b && b == c && a != '';
}