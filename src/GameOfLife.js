function GameOfLife(board_size) {
  if (board_size !== undefined && isNaN(board_size))
      throw new Error("can't initialize board size with a parameter which is not a number");
  this.size = board_size || 10;

  this.matrix = new Array(this.size);
  for (var i = 0; i < this.matrix.length; i += 1) {
    this.matrix[i] = new Array(this.size);
  };

  this.validate_parameter_in_range = function(){
    x = arguments[0];
    y = arguments[1];
      if (x > this.size - 1 || x < 0 || y > this.size - 1 || y < 0 )
        throw new Error("arguments are not within the range of the board");
  };

  this.living_neighbours_amount = function(x, y){
    var result = 0;

    result += this.is_alive_and_in_range(x, y - 1) ? 1 : 0;
    result += this.is_alive_and_in_range(x - 1, y - 1) ? 1 : 0;
    result += this.is_alive_and_in_range(x + 1, y - 1) ? 1 : 0;

    result += this.is_alive_and_in_range(x - 1, y) ? 1 : 0;
    result += this.is_alive_and_in_range(x + 1, y) ? 1 : 0;

    result += this.is_alive_and_in_range(x, y + 1) ? 1 : 0;
    result += this.is_alive_and_in_range(x - 1, y + 1) ? 1 : 0;
    result += this.is_alive_and_in_range(x + 1, y + 1) ? 1 : 0;

    return result
  };
}

GameOfLife.prototype.add_living_cell = function(x, y){
  this.validate_parameter_in_range.apply(this,[x, y]);
  this.matrix[x][y] = 1;
};

GameOfLife.prototype.is_alive = function(x, y){
  this.validate_parameter_in_range.apply(this, [x,y]);
  return this.matrix[x][y] !== undefined;
};

GameOfLife.prototype.is_alive_and_in_range = function(x,y){
  try{
    return this.is_alive(x,y);
  }
  catch(e){
    return false
  }
};

GameOfLife.prototype.under_populated = function(x, y){
  return this.living_neighbours_amount(x, y) < 2;
};
