'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memoizeCapped = require('./memoizeCapped.js');

var _memoizeCapped2 = _interopRequireDefault(_memoizeCapped);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var charCodeOfDot = '.'.charCodeAt(0);
var reEscapeChar = /\\(\\)?/g;
var rePropName = RegExp(
// Match anything that isn't a dot or bracket.
'[^.[\\]]+' + '|' +
// Or match property names within brackets.
'\\[(?:' +
// Match a non-string expression.
'([^"\'].*)' + '|' +
// Or match strings (supports escaping characters).
'(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2' + ')\\]' + '|' +
// Or match "" as the space between consecutive dots or empty brackets.
'(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))', 'g');

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0, _memoizeCapped2.default)(function (string) {
  var result = [];
  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push('');
  }
  string.replace(rePropName, function (match, expression, quote, subString) {
    var key = match;
    if (quote) {
      key = subString.replace(reEscapeChar, '$1');
    } else if (expression) {
      key = expression.trim();
    }
    result.push(key);
  });
  return result;
});

exports.default = stringToPath;

//# sourceMappingURL=stringToPath.js.map