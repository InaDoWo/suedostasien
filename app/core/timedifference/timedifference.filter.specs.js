describe('timedifference', function() {

  beforeEach(module('core'));

  it('should calculate the timedifference to CEST',
    inject(function(timedifferenceFilter) {
      expect(timedifferenceFilter("UTC+06:00")).toBe(4);
    })
  );

});
