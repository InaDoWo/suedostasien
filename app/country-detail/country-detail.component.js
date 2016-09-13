angular.
module('countryDetail').
component('countryDetail', {
    templateUrl: 'country-detail/country-detail.template.html',
    controller: ['$http', '$routeParams',
        function CountryDetailController($http, $routeParams) {
            var self = this;
            $http.get('https://restcountries.eu/rest/v1/alpha/' + $routeParams.countryAlpha2Code).then(function(response) {
                self.country = response.data;
            });
            $http.get('http://api.openweathermap.org/data/2.5/forecast/city?q=' + $routeParams.capital + '&lang=de&units=metric&APPID=a39a0395d8d318e22241cf4a05cf50e2').then(function(response) {
                self.weather = response.data;
            });
            // $http.get('http://api.sunrise-sunset.org/json?lat=' + $routeParams.lat + '&lng=' + $routeParams.lng).then(function(response) {
            //     self.sun = response.data;
            // });

        }
    ]
});
