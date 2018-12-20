'use strict';

/*  Модуль setup-character.js  */
(function () {
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var CoatColorCounter = {value: 0};
  var EyesColorCounter = {value: 0};
  var FireBallColorCounter = {value: 0};
  var setupWizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  var changeColor = function (evt) {
    var wizardCoatInput = document.querySelector('[name="coat-color"]');
    var wizardEyesInput = document.querySelector('[name="eyes-color"]');
    var wizardFireballInput = document.querySelector('[name="fireball-color"]');
    var getColor = function (colors, colorCounter) {
      colorCounter.value++;
      if (colorCounter.value === colors.length) {
        colorCounter.value = 0;
      }
      return colors[colorCounter.value];
    };
    var newColor;
    switch (evt.srcElement.classList.value) {
      case 'wizard-coat':
        newColor = getColor(COAT_COLORS, CoatColorCounter);
        setupWizardCoat.style.fill = newColor;
        wizardCoatInput.value = newColor;
        break;
      case 'wizard-eyes':
        newColor = getColor(EYES_COLORS, EyesColorCounter);
        setupWizardEyes.style.fill = newColor;
        wizardEyesInput.value = newColor;
        break;
      case 'setup-fireball':
        newColor = getColor(FIREBALL_COLORS, FireBallColorCounter);
        setupFireballWrap.style.background = newColor;
        wizardFireballInput.value = newColor;
        break;
    }
  };

  setupWizardCoat.addEventListener('click', changeColor);
  setupWizardEyes.addEventListener('click', changeColor);
  setupFireballWrap.addEventListener('click', changeColor);

})();
