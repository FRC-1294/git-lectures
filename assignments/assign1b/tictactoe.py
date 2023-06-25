"""
Tic Tac Toe Player
"""

import math
from collections import Counter
X = 'X'
O = 'O'
Tie = 'no player'
EMPTY = None
scores = {X : 1, O : -1, Tie : 0}

def initial_state():
    """
    Returns starting state of the board.
    """
    return [[EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]]

def player(board):
    """
    Returns player who has the next turn on a board.
    """
    frequencies = [Counter(row) for row in board]
    countX = sum([counter[X] for counter in frequencies])
    countO = sum([counter[O] for counter in frequencies])

    if countX <= countO:
        return X    
    return O

def actions(board):
    """
    Returns set of all possible actions (i, j) available on the board.
    """
    _actions = []
    for i in range(3):
        for j in range(3):
            if board[i][j] == EMPTY:
                _actions.append((i, j))
    return _actions

def result(board, action):
    """
    Returns the board that results from making move (i, j) on the board.
    """    
    i, j = action
    board[i][j] = player(board)
    return board

def equal3(a, b, c):
     return a == b and b == c and a is not EMPTY

def winner(board):
    """
    Returns the winner of the game, if there is one.
    """
    for i in range(3): 
        if equal3(board[i][0], board[i][1], board[i][2]):
            return board[i][0]
    
    for j in range(3): 
        if equal3(board[0][j], board[1][j], board[2][j]):
            return board[0][j]
    
    if equal3(board[0][0], board[1][1], board[2][2]):
        return board[0][0]

    if equal3(board[0][2], board[1][1], board[2][0]):
        return board[0][2]
      
    return None

def terminal(board):
    """
    Returns True if game is over, False otherwise.
    """
    if winner(board) is not None:
        return True
    
    frequencies = [Counter(row) for row in board]
    countEmpty = sum([counter[EMPTY] for counter in frequencies])
    if countEmpty == 0:
        return True

    return False
    
def utility(board):
    """
    Returns 1 if X has won the game, -1 if O has won, 0 otherwise.
    """
    player = winner(board)
    if player is None:        
        return scores[Tie]

    return scores[player]
    
def maxValue(board):
    if (terminal(board)):
        return (utility(board), None)

    bestScore, move = -math.inf, None
    for (i, j) in actions(board):
        board[i][j] = X
        score = minValue(board)[0]
        board[i][j] = EMPTY
        if score > bestScore:
            bestScore = score
            move = (i, j)

    return (bestScore, move)

def minValue(board):
    if (terminal(board)):
        return (utility(board), None)
        
    bestScore, move = math.inf, None
    for (i, j) in actions(board):
        board[i][j] = O
        score = maxValue(board)[0]
        board[i][j] = EMPTY
        if score < bestScore:
            bestScore = score
            move = (i, j)
            
    return (bestScore, move)

def minimax(board):
    """
    Returns the optimal action for the current player on the board.
    """
    if terminal(board):
        return None
    
    currentPlayer = player(board)
    if currentPlayer == X:
        return maxValue(board)[1]
    else:
        return minValue(board)[1]
