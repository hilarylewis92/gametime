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
    var paddle = new Paddle(200);
    assert.equal(paddle.x, 200);
  });

  it('should take the second argument and set it as the "y" property of the instantiated object', function() {
    var paddle = new Paddle(180, 360);
    assert.equal(paddle.y, 360);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function() {
    var paddle = new Paddle(180, 390, 100);
    assert.equal(paddle.width, 100);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function() {
    var paddle = new Paddle(180, 390, 70, 10);
    assert.equal(paddle.height, 10);
  });

  describe('paddle', function(){
    it('should have a method called "leftArrowWasPressed()"', function() {
      var paddle = new Paddle(200);
      assert.isFunction(paddle.leftArrowWasPressed);
    });

    it('"leftArrowWasPressed()" should decrement the "x" property by the paddle speed', function() {
      var paddle = new Paddle(200);
      paddle.leftArrowWasPressed();
      assert.equal(paddle.x, 150);
    });

    it('should have a method called "rightArrowWasPressed()"', function() {
      var paddle = new Paddle(200);
      assert.isFunction(paddle.rightArrowWasPressed);
    });

    it('"rightArrowWasPressed()" should increment the "x" property by the paddles speed', function() {
      var paddle = new Paddle(200);
      paddle.rightArrowWasPressed();
      assert.equal(paddle.x, 250);
    });
  });
});
