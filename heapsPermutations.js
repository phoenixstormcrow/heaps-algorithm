/* Heap's algorithm for generating permutations of an array
**
** http://en.wikipedia.org/wiki/Heap%27s_algorithm
*/

'use strict';

function permutations(array) {
  var perms = [];

  (function generate(n, arr) {
    if (n === 1) {
      perms.push(arr.slice());
    } else {
      for (var i = 0; i < n; ++i) {
        generate(n-1, arr);
        if (n % 2 === 0) {
          [arr[i], arr[n-1]] = [arr[n-1], arr[i]];
        } else {
          [arr[0], arr[n-1]] = [arr[n-1], arr[0]];
        }
      }
    }
  })(array.length, array.slice());

  return perms;
}

module.exports = permutations;
