// var $ = require("jQuery");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var x = canvas.width/4;
var y = canvas.height;
var directionX = 1;
var directionY = -1;

function makeCircle() {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI*2);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.closePath();
  }

function draw() {
  ctx.clearRect(1, 1, canvas.width, canvas.height);
    makeCircle();
  x = x + directionX;
  y = y + directionY;
  }

setInterval(draw, 5)

// var paddle.x = canvas.width;
// var paddle = function() {
//   ctx.beginPath();
//   ctx.rect(paddle.x, 380, 50, 10);
//   ctx.fillStyle = "red";
//   ctx.fill();
//   ctx.closePath();
// };

// document.addEventListener('keydown', function(event) {
//   //left and right
//   if(event.keyCode ==37) {
//     paddle.x = paddle.x - 1;
//   } else if (event.keyCode == 39) {
//     paddle.x = paddle.x + 1;
//   }
// });
