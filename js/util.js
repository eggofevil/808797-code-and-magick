'use strict';

/*  Модуль util.js  */
(function () {
  var getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomArrayElement = function (elements) {
    return elements[getRandomInteger(0, elements.length - 1)];
  };

  var shuffleArray = function (elements) {
    if (elements.length <= 1) {
      return elements;
    }
    elements = elements.slice();
    var i = elements.length;
    while (--i) {
      var randomIndex = getRandomInteger(0, i);
      var temp = elements[i];
      elements[i] = elements[randomIndex];
      elements[randomIndex] = temp;
    }
    return elements;
  };

  window.util = {
    getRandomInteger: getRandomInteger,
    getRandomArrayElement: getRandomArrayElement,
    shuffleArray: shuffleArray
  };
})();
