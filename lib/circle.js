
function Circle(options){
  options = options || {};
  this.x = options.x || 200;
  this.y = options.x || 380;
  this.radius = 15;
}

var directionX = 1;
var directionY = -1;

Circle.prototype.moveRight = function () {
  this.x = this.x + directionX;
  return this;
};
Circle.prototype.moveUp = function () {
  this.y = this.y + directionY;
  return this;
};

Circle.prototype.bounceCircle = function(){
  if (this.x + directionX > 800 - this.radius || this.x + directionX < this.radius) {
  directionX = -directionX;
  }
  if (this.y + directionY > 400 - this.radius || this.y + directionY < this.radius) {
    directionY = -directionY;
  }
};

module.exports = Circle;
