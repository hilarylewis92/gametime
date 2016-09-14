var assert = require('chai').assert;
const World = require('../lib/world.js');

describe('World test', function(){
  it('should have a height', function(){
    var world = new World();
    assert.equal(world.height, 100);
  });
});
