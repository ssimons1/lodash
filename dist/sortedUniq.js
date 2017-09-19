'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSortedUniq = require('./.internal/baseSortedUniq.js');

var _baseSortedUniq2 = _interopRequireDefault(_baseSortedUniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `uniq` except that it only works
 * for sorted arrays.
 * If the input array is known to be sorted `sortedUniq` is 
 * faster than `uniq`.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * sortedUniq([1, 1, 2])
 * // => [1, 2]
 */
function sortedUniq(array) {
  return array != null && array.length ? (0, _baseSortedUniq2.default)(array) : [];
}

exports.default = sortedUniq;

//# sourceMappingURL=sortedUniq.js.map