describe('home', function() {

  beforeEach(module('home'));

  describe('controller', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('countries/countries.json')
                  .respond([{name: 'Brunei'}, {name: 'Cambodia'}]);

      ctrl = $componentController('home');
    }));

  });

});
