'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = require('./.internal/root.js');

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match leading and trailing whitespace. */
var reTrimStart = /^\s+/;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeParseInt = _root2.default.parseInt;

/**
 * Converts `string` to an integer of the specified radix. If `radix` is
 * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
 * hexadecimal, in which case a `radix` of `16` is used.
 *
 * **Note:** This method aligns with the
 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
 *
 * @since 1.1.0
 * @category String
 * @param {string} string The string to convert.
 * @param {number} [radix=10] The radix to interpret `value` by.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * parseInt('08')
 * // => 8
 *
 * map(['6', '08', '10'], parseInt)
 * // => [6, 8, 10]
 */
function parseInt(string, radix) {
  if (radix == null) {
    radix = 0;
  } else if (radix) {
    radix = +radix;
  }
  return nativeParseInt(('' + string).replace(reTrimStart, ''), radix || 0);
}

exports.default = parseInt;

//# sourceMappingURL=parseInt.js.map