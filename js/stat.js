'use strict';

var PAPIRUS_X = 100;
var PAPIRUS_Y = 10;
var PAPIRUS_WIDTH = 420;
var PAPIRUS_HEIGHT = 270;
var PAPIRUS_CORNER_X_RADIUS = 10;
var PAPIRUS_CORNER_Y_RADIUS = 30;
var PAPIRUS_LINE_HEIGHT = 30;
var HISTOGRAM_BAR_HEIGHT = 150;
var HISTOGRAM_BAR_WIDTH = 40;
var HISTOGRAM_BAR_GAP = 50;
var histogramColonWidth = HISTOGRAM_BAR_WIDTH + HISTOGRAM_BAR_GAP;
var papirusCenterX = PAPIRUS_X + PAPIRUS_WIDTH / 2;
var lastLineYPosition = PAPIRUS_Y + PAPIRUS_HEIGHT - PAPIRUS_LINE_HEIGHT / 2;

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

window.renderStatistics = function (ctx, names, times) {
  var firstLineYPosition = PAPIRUS_Y + PAPIRUS_LINE_HEIGHT / 2;
  var heightPoint = HISTOGRAM_BAR_HEIGHT / Math.max.apply(null, times);
  var histogramXPosition = PAPIRUS_X + (PAPIRUS_WIDTH - 4 * HISTOGRAM_BAR_WIDTH - 3 * HISTOGRAM_BAR_GAP) / 2;

  renderPapirus(ctx, PAPIRUS_X + 10, PAPIRUS_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderPapirus(ctx, PAPIRUS_X, PAPIRUS_Y, 'rgba(255, 255, 255, 1)');

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = '16px PT Mono';
  ctx.strokeText('Ура вы победили!', papirusCenterX, firstLineYPosition);
  firstLineYPosition += PAPIRUS_LINE_HEIGHT;
  ctx.fillText('Список результатов:', papirusCenterX, firstLineYPosition);

  for (var i = 0; i < names.length; i++) {
    var colonHeight = times[i] * heightPoint;
    var scoreLineYPosition = lastLineYPosition - colonHeight - PAPIRUS_LINE_HEIGHT;
    var colorString = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + (Math.floor(Math.random() * 11)) / 10 + ')';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(names[i], histogramXPosition + HISTOGRAM_BAR_WIDTH / 2, lastLineYPosition);
    ctx.fillText(Math.round(times[i]), histogramXPosition + HISTOGRAM_BAR_WIDTH / 2, scoreLineYPosition);
    scoreLineYPosition += PAPIRUS_LINE_HEIGHT / 2;
    ctx.fillStyle = colorString;
    ctx.fillRect(histogramXPosition, scoreLineYPosition, HISTOGRAM_BAR_WIDTH, times[i] * heightPoint);
    histogramXPosition += histogramColonWidth;
  }
};
