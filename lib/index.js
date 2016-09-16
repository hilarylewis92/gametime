var $ = require("jQuery");
const World = require('./world.js');
// const Circle = require('./circle.js');
// const Paddle = require('./paddle.js');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var world = new World();
// var circle = new Circle();
// var paddle = new Paddle();

function makeCircle() {
  ctx.beginPath();
  ctx.rect(world.circle.x, world.circle.y, world.circle.width, world.circle.height);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.closePath();
}

function makePaddle() {
  ctx.beginPath();
  ctx.rect(world.paddle.x, world.paddle.y, world.paddle.width, world.paddle.height);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(world.x, world.y, world.width, world.height);
  makeCircle();
  world.collidingWithWall();
  makePaddle();
  world.circle.moveRight();
  world.circle.moveUp();
}

setInterval(draw, 10);

document.addEventListener('keydown', function() {
  if(event.keyCode === 39){
    world.paddle.rightArrowWasPressed();
  }
  if (event.keyCode === 37) {
    world.paddle.leftArrowWasPressed();
  }
});
