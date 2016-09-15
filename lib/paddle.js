function Paddle(options={}){
 options = options || {};
 this.x = options.x || 180;
 this.y = 390;
 this.width = 50;
 this.height = 10;
}

var directionX = 10;

Paddle.prototype.leftArrowWasPressed = function() {
    this.x = this.x - directionX;
    if(this.x + directionX < 0){
      return;
    }
};

Paddle.prototype.rightArrowWasPressed = function() {
    this.x = this.x + directionX;
    if(this.x + directionX > 800 - this.width){
      return;
    }
};

module.exports = Paddle;
