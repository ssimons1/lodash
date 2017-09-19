'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castSlice = require('./.internal/castSlice.js');

var _castSlice2 = _interopRequireDefault(_castSlice);

var _charsStartIndex = require('./.internal/charsStartIndex.js');

var _charsStartIndex2 = _interopRequireDefault(_charsStartIndex);

var _stringToArray = require('./.internal/stringToArray.js');

var _stringToArray2 = _interopRequireDefault(_stringToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var methodName = ''.trimLeft ? 'trimLeft' : 'trimStart';

/**
 * Removes leading whitespace or specified characters from `string`.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @see trim, trimEnd
 * @example
 *
 * trimStart('  abc  ')
 * // => 'abc  '
 *
 * trimStart('-_-abc-_-', '_-')
 * // => 'abc-_-'
 */
function trimStart(string, chars) {
  if (string && chars === undefined) {
    return string[methodName]();
  }
  if (!string || !chars) {
    return string;
  }
  var strSymbols = (0, _stringToArray2.default)(string);
  var start = (0, _charsStartIndex2.default)(strSymbols, (0, _stringToArray2.default)(chars));
  return (0, _castSlice2.default)(strSymbols, start).join('');
}

exports.default = trimStart;

//# sourceMappingURL=trimStart.js.map