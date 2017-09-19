'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSum = require('./.internal/baseSum.js');

var _baseSum2 = _interopRequireDefault(_baseSum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 *
 * sumBy(objects, ({ n }) => n)
 * // => 20
 */
function sumBy(array, iteratee) {
  return array != null && array.length ? (0, _baseSum2.default)(array, iteratee) : 0;
}

exports.default = sumBy;

//# sourceMappingURL=sumBy.js.map