'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseSum = require('./.internal/baseSum.js');

var _baseSum2 = _interopRequireDefault(_baseSum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Computes the sum of the values in `array`.
 *
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * sum([4, 2, 8, 6])
 * // => 20
 */
function sum(array) {
  return array != null && array.length ? (0, _baseSum2.default)(array, function (value) {
    return value;
  }) : 0;
}

exports.default = sum;

//# sourceMappingURL=sum.js.map