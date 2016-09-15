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
});
