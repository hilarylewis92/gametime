function Paddle(options={}){
 options = options || {};
 this.x = options.x || 180;
 this.y = 390;
 this.width = 70;
 this.height = 30;
 this.speed = 40;
}

Paddle.prototype.leftArrowWasPressed = function() {
    if(this.x - this.width/2 > 0){
      this.x = this.x - this.speed;
    }
};

Paddle.prototype.rightArrowWasPressed = function() {
    if(this.x + this.width < 800){
      this.x = this.x + this.speed;
    }
};

// Paddle.prototype.topRight = function () {
//   return this.x + this.width;
// };

module.exports = Paddle;
