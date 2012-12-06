function GameOfLife(board_size) {
  if (board_size !== undefined && isNaN(board_size))
      throw new Error("can't initialize board size with a parameter which is not a number");
  this.size = board_size || 10;
}

GameOfLife.prototype.board_size = function(){
  return this.size
};

GameOfLife.prototype.add_living_cell = function(x, y){
  if (x > this.board_size || y > this.board_size)
    throw new Error("arguments are not within the range of the board");
};


GameOfLife.prototype.is_alive = function(x,y){
  return true
};


