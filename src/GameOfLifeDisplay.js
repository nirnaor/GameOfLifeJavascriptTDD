$(document).ready(function(){
  console.log("hello there");
  var patterns = new GameOfLifePatterns();


  function draw_matrix(){
    console.log('this is draw matrix');
    gol_instance = patterns.create("bla");
    draw(gol_instance.matrix);
  };


  function createLabel(inner_text){
    return $("<label>").text(inner_text);
  };

  function draw(matrix){
    var result = $("<div>");
    for (var i = 0; i < matrix.length; i += 1) {
      for (var j = 0; j < matrix[i].length; j += 1) {
        if (matrix[i][j] === 1)
          result.append(createLabel("1"));
        else
          result.append(createLabel("0"));
      };
      result.append($("<br>"));
    };

    $('#game_of_life_display').html(result);

  };

  draw_matrix();
});
