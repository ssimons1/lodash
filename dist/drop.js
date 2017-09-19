'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slice = require('./slice.js');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @since 0.5.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * drop([1, 2, 3])
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2)
 * // => [3]
 *
 * drop([1, 2, 3], 5)
 * // => []
 *
 * drop([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function drop(array) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var length = array == null ? 0 : array.length;
  return length ? (0, _slice2.default)(array, n < 0 ? 0 : n, length) : [];
}

exports.default = drop;

//# sourceMappingURL=drop.js.map