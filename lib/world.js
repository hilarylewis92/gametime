const Circle = require('./circle.js');
const Paddle = require('./paddle.js');
const Bricks = require('./bricks.js');

function World(){
  this.x = 0;
  this.y = 0;
  this.height = 400;
  this.width = 800;
  this.lives = 3;
  this.score = 0;
  this.circle = new Circle();
  this.paddle = new Paddle();
  this.bricks = new Bricks();
}

World.prototype.collision = function() {
  if (this.circle.x < 0 || this.circle.x > this.width - this.circle.width) {
  this.circle.changeXDirection();
  }

  if (this.circle.yMovement() < 0) {
    this.circle.changeYDirection();
  } else if (this.circle.yMovement() > this.paddle.y - this.circle.height){

    if((this.circle.bottom() >= this.paddle.x && this.circle.bottom() <= this.paddle.x + 35)) {
      this.circle.changeYDirection();
      this.circle.changeXDirection();
    }

    if((this.circle.x <= this.paddle.top() && this.circle.x >= this.paddle.top() - 35)){
      this.circle.changeYDirection();
      this.circle.changeXDirection();
    }

    if((this.circle.bottom() >= this.paddle.x + 35 && this.circle.x <= this.paddle.top() - 35)){
      this.circle.changeYDirection();
    }
  }

  if(this.circle.yMovement() > this.height - this.circle.height) {
    this.circle.directionY = 0;
    this.circle.directionX = 0;
    this.lives--;
    if(this.lives === 0){
      alert('Game over! Press "OK" to restart game.');
      document.location.reload();
    }else{
      alert('Lost a life. Press OK to have another attempt.');
      this.circle = new Circle();
    }
  }
};

World.prototype.collisionDetection = function (column, row) {
  return (
    this.circle.x > this.bricks.bricks[column][row].x &&
    this.circle.x < this.bricks.bricks[column][row].x + this.bricks.width && this.circle.y > this.bricks.bricks[column][row].y &&
    this.circle.y < this.bricks.bricks[column][row].y + this.bricks.height
  );
};

World.prototype.collisionBricks = function() {
  for(var column = 0; column < this.bricks.columnCount; column++) {
    for(var row = 0; row < this.bricks.rowCount; row++) {
      if(this.bricks.bricks[column][row].status === 1){
      if (this.collisionDetection(column, row)) {
        console.log('collision');
        this.bricks.bricks[column][row].status = 0;
        this.circle.changeYDirection();
        this.score++;
        if(this.score === this.bricks.rowCount * this.bricks.columnCount){
          alert('CONGRATULATIONS, YOU WIN.');
          document.location.reload();
          }
        }
      }
    }
  }
};

module.exports = World;
