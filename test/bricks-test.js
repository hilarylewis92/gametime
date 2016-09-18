var assert = require('chai').assert;
const Bricks = require('../lib/bricks.js');

describe('Bricks test', function(){
  it('should be a function', function() {
    assert.isFunction(Bricks);
  });

  it('should instantiate an object bricks', function() {
    var bricks = new Bricks();
    assert.isObject(bricks);
  });

  it('should take the first argument and set it as the row count property of the instantiated object', function () {
    var bricks = new Bricks(3);
    assert.equal(bricks.rowCount, 3);
  });

  it('should take the second argument and set it as the column count property of the instantiated object', function() {
    var bricks = new Bricks(3, 8);
    assert.equal(bricks.columnCount, 8);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object', function() {
    var bricks = new Bricks(3, 8, 96);
    assert.equal(bricks.width, 96);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object', function() {
    var bricks = new Bricks(3, 8, 96, 30);
    assert.equal(bricks.height, 30);
  });

  it('should take the fifth argument and set it as the "padding" property of the instantiated object', function() {
    var bricks = new Bricks(3, 8, 96, 30, 5);
    assert.equal(bricks.padding, 5);
  });

  it('should take the sixth argument and set it as the "brick" property of the instantiated object', function() {
    var bricks = new Bricks(3, 8, 96, 30, 5, []);
    assert.deepEqual(bricks.bricks, []);
  });

//   describe('bricks', function(){
//     it('should have a method called "makeBricksColumnAndRows()"', function() {
//       var bricks = new Bricks(200, 360);
//       assert.isFunction(bricks.moveRight);
//     });
//
//     it('"moveRight()" should increment the "x" property by 1', function() {
//       var bricks = new Bricks(200, 360);
//       bricks.moveRight();
//       assert.equal(bricks.x, 201);
//     });
//
//     it('should have a method called "moveUp()"', function() {
//       var bricks = new Bricks(200, 360);
//       assert.isFunction(bricks.moveUp);
//     });
//
//     it('"moveUp()" should decrement the "y" property by 1', function() {
//       var bricks = new Bricks(200, 360);
//       bricks.moveUp();
//       assert.equal(bricks.y, 359);
//     });
//   });
});
