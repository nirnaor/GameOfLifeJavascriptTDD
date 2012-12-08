$(document).ready(function(){
  var patterns = new GameOfLifePatterns();
  var displayer = new GameOfLifeDisplayer($('#game_of_life_display'), 
                                            patterns.create('toad'));

  function init_patterns(){
    var supported = patterns.supported_patterns();
    $.each(supported, function(value, text){
      $('#patterns').append(new Option(text, text));
    });

  }
  init_patterns();

  $('#patterns').change(function(pattern){
    var selected_pattern = $('#patterns').val();
    displayer.change_pattern(patterns.create(selected_pattern));
    displayer.start();
  });
});
