'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slice = require('./slice.js');

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */
function dropRight(array) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var length = array == null ? 0 : array.length;
  return length ? (0, _slice2.default)(array, 0, n < 0 ? 0 : -n) : [];
}

exports.default = dropRight;

//# sourceMappingURL=dropRight.js.map