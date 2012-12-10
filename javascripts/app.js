alert('hello');
requirejs.config({
  baseUrl: 'javascripts/lib',
  paths: {
    app: '../app'
  }
});


requirejs(['jquery' ], function(){
  requirejs(['app/GameOfLife','app/GameOfLifePatterns'], function(){
    requirejs(['app/GameOfLifeDisplayer'], function(){
      requirejs(['app/GameOfLifeDisplay'], function(){});
    });
  });
});
