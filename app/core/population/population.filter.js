'use strict';

angular.
  module('core').
  filter('translation', function() {
    return function bla(input) {
      var count = input%3;
      var length = input.length;
      var commaSepar;
      if(count = 0){
        length = input/3;
        commaSepar = input.substring(0,3);
        console.log(commaSepar);
        for(var i=1; i<length; i++){
          commaSepar = commaSepar + '.' + input.substring(3*i,3);
          console.log(commaSepar);

        }
        return commaSepar;
      }
      else if (count = 1) {
        length = (input-1)/3;
        commaSepar = input.substring(0,1);
        console.log(commaSepar);
        for(var i=1; i<length; i++){
          commaSepar = commaSepar + '.' + input.substring(3*i,3);
        }
        return commaSepar;
      }
      else {
        commaSepar = input.substring(0,2);
        length = (input-2)/3;
        console.log(commaSepar);
        for(var i=1; i<length; i++){
          commaSepar = commaSepar + '.' + input.substring(3*i,3);
        }
        return commaSepar;
      }
    };
  });
