'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createRange = require('./.internal/createRange.js');

var _createRange2 = _interopRequireDefault(_createRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `range` except that it populates values in
 * descending order.
 *
 * @since 4.0.0
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see inRange, range
 * @example
 *
 * rangeRight(4)
 * // => [3, 2, 1, 0]
 *
 * rangeRight(-4)
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 5)
 * // => [4, 3, 2, 1]
 *
 * rangeRight(0, 20, 5)
 * // => [15, 10, 5, 0]
 *
 * rangeRight(0, -4, -1)
 * // => [-3, -2, -1, 0]
 *
 * rangeRight(1, 4, 0)
 * // => [1, 1, 1]
 *
 * rangeRight(0)
 * // => []
 */
var rangeRight = (0, _createRange2.default)(true);

exports.default = rangeRight;

//# sourceMappingURL=rangeRight.js.map