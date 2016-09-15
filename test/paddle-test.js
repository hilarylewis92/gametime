var assert = require('chai').assert;
const Paddle = require('../lib/paddle.js');

describe('Paddle test', function(){
  it('should be a function', function(){
    assert.isFunction(Paddle);
  });

  it('should instantiate an object', function(){
    var paddle = new Paddle();
    assert.isObject(paddle);
  });

  it('should have a width', function(){
    var paddle = new Paddle();
    assert.equal(paddle.width, 50);
  });

  it('should have a height', function(){
    var paddle = new Paddle();
    assert.equal(paddle.height, 10);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function(){
    var paddle = new Paddle(180);
    assert.equal(paddle.x, 180);
  });

  it('should take the second argument and set it as the "y" property of the instantiated object', function(){
    var paddle = new Paddle(180, 390);
    assert.equal(paddle.y, 390);
  });

  it('should have a method called "arrowLeft"', function(){
    var paddle = new Paddle();
    assert.isFunction(paddle.arrowLeft);
  });

  it('"arrowLeft" should decrement x by one unit', function(){
    var paddle = new Paddle(180);
    assert.equal
  });
});
