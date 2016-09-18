var assert = require('chai').assert;
const Paddle = require('../lib/paddle.js');

describe('Paddle test', function(){
  it('should be a function', function() {
    assert.isFunction(Paddle);
  });

  it('should instantiate an object paddle', function() {
    var paddle = new Paddle();
    assert.isObject(paddle);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var paddle = new Paddle(180);
    assert.equal(paddle.x, 180);
  });

  it('should take the second argument and set it as the "y" property of the instantiated object', function() {
    var paddle = new Paddle(180, 390);
    assert.equal(paddle.y, 390);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function() {
    var paddle = new Paddle(180, 390, 70);
    assert.equal(paddle.width, 70);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function() {
    var paddle = new Paddle(180, 390, 70, 30);
    assert.equal(paddle.height, 30);
  });

  describe('paddle', function(){
    it('should have a method called "leftArrowWasPressed()"', function() {
      var paddle = new Paddle(180);
      assert.isFunction(paddle.leftArrowWasPressed);
    });

    it('"leftArrowWasPressed()" should decrement the "x" property by the paddle speed', function() {
      var paddle = new Paddle(180);
      paddle.leftArrowWasPressed();
      assert.equal(paddle.x, 140);
    });

    it('should have a method called "rightArrowWasPressed()"', function() {
      var paddle = new Paddle(180);
      assert.isFunction(paddle.rightArrowWasPressed);
    });

    it('"rightArrowWasPressed()" should increment the "x" property by the paddles speed', function() {
      var paddle = new Paddle(180);
      paddle.rightArrowWasPressed();
      assert.equal(paddle.x, 220);
    });
  });
});
