function Paddle(options={}){
  options = options || {};
  this.x = options.x || 180;
  this.y = 390;
  this.width = 50;
  this.height = 10;
}


module.exports = Paddle;
