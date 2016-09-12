'use strict';

angular.
  module('core').
  filter('timedifference', function() {
    return function(input) {
      return parseInt(input.split('+')[1].split(':')[0]) - 2;
    };
  });
