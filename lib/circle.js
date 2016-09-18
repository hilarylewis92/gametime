function Circle(){
  this.x = 200;
  this.y = 360;
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

// Circle.prototype.bottomLeft = function () {
//   return this.x + this.height;
// };
//
// Circle.prototype.bottomRight = function () {
//   return this.bottomLeft() + this.width;
// };

module.exports = Circle;
