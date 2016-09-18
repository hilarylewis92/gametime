function Bricks(){
  this.rowCount = 3;
  this.columnCount = 8;
  this.width = 96;
  this.height = 30;
  this.padding = 5;
  this.bricks = [];
  this.x = this.x;
  this.y = this.y;
}

Bricks.prototype.makeBricksColumnAndRows = function() {
  for(c = 0; c < this.columnCount; c++) {
      this.bricks[c] = [];
      for(r = 0; r < this.rowCount; r++) {
          this.bricks[c][r] = { x: 0, y: 0 };
      }
  }
};

Bricks.prototype.brickXPosition = function() {
  this.x = c * (this.width + this.padding);
  this.bricks[c][r].x = this.x;
};

Bricks.prototype.brickYPosition = function() {
  this.y = r * (this.height + this.padding);
  this.bricks[c][r].y = this.y;
};

module.exports = Bricks;
