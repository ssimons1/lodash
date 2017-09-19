'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

var _isSymbol = require('./isSymbol.js');

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * toString(null)
 * // => ''
 *
 * toString(-0)
 * // => '-0'
 *
 * toString([1, 2, 3])
 * // => '1,2,3'
 */
function toString(value) {
  if (value == null) {
    return '';
  }
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return '' + (0, _map2.default)(value, function (other) {
      return other == null ? other : toString(other);
    });
  }
  if ((0, _isSymbol2.default)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = '' + value;
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

exports.default = toString;

//# sourceMappingURL=toString.js.map