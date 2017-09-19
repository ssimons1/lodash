'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createPadding = require('./.internal/createPadding.js');

var _createPadding2 = _interopRequireDefault(_createPadding);

var _stringSize = require('./.internal/stringSize.js');

var _stringSize2 = _interopRequireDefault(_stringSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * pad('abc', 8)
 * // => '  abc   '
 *
 * pad('abc', 8, '_-')
 * // => '_-abc_-_'
 *
 * pad('abc', 2)
 * // => 'abc'
 */
function pad(string, length, chars) {
  var strLength = length ? (0, _stringSize2.default)(string) : 0;
  if (!length || strLength >= length) {
    return string;
  }
  var mid = (length - strLength) / 2;
  return (0, _createPadding2.default)(Math.floor(mid), chars) + string + (0, _createPadding2.default)(Math.ceil(mid), chars);
}

exports.default = pad;

//# sourceMappingURL=pad.js.map