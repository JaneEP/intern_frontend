function createBoard() {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push([]);
    for (let j = 0; j < 8; j++) {
      board[i].push({
        hasChecker: null,
      });
    }
  }
  // console.log(board)
  return board;
 
}

export default createBoard;

const creatCeil = (x, y, lastMove) => {
  const { blackX, blackY, whiteX, whiteY } = lastMove;

  const isBlack = blackX === x && blackY === y;
  const isWhite = whiteX === x && whiteY === y;

  if (isBlack) return "black";
  if (isWhite) return "white";
  return null;
};

export const createBoardFromLastMove = (lastMove) => {
  let board = [];
  for (let i = 0; i < 8; i++) {
    board.push([]);
    for (let j = 0; j < 8; j++) {
      board[i].push({
        hasChecker: creatCeil(i, j, lastMove),
      });
    }
  }
  return board;
};
