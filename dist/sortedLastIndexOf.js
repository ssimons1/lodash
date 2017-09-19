'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSortedIndex = require('./.internal/baseSortedIndex.js');

var _baseSortedIndex2 = _interopRequireDefault(_baseSortedIndex);

var _eq = require('./eq.js');

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `lastIndexOf` except that it performs a binary
 * search on a sorted `array`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * sortedLastIndexOf([4, 5, 5, 5, 6], 5)
 * // => 3
 */
function sortedLastIndexOf(array, value) {
  var length = array == null ? 0 : array.length;
  if (length) {
    var index = (0, _baseSortedIndex2.default)(array, value, true) - 1;
    if ((0, _eq2.default)(array[index], value)) {
      return index;
    }
  }
  return -1;
}

exports.default = sortedLastIndexOf;

//# sourceMappingURL=sortedLastIndexOf.js.map