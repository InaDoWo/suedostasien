angular.
  module('countryDetail').
  component('countryDetail', {
    templateUrl: 'country-detail/country-detail.template.html',
    controller: ['$http', '$routeParams',
      function CountryDetailController($http, $routeParams) {
        var self = this;
        $http.get('https://restcountries.eu/rest/v1/alpha/' + $routeParams.countryAlpha2Code).then(function(response){
          self.country = response.data;
        });
      }
    ]
  });
