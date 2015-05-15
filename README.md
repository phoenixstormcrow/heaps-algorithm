# heaps-algorithm

[Heap's algorithm](http://en.wikipedia.org/wiki/Heap%27s_algorithm) for generating permutations of an array.

## installation

```
npm install heaps-algorithm
```

## usage

This module exports a function, which returns an array of all permutations of the array passed to it.

```
var permutations = require('heaps-algorithm'),
    actual = permutations([1, 2, 3]),
    expected = [
      [ 1, 2, 3 ],
      [ 2, 1, 3 ],
      [ 3, 1, 2 ],
      [ 1, 3, 2 ],
      [ 2, 3, 1 ],
      [ 3, 2, 1 ]
    ];

assert.deepEqual(actual, expected); // true
```
