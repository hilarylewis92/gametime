const Circle = require('./circle.js');
const Paddle = require('./paddle.js');

function World(){
  this.x = 0;
  this.y = 0;
  this.height = 400;
  this.width = 800;
  this.circle = new Circle();
  this.paddle = new Paddle();
}

World.prototype.collidingWithWall = function() {
  if (this.circle.x + this.circle.directionX > 800 - this.circle.width || this.circle.x + this.circle.directionX < 0) {
  this.circle.directionX = -this.circle.directionX;
  }
  if (this.circle.y + this.circle.directionY > 400 - this.circle.height || this.circle.y + this.circle.directionY < 0) {
    this.circle.directionY = -this.circle.directionY;
  }
};

World.prototype.collidingWithPaddle = function() {
  //if circle hits paddle
  if (this.circle.bottomRight() >= this.paddle.x || this.circle.bottomLeft() <= this.paddle.topRight()){
    console.log('hit');
  }
};

module.exports = World;
