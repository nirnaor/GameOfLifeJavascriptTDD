function GameOfLife(board_size) {
  if (board_size !== undefined && isNaN(board_size))
      throw new Error("can't initialize board size with a parameter which is not a number");
  this.size = board_size || 10;

  this.matrix = new Array(this.size);
  for (var i = 0; i < this.matrix.length; i += 1) {
    this.matrix[i] = new Array(this.size);
  };
}

GameOfLife.prototype.board_size = function(){
  return this.size
};

GameOfLife.prototype.add_living_cell = function(x, y){
  if (x > this.size - 1 || y > this.size - 1)
    throw new Error("arguments are not within the range of the board");
  this.matrix[x][y] = 1;
};


GameOfLife.prototype.is_alive = function(x,y){
  return this.matrix[x][y] !== undefined;
};


