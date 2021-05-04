describe ("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function(){
    fizzBuzz = new FizzBuzz();
  });

  describe("fizzBuzz.query", function() {
    it("returns a number for none fizzbuzz number", function(){
      expect(fizzBuzz.query(1)).toEqual(1);
    });
    it("returns a fizz output if given 3", function(){
      expect(fizzBuzz.query(3)).toEqual("Fizz");
    });
    it("returns a fizz output for any multiple of 3", function(){
      expect(fizzBuzz.query(9)).toEqual("Fizz");
    });
    it("returns a buzz output for any multiple of 5", function(){
      expect(fizzBuzz.query(20)).toEqual("Buzz");
    });
    it("returns a fizzbuzz output for any multiple of 3 and 5", function(){
      expect(fizzBuzz.query(15)).toEqual("FizzBuzz");
    });
  });

  describe("fizzBuzz.counter", function() {
    it("returns an array of numbers starting with one", function(){
      expect(fizzBuzz.counter()[0]).toEqual(1);
    });
    it("returns an array incrementing +1 each time", function(){
      expect(fizzBuzz.counter()[6]).toEqual(7);
    });
    it("returns an array with fizzbuzz replacements", function(){
      expect(fizzBuzz.counter()[29]).toEqual("FizzBuzz");
    })
  });
});