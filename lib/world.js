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

World.prototype.collidingWithWall = function() {
  if (this.circle.x < 0 || this.circle.x > 800 - this.circle.width) {
  this.circle.directionX = -this.circle.directionX;
  }

  if (this.circle.y + this.circle.directionY < 0) {
    this.circle.directionY = -this.circle.directionY;
  } else if (this.circle.y + this.circle.directionY > this.paddle.y - this.circle.height){

    if(this.circle.x > this.paddle.x && this.circle.x < this.paddle.x + this.paddle.width){
      this.circle.directionY = -this.circle.directionY;
    }

    if(this.circle.x + this.circle.width > this.paddle.x && this.circle.x + this.circle.width < this.paddle.x + this.paddle.width){
      this.circle.directionY = -this.circle.directionY;
    }
  }

  if(this.circle.y + this.circle.directionY > 405 - this.circle.height) {
    this.circle.directionY = 0;
    alert('Game over.');
  }
};

module.exports = World;
