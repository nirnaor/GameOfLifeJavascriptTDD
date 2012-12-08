function GameOfLifePatterns(){
}

GameOfLifePatterns.prototype.create = function(pattern){
  var result = new GameOfLife(5);
  result.add_living_cell(3, 1);
  result.add_living_cell(3, 2);
  result.add_living_cell(3, 3);
  return result;
}
