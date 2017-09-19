'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toInteger = require('./toInteger.js');

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * toLength(3.2)
 * // => 3
 *
 * toLength(Number.MIN_VALUE)
 * // => 0
 *
 * toLength(Infinity)
 * // => 4294967295
 *
 * toLength('3.2')
 * // => 3
 */
function toLength(value) {
  if (!value) {
    return 0;
  }
  value = (0, _toInteger2.default)(value);
  if (value < 0) {
    return 0;
  }
  if (value > MAX_ARRAY_LENGTH) {
    return MAX_ARRAY_LENGTH;
  }
  return value;
}

exports.default = toLength;

//# sourceMappingURL=toLength.js.map