'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSum = require('./.internal/baseSum.js');

var _baseSum2 = _interopRequireDefault(_baseSum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/**
 * This method is like `mean` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be averaged.
 * The iteratee is invoked with one argument: (value).
 *
 * @since 4.7.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the mean.
 * @example
 *
 * const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
 *
 * meanBy(objects, ({ n }) => n)
 * // => 5
 */
function meanBy(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? (0, _baseSum2.default)(array, iteratee) / length : NAN;
}

exports.default = meanBy;

//# sourceMappingURL=meanBy.js.map