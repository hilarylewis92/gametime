var $ = require("jQuery");
const World = require('./world.js');
const Circle = require('./circle.js');


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var world = new World();
var circle = new Circle();

var directionX = 1;
var directionY = -1;

function makeCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
}

var paddle = {};
paddle.width = 50;
paddle.height = 10;
paddle.x = (world.width - paddle.width)/4;
paddle.y = world.height - paddle.height;

function makePaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(world.x, world.y, world.width, world.height);
  makeCircle();

  if (circle.x + directionX > world.width - circle.radius || circle.x + directionX < circle.radius) {
    directionX = -directionX;
  }

  if (circle.y + directionY > world.height - circle.radius || circle.y + directionY < circle.radius) {
    directionY = -directionY;
  }

  makePaddle();

  circle.x = circle.x + directionX;
  circle.y = circle.y + directionY;
  }

setInterval(draw, 10);

// document.addEventListener('keydown', function(event) {
//   rightArrowWasPressed();
//   leftArrowWasPressed();
// });
//
// leftArrowWasPressed: function() {
//   if(event.keyCode === 37) {
//     paddle.x = paddle.x - 1;
// }
//
// rightArrowWasPressed: function() {
//   if (event.keyCode === 39) {
//     paddle.x = paddle.x + 1;
// }
