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
  

  describe("size attribute", function(){
    it("should init the size of the board with the size given by the user", function(){
      expect(gol.size).toEqual(5);
    });
    it("should init the size of the board with a default value of 10 if not given by the user", function(){
      var gol2 = new GameOfLife();
      expect(gol2.size).toEqual(10);
    });
    it("should except only number in constructor ", function(){
      expect(function(){new GameOfLife("string")}).toThrow("can't initialize board size with a parameter which is not a number");
    });
  });

  describe("add_living_cell",function(){
    it("should add living cells to the board", function(){
      gol.add_living_cell(4,2);
    });
    it("should raise an exception when the cell is out of range", function(){
      expect(function(){gol.add_living_cell(50, 12)}).toThrow("arguments are not within the range of the board");
    });
    it("should raise an exception when the cell is out of range", function(){
      expect(function(){gol.add_living_cell(3, 5)}).toThrow("arguments are not within the range of the board");
    });
    it("should raise an exception when a negative number is given", function(){
      expect(function(){gol.add_living_cell(-1, -2)}).toThrow("arguments are not within the range of the board");
    });
  });


  describe("is_alive",function(){
    var gol3;
    beforeEach(function(){
      gol3 = new GameOfLife();
      gol3.add_living_cell(1,2);
      gol3.add_living_cell(2,2);
      gol3.add_living_cell(3,2);
    });

    it("should return true if the checked cell was added to the board",function(){
      expect(gol3.is_alive(3,2)).toEqual(true);
    });
    it("should return false if the checked cell was not added to the board",function(){
      expect(gol3.is_alive(3,3)).toEqual(false);
    });
  });


});
