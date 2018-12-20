'use strict';

/*  Модуль setup-main.js  */
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');

  var onSetupOpenIconEnterPress = function (evt) {
    if (evt.key === 'Enter') {
      openSetup();
    }
  };
  var onPopupOpenedEscPress = function (evt) {
    if (evt.key === 'Escape') {
      closeSetup();
    }
  };
  var onSetupCloseEnterPress = function (evt) {
    if (evt.key === 'Enter') {
      closeSetup();
    }
  };
  var openSetup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupOpenedEscPress);
  };
  var closeSetup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupOpenedEscPress);
  };

  setupOpen.addEventListener('click', openSetup);
  setupOpenIcon.addEventListener('keydown', onSetupOpenIconEnterPress);
  setupClose.addEventListener('click', closeSetup);
  setupClose.addEventListener('keydown', onSetupCloseEnterPress);

})();
