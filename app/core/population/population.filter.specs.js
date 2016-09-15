describe('population', function() {

  beforeEach(module('core'));

  it('should add thousand separator to the number of population',
    inject(function(populationFilter) {
      expect(populationFilter("123456789")).toBe('123.456.789');
      expect(populationFilter("12345678")).toBe('12.345.678');
      expect(populationFilter("1234567")).toBe('1.234.567');
    })
  );

});
