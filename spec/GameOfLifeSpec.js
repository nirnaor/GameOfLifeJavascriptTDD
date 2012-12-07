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
    it("should not  raise an exception when the cell is in range", function(){
      var gol2 = new GameOfLife(60);
      expect(gol2.add_living_cell(50, 12)).toEqual(undefined);
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
    it("should raise an exception when a negative number is given", function(){
      expect(function(){gol.is_alive(-1, -2)}).toThrow("arguments are not within the range of the board");
    });
  });

  describe("is_alive_and_in_range", function(){
    beforeEach(function(){
      gol3 = new GameOfLife(20);
      gol3.add_living_cell(0,0);
      gol3.add_living_cell(0,1);
      gol3.add_living_cell(0,2);
    });

    it("should return true if cell is alive", function(){
      expect(gol3.is_alive_and_in_range(0, 0)).toEqual(true);
    });
    it("should return false if cell is not alive", function(){
      expect(gol3.is_alive_and_in_range(4, 0)).toEqual(false);
    });
    it("should return false if cell is not in range", function(){
      expect(gol3.is_alive_and_in_range(400, 0)).toEqual(false);
    });
  });

  describe("living_neighbours_amount", function(){
    beforeEach(function(){
      gol3 = new GameOfLife(20);
      gol3.add_living_cell(0,0);
      gol3.add_living_cell(0,1);
      gol3.add_living_cell(0,2);
    });

    it("should return 0 if cell has no living neighbours",function(){
      expect(gol3.living_neighbours_amount(5, 5)).toEqual(0);
    });
    it("should return 1 if cell has 1 living neighbours",function(){
      expect(gol3.living_neighbours_amount(0, 2)).toEqual(1);
    });
    it("should return 2 if cell has 2 living neighbours",function(){
      expect(gol3.living_neighbours_amount(0, 1)).toEqual(2);
    });
    it("should return 8 if cell has 8 living neighbours",function(){
      gol3.add_living_cell(5,0);
      gol3.add_living_cell(5,2);
      gol3.add_living_cell(4,0);
      gol3.add_living_cell(4,1);
      gol3.add_living_cell(4,2);
      gol3.add_living_cell(6,0);
      gol3.add_living_cell(6,1);
      gol3.add_living_cell(6,2);
      expect(gol3.living_neighbours_amount(5, 1)).toEqual(8);
    });

  });


  describe("under_populated",function(){
    beforeEach(function(){
      gol3 = new GameOfLife(20);
      gol3.add_living_cell(0,0);
      gol3.add_living_cell(0,1);
      gol3.add_living_cell(0,2);
    });

    it("should return true if a cell has 0 living neighbours", function(){
      expect(gol3.under_populated(3,3)).toEqual(true);
    });
    it("should return true if a cell has 1 living neighbours", function(){
      expect(gol3.under_populated(0,0)).toEqual(true);
    });
    it("should return false if a cell has 2 living neighbours", function(){
      expect(gol3.under_populated(0,1)).toEqual(false);
    });
    it("should return false if a cell has more then  2 living neighbours", function(){
      gol3.add_living_cell(1,2);
      expect(gol3.under_populated(0,1)).toEqual(false);
    });
  });


});
