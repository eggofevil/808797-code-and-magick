'use strict';

/* Модуль mock.js */
(function () {
  var generateMockCharacters = function (num) {
    var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'ВальцОнопко', 'Топольницкая', 'НионгоИрвинг'];
    var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
    var characters = [];

    var getCharacterName = function () {
      var names = [NAMES[window.util.getRandomInteger(0, NAMES.length - 1)], SURNAMES[window.util.getRandomInteger(0, SURNAMES.length - 1)]];
      return window.util.shuffleArray(names).join(' ');
    };

    for (var i = 0; i < num; i++) {
      characters[i] = {
        name: getCharacterName(),
        coatColor: COAT_COLORS[window.util.getRandomInteger(0, COAT_COLORS.length - 1)],
        eyesColor: EYES_COLORS[window.util.getRandomInteger(0, EYES_COLORS.length - 1)]
      };
    }
    return characters;
  };

  window.mock = {
    generateMockCharacters: generateMockCharacters(5)
  };

})();
