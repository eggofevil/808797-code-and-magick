'use strict';

/*  Модуль setup-character.js  */
(function () {
  var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  var WizardCoat = {
    element: setupWizardCoat,
    inputElement: document.querySelector('[name="coat-color"]'),
    colorCounter: 0,
    colors: window.variables.COAT_COLORS
  };
  var WizardEyes = {
    element: setupWizardEyes,
    inputElement: document.querySelector('[name="eyes-color"]'),
    colorCounter: 0,
    colors: window.variables.EYES_COLORS
  };
  var FireBall = {
    element: setupFireballWrap,
    inputElement: document.querySelector('[name="fireball-color"]'),
    colorCounter: 0,
    colors: window.variables.FIREBALL_COLORS
  };

  var getNewColor = function (styleObj) {
    styleObj.colorCounter = (styleObj.colorCounter < styleObj.colors.length - 1) ? styleObj.colorCounter + 1 : 0;
    return styleObj.colors[styleObj.colorCounter];
  };

  var updateColor = function (styleObj) {
    var newColor = getNewColor(styleObj);
    if (styleObj === FireBall) {
      styleObj.element.style.background = newColor;
    } else {
      styleObj.element.style.fill = newColor;
    }
    styleObj.inputElement.value = newColor;
  };

  setupWizardCoat.addEventListener('click', function () {
    updateColor(WizardCoat);
  });
  setupWizardEyes.addEventListener('click', function () {
    updateColor(WizardEyes);
  });
  setupFireballWrap.addEventListener('click', function () {
    updateColor(FireBall);
  });
})();
