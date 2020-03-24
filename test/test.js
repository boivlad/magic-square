const assert = require('assert');
const { magicSquare } = require('../src/index');
console.log(magicSquare);
describe('magicSquare', function() {
  it('[[1, 9, 2], [1, 9, 2], [1, 9, 2]] should return 33', function() {
    const array = [[1, 9, 2], [1, 9, 2], [1, 9, 2]];
    const result = magicSquare(array);
    assert.equal(result, 33)
  });
  it('[[4, 9, 2], [3, 5, 7], [8, 1, 5,]] should return 1', function() {
    const array = [[4, 9, 2], [3, 5, 7], [8, 1, 5,]];
    const result = magicSquare(array);
    assert.equal(result, 1)
  });
  it('[[4, 8, 2], [4, 5, 7], [6, 1, 6,]] should return 4', function() {
    const array = [[4, 8, 2], [4, 5, 7], [6, 1, 6]];
    const result = magicSquare(array);
    assert.equal(result, 4)
  });
});
