'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSortedIndex = require('./.internal/baseSortedIndex.js');

var _baseSortedIndex2 = _interopRequireDefault(_baseSortedIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `sortedIndex` except that it returns the highest
 * index at which `value` should be inserted into `array` in order to
 * maintain its sort order.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * sortedLastIndex([4, 5, 5, 5, 6], 5)
 * // => 4
 */
function sortedLastIndex(array, value) {
  return (0, _baseSortedIndex2.default)(array, value, true);
}

exports.default = sortedLastIndex;

//# sourceMappingURL=sortedLastIndex.js.map