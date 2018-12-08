'use strict';
var setupBlock = document.querySelector('.setup');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupSimilarListBlock = document.querySelector('.setup-similar-list');
var setupSimilarBlock = document.querySelector('.setup-similar');

var createCharacters = function (num) {
  var NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'ВальцОнопко', 'Топольницкая', 'НионгоИрвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var characters = [];

  var getRndInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var shuffleArray = function (initialArray) {
    var newArray = initialArray.slice();
    for (var i = newArray.length - 1; i >= 0; i--) {
      var rndNum = getRndInteger(0, i);
      var temp = newArray[i];
      newArray[i] = newArray[rndNum];
      newArray[rndNum] = temp;
    }
    return newArray;
  };

  var getCharacterName = function () {
    var newArray = [NAMES[getRndInteger(0, NAMES.length - 1)], SURNAMES[getRndInteger(0, SURNAMES.length - 1)]];
    return shuffleArray(newArray).join(' ');
  };

  for (var i = 0; i < num; i++) {
    characters[i] = {
      name: getCharacterName(),
      coatColor: COAT_COLORS[getRndInteger(0, COAT_COLORS.length - 1)],
      eyesColor: EYES_COLORS[getRndInteger(0, EYES_COLORS.length - 1)]
    };
  }
  return characters;
};

var createWizardBlock = function (wizard) {
  var wizardBlock = similarWizardTemplate.cloneNode(true);
  var setupSimilarLabel = wizardBlock.querySelector('.setup-similar-label');
  var wizardCoatBlock = wizardBlock.querySelector('.wizard-coat');
  var wizardEyesBlock = wizardBlock.querySelector('.wizard-eyes');

  setupSimilarLabel.textContent = wizard.name;
  wizardCoatBlock.style.fill = wizard.coatColor;
  wizardEyesBlock.style.fill = wizard.eyesColor;

  return wizardBlock;
};

var fillSetupSimilarListBlock = function (wizards) {
  var documentFragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    documentFragment.appendChild(createWizardBlock(wizards[i]));
  }
  return documentFragment;
};

setupBlock.classList.remove('hidden');

var wizards = createCharacters(5);

setupSimilarListBlock.appendChild(fillSetupSimilarListBlock(wizards));

setupSimilarBlock.classList.remove('hidden');
