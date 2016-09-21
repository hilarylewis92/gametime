const Circle = require('./circle.js');
const Paddle = require('./paddle.js');
const Bricks = require('./bricks.js');
// const Draw = require('../index.js').draw();

function World(){
  this.x = 0;
  this.y = 0;
  this.height = 400;
  this.width = 800;
  this.circle = new Circle();
  this.paddle = new Paddle();
  this.bricks = new Bricks();
  // this.draw = new Draw();
  this.score = 0;
}

World.prototype.collision = function() {
  if (this.circle.x < 0 || this.circle.x > 800 - this.circle.width) {
  this.circle.changeXDirection();
  }

  if (this.circle.yMovement() < 0) {
    this.circle.changeYDirection();
  } else if (this.circle.yMovement() > this.paddle.y - this.circle.height){

    if((this.circle.bottom() >= this.paddle.x && this.circle.bottom() <= this.paddle.top()) || (this.circle.x <= this.paddle.top() && this.circle.x >= this.paddle.x)){
      this.circle.changeYDirection();
    }
  }

  if(this.circle.yMovement() > 405 - this.circle.height) {
    this.circle.directionY = 0;
    this.circle.directionX = 0;
    alert('Game over! Press "OK" to restart game.');
    this.circle.x = 240;
    this.circle.y = 320;
    this.paddle.x = 200;
    this.paddle.y = 360;
    this.draw();
    // document.location.reload();
  }
};

World.prototype.collisionDetection = function (column, row) {
  return (
    this.circle.x > this.bricks.bricks[column][row].x &&
    this.circle.x < this.bricks.bricks[column][row].x + this.bricks.width && this.circle.y > this.bricks.bricks[column][row].y &&
    this.circle.y < this.bricks.bricks[column][row].y + this.bricks.height
  );
};

World.prototype.collisionBricks = function() {
  for(var column = 0; column < this.bricks.columnCount; column++) {
    for(var row = 0; row < this.bricks.rowCount; row++) {
      if(this.bricks.bricks[column][row].status === 1){
      if (this.collisionDetection(column, row)) {
        console.log('collision');
        this.bricks.bricks[column][row].status = 0;
        this.circle.changeYDirection();
        this.score++;
        if(this.score === this.bricks.rowCount * this.bricks.columnCount){
          alert('CONGRATULATIONS, YOU WIN.');
          document.location.reload();
          }
        }
      }
    }
  }
};

module.exports = World;
