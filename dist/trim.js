'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castSlice = require('./.internal/castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _charsEndIndex = require('./.internal/charsEndIndex.js');

var _charsEndIndex2 = _interopRequireDefault(_charsEndIndex);

var _charsStartIndex = require('./.internal/charsStartIndex.js');

var _charsStartIndex2 = _interopRequireDefault(_charsStartIndex);

var _stringToArray = require('./.internal/stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trimEnd, trimStart
 * @example
 *
 * trim('  abc  ')
 * // => 'abc'
 *
 * trim('-_-abc-_-', '_-')
 * // => 'abc'
 *
 * map(['  foo  ', '  bar  '], trim)
 * // => ['foo', 'bar']
 */
function trim(string, chars) {
  if (string && chars === undefined) {
    return string.trim();
  }
  if (!string || !chars) {
    return string;
  }
  var strSymbols = (0, _stringToArray2.default)(string);
  var chrSymbols = (0, _stringToArray2.default)(chars);
  var start = (0, _charsStartIndex2.default)(strSymbols, chrSymbols);
  var end = (0, _charsEndIndex2.default)(strSymbols, chrSymbols) + 1;

  return (0, _castSlice2.default)(strSymbols, start, end).join('');
}

exports.default = trim;

//# sourceMappingURL=trim.js.map