function Bricks(){
  this.brickRowCount = 3;
  this.brickColumnCount = 8;
  this.brickWidth = 96;
  this.brickHeight = 30;
  this.brickPadding = 5;
  this.bricks = [];
  this.x = this.brickX;
  this.y = this.brickY;
}

Bricks.prototype.makeBricksColumnAndRows = function() {
  for(c = 0; c < this.brickColumnCount; c++) {
      this.bricks[c] = [];
      for(r=0; r < this.brickRowCount; r++) {
          this.bricks[c][r] = { x: 0, y: 0 };
      }
  }
};

Bricks.prototype.brickXPosition = function() {
  this.brickX = c * (this.brickWidth + this.brickPadding);
  this.bricks[c][r].x = this.brickX;
};

Bricks.prototype.brickYPosition = function() {
  this.brickY = r * (this.brickHeight + this.brickPadding);
  this.bricks[c][r].y = this.brickY;
};

module.exports = Bricks;
