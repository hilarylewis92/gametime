var $ = require("jQuery");
const World = require('./world.js');

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var world = new World();
makeBricks();

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

function makeBricks() {
  world.bricks.makeBricksColumnAndRows();
  for(var column = 0; column < world.bricks.columnCount; column++) {
    for(var row = 0; row < world.bricks.rowCount; row++) {
      world.bricks.brickPosition(column, row);
      // ctx.beginPath();
      // ctx.rect(world.bricks.x, world.bricks.y, world.bricks.width, world.bricks.height);
      // ctx.fillStyle = "green";
      // ctx.fill();
      // ctx.closePath();
    }
  }
}
function drawBricks() {
  for(var column = 0; column < world.bricks.columnCount; column++) {
    for(var row = 0; row < world.bricks.rowCount; row++) {
      if(world.bricks.bricks[column][row].status === 1){
      ctx.beginPath();
      ctx.rect(world.bricks.bricks[column][row].x, world.bricks.bricks[column][row].y, world.bricks.width, world.bricks.height);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();
    }
    }
  }
}

function draw() {
  ctx.clearRect(world.x, world.y, world.width, world.height);
  makeCircle();
  makePaddle();
  // makeBricks();
  drawBricks();
  world.collision();
  world.collisionBricks();
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
