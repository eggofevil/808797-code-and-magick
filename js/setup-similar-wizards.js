'use strict';

/* Модуль setup-similar-wizards.js */
(function () {
  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createSimilarItem = function (wizard) {
    var setupSimilarItem = similarWizardTemplate.cloneNode(true);
    var setupSimilarLabel = setupSimilarItem.querySelector('.setup-similar-label');
    var wizardCoat = setupSimilarItem.querySelector('.wizard-coat');
    var wizardEyes = setupSimilarItem.querySelector('.wizard-eyes');

    setupSimilarLabel.textContent = wizard.name;
    wizardCoat.style.fill = wizard.coatColor;
    wizardEyes.style.fill = wizard.eyesColor;

    return setupSimilarItem;
  };

  var fillSetupSimilarList = function (wizardsList) {
    var documentFragment = document.createDocumentFragment();

    for (var i = 0; i < wizardsList.length; i++) {
      documentFragment.appendChild(createSimilarItem(wizardsList[i]));
    }
    setupSimilarList.appendChild(documentFragment);
    setupSimilar.classList.remove('hidden');
  };
  fillSetupSimilarList(window.mock.generateMockCharacters);
})();
