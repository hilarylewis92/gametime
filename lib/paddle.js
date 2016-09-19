function Paddle(options={}){
 options = options || {};
 this.x = 200;
 this.y = 390;
 this.width = 50;
 this.height = 30;
 this.speed = 50;
}

Paddle.prototype.leftArrowWasPressed = function() {
    if(this.x - this.width >= 0){
      this.x = this.x - this.speed;
    }
};

Paddle.prototype.rightArrowWasPressed = function() {
    if(this.x + this.width < 800){
      this.x = this.x + this.speed;
    }
};

Paddle.prototype.top = function() {
  return this.x + this.width;
};

module.exports = Paddle;
