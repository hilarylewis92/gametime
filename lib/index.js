
// var $ = require("jquery");

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var circle = {};
circle.x = canvas.width/4;
circle.y = canvas.height;
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
  paddle.x = canvas.width/4;
  paddle.y = 380;
  paddle.width = 50;
  paddle.height = 10;

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



// leftArrowWasPressed: function() {
//   if(event.keyCode ==37) {
//     paddle.x = paddle.x - 1;
// }
//
// rightArrowWasPressed: function() {
//   if (event.keyCode == 39) {
//     paddle.x = paddle.x + 1;
// }
//
document.addEventListener('keydown', function(event) {
  if(event.keyCode == 37){
    debugger;
    paddle.x = paddle.x - 1;
  }
  if(event.keyCode == 39){
    paddle.x = paddle.x + 1;
  }
});
