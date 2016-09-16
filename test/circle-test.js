var assert = require('chai').assert;
const Circle = require('../lib/circle.js');

describe('Circle test', function(){
  it('should be a function', function() {
    assert.isFunction(Circle);
  });

  it('should instantiate an object circle', function() {
    var circle = new Circle();
    assert.isObject(circle);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function () {
    var circle = new Circle(200);
    assert.equal(circle.x, 200);
  });

  it('should take the second argument and set it as the "y" property of the instantiated object', function() {
    var circle = new Circle(200, 380);
    assert.equal(circle.y, 380);
  });

  it('should take the third argument and set it as the "radius" property of the instantiated object', function() {
    var circle = new Circle(200, 380, 15);
    assert.equal(circle.radius, 15);
  });

  describe('circle', function(){
    it('should have a method called "moveRight()"', function() {
      var circle = new Circle(200, 380);
      assert.isFunction(circle.moveRight);
    });

    it('"moveRight()" should increment the "x" property by 1', function() {
      var circle = new Circle(200, 380);
      circle.moveRight();
      assert.equal(circle.x, 201);
    });

    it('should have a method called "moveUp()"', function() {
      var circle = new Circle(200, 380);
      assert.isFunction(circle.moveUp);
    });

    it('"moveUp()" should decrement the "y" property by 1', function() {
      var circle = new Circle(200, 380);
      circle.moveUp();
      assert.equal(circle.y, 379);
    });

    it('should have a method called "bounceCircle()"', function() {
      var circle = new Circle(200, 380);
      assert.isFunction(circle.bounceCircle);
    });

    it('"bounceCircle()" should change the direction of the "x" and "y" values to the inverse', function() {
      var circle = new Circle(800, 0);
      circle.bounceCircle();
      assert.equal(circle.x, 799);
      assert.equal(circle.y, 1);
    });
  });
});
