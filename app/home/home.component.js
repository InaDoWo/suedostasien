'use strict';

angular.
module('home').
component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$http', function HomeViewController($http) {
      var self = this;
      $http.get('countries/countries.json').then(function(response){
        self.countries = response.data;
      });
    }]
});
