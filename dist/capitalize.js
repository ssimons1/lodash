'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upperFirst = require('./upperFirst.js');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * capitalize('FRED')
 * // => 'Fred'
 */
function capitalize(string) {
  return (0, _upperFirst2.default)(string.toLowerCase());
}

exports.default = capitalize;

//# sourceMappingURL=capitalize.js.map