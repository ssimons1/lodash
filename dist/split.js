'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castSlice = require('./.internal/castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _hasUnicode = require('./.internal/hasUnicode.js');

var _hasUnicode2 = _interopRequireDefault(_hasUnicode);

var _isRegExp = require('./isRegExp.js');

var _isRegExp2 = _interopRequireDefault(_isRegExp);

var _stringToArray = require('./.internal/stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Splits `string` by `separator`.
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 * @example
 *
 * split('a-b-c', '-', 2)
 * // => ['a', 'b']
 */
function split(string, separator, limit) {
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
  if (!limit) {
    return [];
  }
  if (string && (typeof separator == 'string' || separator != null && !(0, _isRegExp2.default)(separator))) {
    if (!separator && (0, _hasUnicode2.default)(string)) {
      return (0, _castSlice2.default)((0, _stringToArray2.default)(string), 0, limit);
    }
  }
  return string.split(separator, limit);
}

exports.default = split;

//# sourceMappingURL=split.js.map