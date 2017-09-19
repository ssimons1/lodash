'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castSlice = require('./.internal/castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _charsEndIndex = require('./.internal/charsEndIndex.js');

var _charsEndIndex2 = _interopRequireDefault(_charsEndIndex);

var _stringToArray = require('./.internal/stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methodName = ''.trimRight ? 'trimRight' : 'trimEnd';

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trim, trimStart
 * @example
 *
 * trimEnd('  abc  ')
 * // => '  abc'
 *
 * trimEnd('-_-abc-_-', '_-')
 * // => '-_-abc'
 */
function trimEnd(string, chars) {
  if (string && chars === undefined) {
    return string[methodName]();
  }
  if (!string || !chars) {
    return string;
  }
  var strSymbols = (0, _stringToArray2.default)(string);
  var end = (0, _charsEndIndex2.default)(strSymbols, (0, _stringToArray2.default)(chars)) + 1;
  return (0, _castSlice2.default)(strSymbols, 0, end).join('');
}

exports.default = trimEnd;

//# sourceMappingURL=trimEnd.js.map