$(document).ready(function(){
  console.log("hello there");
  var game_of_life = new GameOfLifePatterns().create("bla");


  function evolve_and_draw(){
    console.log('this is draw matrix');
    game_of_life.evolve();
    draw(game_of_life.matrix);
  };

  evolve_and_draw();

  $('#evolve_and_draw').click(function(){
    evolve_and_draw();
  });

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

});
