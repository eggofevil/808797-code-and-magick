'use strict';

(function () {
  var PAPIRUS_X = 100;
  var PAPIRUS_Y = 10;
  var PAPIRUS_WIDTH = 420;
  var PAPIRUS_HEIGHT = 270;
  var PAPIRUS_CORNER_X_RADIUS = 10;
  var PAPIRUS_CORNER_Y_RADIUS = 30;
  var PAPIRUS_LINE_HEIGHT = 30;
  var Y_GAP = PAPIRUS_LINE_HEIGHT / 2;
  var HISTOGRAM_BAR_HEIGHT = 150;
  var HISTOGRAM_BAR_WIDTH = 40;
  var HISTOGRAM_BAR_GAP = 50;
  var histogramColonWidth = HISTOGRAM_BAR_WIDTH + HISTOGRAM_BAR_GAP;
  var papirusCenterX = PAPIRUS_X + PAPIRUS_WIDTH / 2;
  var firstLineYPosition = PAPIRUS_Y + PAPIRUS_LINE_HEIGHT / 2;
  var lastLineYPosition = PAPIRUS_Y + PAPIRUS_HEIGHT - PAPIRUS_LINE_HEIGHT / 2;
  var firstBarXPosition = PAPIRUS_X + (PAPIRUS_WIDTH - 4 * HISTOGRAM_BAR_WIDTH - 3 * HISTOGRAM_BAR_GAP) / 2;

  var renderPapirus = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    x += PAPIRUS_CORNER_X_RADIUS;
    ctx.ellipse(x, y + PAPIRUS_CORNER_Y_RADIUS, PAPIRUS_CORNER_X_RADIUS, PAPIRUS_CORNER_Y_RADIUS, 0, 1.5 * Math.PI, 3.5 * Math.PI);
    x += PAPIRUS_WIDTH - 2 * PAPIRUS_CORNER_X_RADIUS;
    ctx.lineTo(x, y);
    y += PAPIRUS_CORNER_Y_RADIUS;
    ctx.ellipse(x, y, PAPIRUS_CORNER_X_RADIUS, PAPIRUS_CORNER_Y_RADIUS, 0, Math.PI, 3 * Math.PI);
    x -= PAPIRUS_CORNER_X_RADIUS;
    y += PAPIRUS_HEIGHT - 2 * PAPIRUS_CORNER_Y_RADIUS;
    ctx.lineTo(x, y);
    x += PAPIRUS_CORNER_X_RADIUS;
    ctx.ellipse(x, y, PAPIRUS_CORNER_X_RADIUS, PAPIRUS_CORNER_Y_RADIUS, 0, 0.5 * Math.PI, 2.5 * Math.PI);
    x -= PAPIRUS_WIDTH - 2 * PAPIRUS_CORNER_X_RADIUS;
    y += PAPIRUS_CORNER_Y_RADIUS;
    ctx.lineTo(x, y);
    y -= PAPIRUS_CORNER_Y_RADIUS;
    ctx.ellipse(x, y, PAPIRUS_CORNER_X_RADIUS, PAPIRUS_CORNER_Y_RADIUS, 0, 0, 2 * Math.PI);
    x += PAPIRUS_CORNER_X_RADIUS;
    y -= PAPIRUS_HEIGHT - 2 * PAPIRUS_CORNER_Y_RADIUS;
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  var getRndBlueColor = function () {
    var color = 'rgba(0, 0, 255, ' + window.util.getRandomInteger(4, 10) / 10 + ')';
    return color;
  };

  var getUserColor = function (name) {
    var color = (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRndBlueColor();
    return color;
  };

  var getTextXPosition = function (barXPosition) {
    return barXPosition + HISTOGRAM_BAR_WIDTH / 2;
  };

  var renderHistogramColon = function (ctx, name, time, heightPoint, barXPosition) {
    var userTime = Math.round(time);
    var barHeight = userTime * heightPoint;
    var barYPosition = lastLineYPosition - Y_GAP - barHeight;
    var scoreLineYPosition = barYPosition - Y_GAP;
    var textXPosition = getTextXPosition(barXPosition);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(userTime, textXPosition, scoreLineYPosition);
    ctx.fillText(name, textXPosition, lastLineYPosition);
    ctx.fillStyle = getUserColor(name);
    ctx.fillRect(barXPosition, barYPosition, HISTOGRAM_BAR_WIDTH, barHeight);
  };

  var renderStatistics = function (ctx, names, times) {
    var heightPoint = HISTOGRAM_BAR_HEIGHT / Math.max.apply(null, times);
    var barXPosition = firstBarXPosition;

    renderPapirus(ctx, PAPIRUS_X + 10, PAPIRUS_Y + 10, 'rgba(0, 0, 0, 0.7)');
    renderPapirus(ctx, PAPIRUS_X, PAPIRUS_Y, 'rgba(255, 255, 255, 1)');
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '16px PT Mono';
    ctx.strokeText('Ура вы победили!', papirusCenterX, firstLineYPosition);
    ctx.fillText('Список результатов:', papirusCenterX, firstLineYPosition + PAPIRUS_LINE_HEIGHT);
    for (var i = 0; i < names.length; i++) {
      renderHistogramColon(ctx, names[i], times[i], heightPoint, barXPosition);
      barXPosition += histogramColonWidth;
    }
  };

  window.renderStatistics = renderStatistics;
})();
