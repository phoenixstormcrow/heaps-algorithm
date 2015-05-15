/* heaps tests */

var test = require('tape'),
    permutations = require('./heapsPermutations');

test('empty array should return empty array', function (t) {
  t.plan(1);
  t.equal(permutations([]).length, 0, 'length is 0');
});

test('single element array should be sole element of returned array', function (t) {
  t.plan(1);
  t.deepEqual(permutations([1]), [[1]], 'should be [[1]]');
});

test('two element array', function (t) {
  t.plan(2);
  var input = [1, 2],
      expected = [[1, 2], [2, 1]],
      actual = permutations(input);
  t.equal(actual.length, 2, 'length should be 2');
  t.deepEqual(actual, expected, 'should permute array');
});

test('three element array', function (t) {
  t.plan(2);
  var input = [1, 2, 3],
      expected = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
      ],
      actual = permutations(input).sort();
    t.equal(actual.length, 3*2*1, 'length should be 6');
    t.deepEqual(actual, expected, 'should permute array');
});

test('9 element array', function (t) {
  t.plan(1);
  var input = 'dehlllorw',
      nperms = 9*8*7*6*5*4*3*2*1,
      perms = permutations(input.split(''));
  t.equal(perms.length, nperms, 'length should be ' + nperms);
});
