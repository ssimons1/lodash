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
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * padEnd('abc', 6)
 * // => 'abc   '
 *
 * padEnd('abc', 6, '_-')
 * // => 'abc_-_'
 *
 * padEnd('abc', 2)
 * // => 'abc'
 */
function padEnd(string, length, chars) {
  var strLength = length ? (0, _stringSize2.default)(string) : 0;
  return length && strLength < length ? string + (0, _createPadding2.default)(length - strLength, chars) : string;
}

exports.default = padEnd;

//# sourceMappingURL=padEnd.js.map