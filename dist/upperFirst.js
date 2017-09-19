'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createCaseFirst = require('./.internal/createCaseFirst.js');

var _createCaseFirst2 = _interopRequireDefault(_createCaseFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts the first character of `string` to upper case.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase
 * @example
 *
 * upperFirst('fred')
 * // => 'Fred'
 *
 * upperFirst('FRED')
 * // => 'FRED'
 */
var upperFirst = (0, _createCaseFirst2.default)('toUpperCase');

exports.default = upperFirst;

//# sourceMappingURL=upperFirst.js.map