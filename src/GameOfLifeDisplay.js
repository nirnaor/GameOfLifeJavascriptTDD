$(document).ready(function(){

  $('#evolve_and_draw').click(function(){

  var game_of_life = new GameOfLifePatterns().create("bla");
  var displayer = new GameOfLifeDisplayer
      ($('#game_of_life_display'), game_of_life);
      displayer.start();
  });
});
