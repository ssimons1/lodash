'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isIndex = require('./.internal/isIndex.js');

var _isIndex2 = _interopRequireDefault(_isIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the element at index `n` of `array`. If `n` is negative, the nth
 * element from the end is returned.
 *
 * @since 4.11.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=0] The index of the element to return.
 * @returns {*} Returns the nth element of `array`.
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 *
 * nth(array, 1)
 * // => 'b'
 *
 * nth(array, -2)
 * // => 'c'
 */
function nth(array, n) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return;
  }
  n += n < 0 ? length : 0;
  return (0, _isIndex2.default)(n, length) ? array[n] : undefined;
}

exports.default = nth;

//# sourceMappingURL=nth.js.map