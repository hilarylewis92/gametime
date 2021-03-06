function Paddle(){
 this.x = 200;
 this.y = 360;
 this.width = 100;
 this.height = 10;
 this.speed = 50;
}

Paddle.prototype.leftArrowWasPressed = function() {
    if(this.x - this.speed >= 0){
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
