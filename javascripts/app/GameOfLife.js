function GameOfLife(board_size) {
  this.init_board(board_size);
}

GameOfLife.prototype.init_board = function(board_size){
  if (board_size !== undefined && isNaN(board_size))
        throw new Error("can't initialize board size with a parameter which is not a number");
    this.size = board_size || 10;

    this.matrix = new Array(this.size);
    for (var i = 0; i < this.matrix.length; i += 1) {
      this.matrix[i] = new Array(this.size);
    };
};


GameOfLife.prototype.validate_parameter_in_range = function(){
    x = arguments[0];
    y = arguments[1];
      if (x > this.size - 1 || x < 0 || y > this.size - 1 || y < 0 )
        throw new Error("arguments are not within the range of the board");
};

GameOfLife.prototype.living_neighbours_amount = function(x, y){
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

GameOfLife.prototype.survives_for_next_generation = function(x, y){
  return this.living_neighbours_amount(x, y) === 2 || 
    this.living_neighbours_amount(x, y) === 3;
};
GameOfLife.prototype.overcrowded = function(x, y){
  return this.living_neighbours_amount(x, y) > 3;
};

GameOfLife.prototype.reproduced = function(x, y){
  return this.living_neighbours_amount(x, y) === 3 && 
    this.is_alive_and_in_range(x, y) === false;
};


GameOfLife.prototype.set_cells_value = function (cells_array, value_to_set){
  for (var k = 0; k < cells_array.length; k += 1) {
    var x = cells_array[k][0];
    var y = cells_array[k][1];
    this.matrix[x][y] = value_to_set;
  };
};

GameOfLife.prototype.evolve = function(){
  var cells_to_kill = new Array();
  var cells_to_revive = new Array();
  var cells_that_survive = new Array();

  for (var i = 0; i < this.size; i += 1) {
    for (var j = 0; j < this.size; j += 1) {
      if(this.is_alive(i,j)){
        if(this.overcrowded(i,j) || this.under_populated(i, j))
          cells_to_kill.push([i, j]);
        else if (this.survives_for_next_generation(i, j))
          cells_that_survive.push([i, j]);
      }
      else
        if(this.reproduced(i, j))
          cells_to_revive.push([i, j]);
    };
  };

  this.init_board(this.size);
  this.set_cells_value(cells_to_kill, undefined);
  this.set_cells_value(cells_to_revive.concat(cells_that_survive), 1);
};
