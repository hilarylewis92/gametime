function Circle(){
  this.x = 240;
  this.y = 320;
  this.width = 40;
  this.height = 40;
  this.directionX = 2;
  this.directionY = -2;
}

Circle.prototype.moveRight = function () {
  this.x = this.x + this.directionX;
  return this;
};
Circle.prototype.moveUp = function () {
  this.y = this.y + this.directionY;
  return this;
};

Circle.prototype.bottom = function() {
  return this.x + this.width;
};

Circle.prototype.yMovement = function() {
  return this.y + this.directionY;
};

Circle.prototype.changeXDirection = function() {
  return this.directionX = -this.directionX;
};

Circle.prototype.changeYDirection = function() {
  return this.directionY = -this.directionY;
};

module.exports = Circle;
