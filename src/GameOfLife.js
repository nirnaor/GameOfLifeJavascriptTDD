function GameOfLife(board_size) {
  if (board_size !== undefined && isNaN(board_size))
      throw new Error("can't initialize board size with a parameter which is not a number");
  this.size = board_size || 10;

  this.matrix = new Array(this.size);
  for (var i = 0; i < this.matrix.length; i += 1) {
    this.matrix[i] = new Array(this.size);
  };

  this.validate_parameter_in_range = function(parameter){
    if (parameter > this.size - 1 || parameter < 0)
      throw new Error("arguments are not within the range of the board");
  };
}


GameOfLife.prototype.add_living_cell = function(x, y){
  this.validate_parameter_in_range(x);
  this.validate_parameter_in_range(y);
  this.matrix[x][y] = 1;
};


GameOfLife.prototype.is_alive = function(x,y){
  return this.matrix[x][y] !== undefined;
};


