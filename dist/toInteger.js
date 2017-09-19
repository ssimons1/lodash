'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toFinite = require('./toFinite.js');

var _toFinite2 = _interopRequireDefault(_toFinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @see isInteger, isNumber, toNumber
 * @example
 *
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
function toInteger(value) {
  var result = (0, _toFinite2.default)(value);
  var remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

exports.default = toInteger;

//# sourceMappingURL=toInteger.js.map