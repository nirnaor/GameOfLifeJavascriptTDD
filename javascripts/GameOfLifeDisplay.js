$(document).ready(function(){
  var displayer = new GameOfLifeDisplayer($('#game_of_life_display'), 
                                            Patterns.create('toad'));
  displayer.start();
  function init_patterns(){
    var supported = Patterns.supported_patterns();
    $.each(supported, function(value, text){
      $('#patterns').append(new Option(text, text));
    });
  }
  init_patterns();


  $('#patterns').change(function(pattern){
    var selected_pattern = $('#patterns').val();
    displayer.change_pattern(Patterns.create(selected_pattern));
    displayer.start();
  });
});
