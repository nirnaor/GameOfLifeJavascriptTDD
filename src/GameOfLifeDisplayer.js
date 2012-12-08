function GameOfLifeDisplayer(container, game_of_life_instance){
  this.container = container;
  this.game_of_life = game_of_life_instance;
}

GameOfLifeDisplayer.prototype.start = function(){
  //setInterval(function(){
    this.game_of_life.evolve();
    this.draw(this.game_of_life.matrix);
  //}, 1000);
}

GameOfLifeDisplayer.prototype.draw = function(matrix){
    this.container.html("");
    var result = $("<div>");

    for (var i = 0; i < matrix.length; i += 1) {
      for (var j = 0; j < matrix[i].length; j += 1) {
        if (matrix[i][j] === 1)
          result.append($("<label>").text("1"));
        else
          result.append($("<label>").text("0"));
      };
      result.append($("<br>"));
    };

    this.container.html(result);
}

