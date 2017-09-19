'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _words = require('./words.js');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @see camelCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * lowerCase('--Foo-Bar--')
 * // => 'foo bar'
 *
 * lowerCase('fooBar')
 * // => 'foo bar'
 *
 * lowerCase('__FOO_BAR__')
 * // => 'foo bar'
 */
var lowerCase = function lowerCase(string) {
  return (0, _words2.default)(('' + string).replace(/['\u2019]/g, '')).reduce(function (result, word, index) {
    return result + (index ? ' ' : '') + word.toLowerCase();
  }, '');
};

exports.default = lowerCase;

//# sourceMappingURL=lowerCase.js.map