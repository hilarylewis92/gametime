function Paddle(){
  this.width = 50;
  this.height = 10;
  this.x = (canvas.width - this.width)/4;
  this.y = canvas.height - this.height;
}

module.exports = Paddle;
