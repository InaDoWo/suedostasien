'use strict';

angular.
  module('core').
  filter('population', function() {
    return function(input) {
      input = input.toString();
      var length = input.length;
      var count = length % 3;
      var commaSepar;
      if (count == 0) {
          length = length / 3;
          commaSepar = input.substring(0, 3);
          for (var i = 1; i < length; i++) {
              commaSepar = commaSepar + '.' + input.substring(3 * i, 3 * i + 3);
          }
          return commaSepar;
      } else if (count == 1) {
          length = (length - 1) / 3;
          commaSepar = input.substring(0, 1);
          for (var i = 1; i <= length; i++) {
              commaSepar = commaSepar + '.' + input.substring(3 * i -2, 3 * i + 1);
              console.log(commaSepar);

          }
          return commaSepar;
      } else {
          commaSepar = input.substring(0, 2);
          length = (length - 2) / 3;
          for (var i = 1; i <= length; i++) {
              commaSepar = commaSepar + '.' + input.substring(3 * i - 1, 3 * i + 2);
          }
          return commaSepar;
      }
    };
  });
