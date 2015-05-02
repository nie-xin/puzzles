/*
 * Ref: http://www.codewars.com/kata/harshad-or-niven-numbers/javascript
 */
var Harshad = (function() {
  var _getDigitSum = function (number) {
    return number.toString().split('').reduce(function (pre, cur) {
      return Number(pre) + Number(cur);
    });
  };

  var isValid = function (number) {
    return number / _getDigitSum(number) === Math.floor(number/_getDigitSum(number));
  };

  var getNext = function (number) {
    do {
      number += 1;
    } while (!isValid(number));

    return number;
  };

  var getSerie = function (count, start) {
    var startVal = start || 0;
    var res = [];
    while (count > 0) {
      var next = getNext(startVal)
      res.push(next);
      startVal = next;
      --count;
    }
    return res;
  };

  return {
    isValid: isValid,
    getNext: getNext,
    getSerie: getSerie
  };

})()

/*
 * A much neat solution
 */
var Harshad = ( function() {
  'use strict';

  return {
    isValid: function(number) {
      return number / String(number).split('').reduce(function(sum, digit) {
        return sum + +digit;  // +digit convert char to number
      }, 0) % 1 == 0;
    },

    getNext: function(number) {
      while (!this.isValid(++number));  //++first, so avoid do while in my solution
      return number;
    },

    getSerie: function(count, start) {
      start = start || 0;  // not big deal to overwrite start since it's primitive
      var serie = [];
      for (var i = 0; i < count; ++i)
        serie.push(start = this.getNext(start));  // NEAT: set start to next, and push this value to serie
      return serie;
    }
  };

}());
