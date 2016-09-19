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

Bricks.prototype.makeBricksColumnAndRows = function(column, row) {
  for(column = 0; column < this.columnCount; column++) {
    this.bricks[column] = [];
    for(row = 0; row < this.rowCount; row++) {
      this.bricks[column][row] = { x: 0, y: 0 };
      }
  }
};

Bricks.prototype.brickPosition = function() {
  this.x = column * (this.width + this.padding);
  this.bricks[column][row].x = this.x;
  this.y = row * (this.height + this.padding);
  this.bricks[column][row].y = this.y;
};

module.exports = Bricks;
