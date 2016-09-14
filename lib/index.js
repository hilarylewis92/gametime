var $ = require("jQuery");

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var circle = {};
circle.x = canvas.width/4;
circle.y = canvas.height - 25;
circle.radius = 15;

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
paddle.x = (canvas.width - paddle.width)/4;
paddle.y = canvas.height - paddle.height;

function makePaddle() {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  makeCircle();
  makePaddle();
  circle.x = circle.x + directionX;
  circle.y = circle.y + directionY;
  }

setInterval(draw, 10);




document.addEventListener('keydown', function(event) {
  if(event.keyCode === 37){
    paddle.x = paddle.x - 1;
  }
  if(event.keyCode === 39){
    paddle.x = paddle.x + 1;
  }
});

// leftArrowWasPressed: function() {
//   if(event.keyCode === 37) {
//     paddle.x = paddle.x - 1;
// }
//
// rightArrowWasPressed: function() {
//   if (event.keyCode === 39) {
//     paddle.x = paddle.x + 1;
// }
//
