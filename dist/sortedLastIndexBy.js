'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSortedIndexBy = require('./.internal/baseSortedIndexBy.js');

var _baseSortedIndexBy2 = _interopRequireDefault(_baseSortedIndexBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `sortedLastIndex` except that it accepts `iteratee`
 * which is invoked for `value` and each element of `array` to compute their
 * sort ranking. The iteratee is invoked with one argument: (value).
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 5 }]
 *
 * sortedLastIndexBy(objects, { 'n': 4 }, ({ n }) => n)
 * // => 1
 */
function sortedLastIndexBy(array, value, iteratee) {
  return (0, _baseSortedIndexBy2.default)(array, value, iteratee, true);
}

exports.default = sortedLastIndexBy;

//# sourceMappingURL=sortedLastIndexBy.js.map