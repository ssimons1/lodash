'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slice = require('./slice.js');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * take([1, 2, 3])
 * // => [1]
 *
 * take([1, 2, 3], 2)
 * // => [1, 2]
 *
 * take([1, 2, 3], 5)
 * // => [1, 2, 3]
 *
 * take([1, 2, 3], 0)
 * // => []
 */
function take(array) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (!(array != null && array.length)) {
    return [];
  }
  return (0, _slice2.default)(array, 0, n < 0 ? 0 : n);
}

exports.default = take;

//# sourceMappingURL=take.js.map