'use strict';

/*  Модуль util.js  */
(function () {
  var getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var shuffleArray = function (elements) {
    elements = elements.slice();
    var i = elements.length - 1;
    while (i--) {
      var randomIndex = getRandomInteger(0, i);
      var temp = elements[i];
      elements[i] = elements[randomIndex];
      elements[randomIndex] = temp;
    }
    return elements;
  };

  window.util = {
    getRandomInteger: getRandomInteger,
    shuffleArray: shuffleArray
  };
})();
