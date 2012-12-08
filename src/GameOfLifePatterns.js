function GameOfLifePatterns(){
  this.supported = ['blinker', 'toad'];
}

GameOfLifePatterns.prototype.create = function(pattern){
  if ($.inArray(pattern, this.supported) === false)
    throw new Error("pattern is not supported yet");
  var result = new GameOfLife(10);

  if(pattern === "blinker"){
      result.add_living_cell(3, 1);
      result.add_living_cell(3, 2);
      result.add_living_cell(3, 3);
  }
  else if (pattern === "toad"){
      result.add_living_cell(3, 6);
      result.add_living_cell(4, 6);
      result.add_living_cell(5, 6);
      result.add_living_cell(2, 7);
      result.add_living_cell(3, 7);
      result.add_living_cell(4, 7);
  }
  else
      throw new Error("pattern is not supported yet");

  return result;
}

GameOfLifePatterns.prototype.supported_patterns = function(){
  return this.supported;
}
