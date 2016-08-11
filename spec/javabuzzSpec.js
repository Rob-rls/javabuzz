describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('Knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe (true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe (true);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe (true);
    });

  });

  describe('Knows when a number is not', function() {
    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleByThree(1)).toBe (false);
    });

    it('divisble by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe (false);
    });

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe (false);
    });
  });

  describe('Says', function() {
    it('"Java" when the number is divisible by 3', function() {
      expect(javabuzz.says(3)).toBe ('Java');
    });

    it('"Buzz" when the number is divisible by 5', function() {
      expect(javabuzz.says(5)).toBe ('Buzz');
    });

    it('"Javabuzz" when the number is divisible by 15', function() {
      expect(javabuzz.says(15)).toBe ('Javabuzz');
    });


  });


});
