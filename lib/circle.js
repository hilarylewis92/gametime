function Circle(options={}){
  options = options || {};
  this.x = options.x || 200;
  this.y = options.y || 360;
  this.width = 30;
  this.height = 30;
  this.directionX = 1;
  this.directionY = -1;
}

Circle.prototype.moveRight = function () {
  this.x = this.x + this.directionX;
  return this;
};
Circle.prototype.moveUp = function () {
  this.y = this.y + this.directionY;
  return this;
};

Circle.prototype.bottomLeft = function () {
  return this.x + this.height;
};

Circle.prototype.bottomRight = function () {
  return this.bottomLeft() + this.width;
};

// Circle.prototype.bounceCircle = function(){
//   if (this.x + directionX > 800 - this.width || this.x + directionX < 0) {
//   directionX = -directionX;
//   }
//   if (this.y + directionY > 400 - this.height || this.y + directionY < 0) {
//     directionY = -directionY;
//   }
// };

module.exports = Circle;
