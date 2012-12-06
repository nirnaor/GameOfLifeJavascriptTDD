describe ("GameOfLife", function() {
  var gol;

  beforeEach(function() {
    gol = new GameOfLife(5);
  });

  describe("constructor",function(){
    it("should create a new game of life instance", function() {
      expect(GameOfLife.prototype.isPrototypeOf(gol)).toEqual(true);
    });
  });
  

  describe("board_size", function(){
    it("should init the size of the board with the size given by the user", function(){
      expect(gol.board_size()).toEqual(5);
    });
    it("should init the size of the board with a default value of 10 if not given by the user", function(){
      var gol2 = new GameOfLife();
      expect(gol2.board_size()).toEqual(10);
    });
    it("should except only number in constructor ", function(){
      expect(function(){new GameOfLife("string")}).toThrow("can't initialize board size with a parameter which is not a number");
    });
  });

  describe("add_living_cell",function(){
    it("should add living cells to the board", function(){
      gol.add_living_cell(1,2);
    });
    it("should raise an exception when the cell is out of range", function(){
      expect(function(){gol.add_living_cell(50,12)}).toThrow("arguments are not within the range of the board");
    });
  });


});
