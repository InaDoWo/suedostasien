describe('countryDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('countryDetail'));

  // Test the controller
  describe('CountryDetailController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://restcountries.eu/rest/v1/alpha/de').respond({name: 'Germany'});

      $routeParams.countryAlpha2Code = 'de';
      $httpBackend.expectGET('http://api.openweathermap.org/data/2.5/forecast/city?q=Berlin&lang=de&units=metric&APPID=a39a0395d8d318e22241cf4a05cf50e2').respond({name : 'Berlin'});

      $routeParams.capital = 'Berlin';

      ctrl = $componentController('countryDetail');
    }));

    it('should fetch the country details', function() {
      expect(ctrl.country).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.country).toEqual({name: 'Germany'});
    });

  });

});
