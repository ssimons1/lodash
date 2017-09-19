'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _words = require('./words.js');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string`, as space separated words, to upper case.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the upper cased string.
 * @see camelCase, kebabCase, lowerCase, snakeCase, startCase, upperFirst
 * @example
 *
 * upperCase('--foo-bar')
 * // => 'FOO BAR'
 *
 * upperCase('fooBar')
 * // => 'FOO BAR'
 *
 * upperCase('__foo_bar__')
 * // => 'FOO BAR'
 */
var upperCase = function upperCase(string) {
  return (0, _words2.default)(('' + string).replace(/['\u2019]/g, '')).reduce(function (result, word, index) {
    return result + (index ? ' ' : '') + word.toUpperCase();
  }, '');
};

exports.default = upperCase;

//# sourceMappingURL=upperCase.js.map