function Circle(){
  this.x = 210;
  this.y = 340;
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
