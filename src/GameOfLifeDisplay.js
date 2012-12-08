$(document).ready(function(){
  console.log("hello there");
  var patterns = new GameOfLifePatterns();


  function draw_matrix(){
    console.log('this is draw matrix');
    gol_instance = patterns.create("bla");
    draw(gol_instance.matrix);
  };

  function draw(matrix){
    var result = "";
    for (var i = 0; i < matrix.length; i += 1) {
      for (var j = 0; j < matrix[i].length; j += 1) {
        if (matrix[i][j] === 1)
          result += "1";
        else
          result += "0";
      };
      result += "\n";
    };

    $('#game_of_life_display').text(result);

  };

  draw_matrix();
});
