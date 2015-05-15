"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

function permutations(array) {
  var perms = [];

  (function generate(n, arr) {
    if (n === 1) {
      perms.push(arr.slice());
    } else {
      for (var i = 0; i < n; ++i) {
        generate(n - 1, arr);
        if (n % 2 === 0) {
          var _ref = [arr[n - 1], arr[i]];

          var _ref2 = _slicedToArray(_ref, 2);

          arr[i] = _ref2[0];
          arr[n - 1] = _ref2[1];
        } else {
          var _ref3 = [arr[n - 1], arr[0]];

          var _ref32 = _slicedToArray(_ref3, 2);

          arr[0] = _ref32[0];
          arr[n - 1] = _ref32[1];
        }
      }
    }
  })(array.length, array.slice());

  return perms;
}

module.exports = permutations;
/* Heap's algorithm for generating permutations of an array
**
** http://en.wikipedia.org/wiki/Heap%27s_algorithm
*/
