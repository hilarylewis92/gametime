const Circle = require('./circle.js');
const Paddle = require('./paddle.js');
const Bricks = require('./bricks.js');

function World(){
  this.x = 0;
  this.y = 0;
  this.height = 400;
  this.width = 800;
  this.circle = new Circle();
  this.paddle = new Paddle();
  this.bricks = new Bricks();
}

World.prototype.collision = function() {
  if (this.circle.x < 0 || this.circle.x > 800 - this.circle.width) {
  this.circle.directionX = -this.circle.directionX;
  }

  if (this.circle.yMovement()< 0) {
    this.circle.directionY = -this.circle.directionY;
  } else if (this.circle.yMovement() > this.paddle.y - this.circle.height){

    if(this.circle.x >= this.paddle.x && this.circle.x <= this.paddle.top()){
      this.circle.directionY = -this.circle.directionY;
    }

    if(this.circle.bottom() >= this.paddle.x && this.circle.bottom() <= this.paddle.top()){
      this.circle.directionY = -this.circle.directionY;
    }
  }

  if(this.circle.yMovement() > 405 - this.circle.height) {
    this.circle.directionY = 0;
    alert('Game over! Press "OK" to restart game.');
    document.location.reload();
  }
};

World.prototype.collisionBricks = function(column, row) {
  for(column = 0; column < this.bricks.columnCount; column++) {
    for(row = 0; row < this.bricks.rowCount; row++) {
      if ((this.circle.x > this.bricks[column][row].x) && (this.circle.x < this.bricks[column][row].x + this.bricks.width)) {
        this.circle.directionX = -this.circle.directionX;
      }
      if ((this.circle.y > this.bricks[column][row].y) && (this.circle.y < this.bricks[column][row].y + this.bricks.height)) {
        this.circle.directionY = -this.circle.directionY;
      }
    }
  }
};

module.exports = World;
