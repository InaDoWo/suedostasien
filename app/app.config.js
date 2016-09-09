angular.
module('myApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/home', {
            template: '<home></home'
        }).
        when('/countries/countries/:countryAlpha2Code', {
            template: '<country-detail></country-detail>'
        }).
        otherwise('/home');
    }
]);
