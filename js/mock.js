'use strict';

/* Модуль mock.js */
(function () {
  var generateMockCharacters = function (num) {
    var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'ВальцОнопко', 'Топольницкая', 'НионгоИрвинг'];
    var characters = [];

    var getCharacterName = function () {
      var names = [window.util.getRandomArrayElement(NAMES), window.util.getRandomArrayElement(SURNAMES)];
      return window.util.shuffleArray(names).join(' ');
    };

    for (var i = 0; i < num; i++) {
      characters[i] = {
        name: getCharacterName(),
        coatColor: window.util.getRandomArrayElement(window.variables.COAT_COLORS),
        eyesColor: window.util.getRandomArrayElement(window.variables.EYES_COLORS)
      };
    }
    return characters;
  };

  window.mock = {
    generateMockCharacters: generateMockCharacters(5)
  };

})();
