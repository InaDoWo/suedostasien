'use strict';

angular.
module('home').
component('home', {
    templateUrl: 'home/home.template.html',
    controller: function HomeViewController() {
        this.countries = [{
            name: "Brunei",
            imageUrl: "images/bn.jpg"
        }, {
            name: "Cambodia",
            imageUrl: "images/kh.jpg"
        }, {
            name: "Vietnam",
            imageUrl: "images/vn.jpg"
        }];
    }
});
