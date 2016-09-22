var $ = require("jQuery");
const World = require('./world.js');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var pumpkin = new Image();
pumpkin.src = ('/images/pumpkin-icon.svg');
var world = new World();

makeBricks();

$(".startBtn").on('click', function() {
  toggleLevelButtons();
  chooseLevelMessage();
});

function toggleLevelButtons() {
  $('.level').prop('disabled', false);
}

$(".resetBtn").on('click', function() {
  document.location.reload();
});

$(".level1Btn").on('click', function() {
  world.bricks.rowCount = 1;
  makeBricks();
  draw();
});

$(".level2Btn").on('click', function() {
  world.bricks.rowCount = 2;
  makeBricks();
  draw();
});

$(".level3Btn").on('click', function() {
  world.bricks.rowCount = 3;
  makeBricks();
  draw();
});

function makeCircle() {
  ctx.fillStyle = "purple";
  ctx.drawImage(pumpkin, world.circle.x, world.circle.y, world.circle.width, world.circle.height);
}

function makePaddle() {
  ctx.fillStyle = "white";
  ctx.fillRect(world.paddle.x, world.paddle.y, world.paddle.width, world.paddle.height);
}

function makeBricks() {
  world.bricks.makeBricksColumnAndRows();
  for(var column = 0; column < world.bricks.columnCount; column++) {
    for(var row = 0; row < world.bricks.rowCount; row++) {
      world.bricks.brickPosition(column, row);
    }
  }
}

function drawBricks() {
  for(var column = 0; column < world.bricks.columnCount; column++) {
    for(var row = 0; row < world.bricks.rowCount; row++) {
      if(world.bricks.bricks[column][row].status === 1){
      ctx.fillStyle = "orange";
      ctx.fillRect(world.bricks.bricks[column][row].x, world.bricks.bricks[column][row].y, world.bricks.width, world.bricks.height);
      }
    }
  }
}

function drawScore(){
  ctx.font = "16px Arial";
  ctx.fillStyle = 'orange';
  ctx.fillText("Score: "+world.score, 8, 395);
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "orange";
  ctx.fillText("Lives: "+world.lives, 735, 395);
}

function spaceBarMessage(){
  ctx.font = "16px Arial";
  ctx.fillStyle = 'orange';
  ctx.fillText("Press the space bar to begin play", 300, 395);
}

function chooseLevelMessage(){
  ctx.font = "16px Arial";
  ctx.fillStyle = 'orange';
  ctx.fillText("Choose a level before beginning.", 300, 395);
}

function draw() {
  ctx.clearRect(world.x, world.y, world.width, world.height);
  makeCircle();
  makePaddle();
  drawBricks();
  drawScore();
  drawLives();
  spaceBarMessage();
  world.collision();
  world.collisionBricks();
  world.circle.moveRight();
  world.circle.moveUp();
}

document.addEventListener('keydown', function() {
  if(event.keyCode === 39){
    world.paddle.rightArrowWasPressed();
  }
  if (event.keyCode === 37) {
    world.paddle.leftArrowWasPressed();
  }
});

document.addEventListener('keydown', function(){
  if(event.keyCode === 32){
    setInterval(draw, 10);
  }
});
