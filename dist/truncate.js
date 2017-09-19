'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseToString = require('./.internal/baseToString.js');

var _baseToString2 = _interopRequireDefault(_baseToString);

var _castSlice = require('./.internal/castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _hasUnicode = require('./.internal/hasUnicode.js');

var _hasUnicode2 = _interopRequireDefault(_hasUnicode);

var _isObject = require('./isObject.js');

var _isObject2 = _interopRequireDefault(_isObject);

var _isRegExp = require('./isRegExp.js');

var _isRegExp2 = _interopRequireDefault(_isRegExp);

var _stringSize = require('./.internal/stringSize.js');

var _stringSize2 = _interopRequireDefault(_stringSize);

var _stringToArray = require('./.internal/stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as default options for `truncate`. */
var DEFAULT_TRUNC_LENGTH = 30;
var DEFAULT_TRUNC_OMISSION = '...';

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @see replace
 * @example
 *
 * truncate('hi-diddly-ho there, neighborino')
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * })
 * // => 'hi-diddly-ho there,...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * })
 * // => 'hi-diddly-ho there...'
 *
 * truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * })
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  var separator = void 0;
  var length = DEFAULT_TRUNC_LENGTH;
  var omission = DEFAULT_TRUNC_OMISSION;

  if ((0, _isObject2.default)(options)) {
    separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? options.length : length;
    omission = 'omission' in options ? (0, _baseToString2.default)(options.omission) : omission;
  }
  var strSymbols = void 0;
  var strLength = string.length;
  if ((0, _hasUnicode2.default)(string)) {
    strSymbols = (0, _stringToArray2.default)(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - (0, _stringSize2.default)(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols ? (0, _castSlice2.default)(strSymbols, 0, end).join('') : string.slice(0, end);

  if (separator === undefined) {
    return result + omission;
  }
  if (strSymbols) {
    end += result.length - end;
  }
  if ((0, _isRegExp2.default)(separator)) {
    if (string.slice(end).search(separator)) {
      var match = void 0;
      var newEnd = void 0;
      var substring = result;

      if (!separator.global) {
        separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
      }
      separator.lastIndex = 0;
      while (match = separator.exec(substring)) {
        newEnd = match.index;
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf((0, _baseToString2.default)(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

exports.default = truncate;

//# sourceMappingURL=truncate.js.map