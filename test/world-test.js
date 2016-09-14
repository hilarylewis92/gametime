var assert = require('chai').assert;
const World = require('../lib/world.js');

describe('World test', function(){

  it('should be a function', function () {
  assert.isFunction(World);
  });

  it('should instantiate an object', function () {
  var world = new World();
  assert.isObject(world);
  });

  it('should have a height', function(){
    var world = new World();
    assert.equal(world.height, 400);
  });

  it('should have a width', function(){
    var world = new World();
    assert.equal(world.width, 800);
  });

  // it('should have a paddle property', function (){
  //   var world = new World(400, 800);
  //   assert.isArray(world.paddle);
  //   assert.deapEqual(world.paddle, []);
  // });
});
