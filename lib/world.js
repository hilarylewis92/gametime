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

module.exports = World;


World.prototype.collidingWithWall = function() {
  if (this.circle.x + this.circle.directionX > 800 - this.circle.width || this.circle.x + this.circle.directionX < 0) {
  this.circle.directionX = -this.circle.directionX;
  }
  if (this.circle.y + this.circle.directionY > 400 - this.circle.height || this.circle.y + this.circle.directionY < 0) {
    this.circle.directionY = -this.circle.directionY;
  }
};


// class World {
//   constructor() {
//
//   }
//
//   collidingWithWall() {
//
//   }
// }
