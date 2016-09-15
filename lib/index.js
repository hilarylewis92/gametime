var $ = require("jQuery");
const World = require('./world.js');
const Circle = require('./circle.js');
const Paddle = require('./paddle.js');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var world = new World();
var circle = new Circle();
var paddle = new Paddle();

function makeCircle() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI*2);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.closePath();
}

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
  circle.bounceCircle();
  makePaddle();
  circle.moveRight();
  circle.moveUp();
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
