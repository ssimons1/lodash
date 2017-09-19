'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _words = require('./words.js');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string` to
 * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 * @see camelCase, lowerCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 */
var kebabCase = function kebabCase(string) {
  return (0, _words2.default)(('' + string).replace(/['\u2019]/g, '')).reduce(function (result, word, index) {
    return result + (index ? '-' : '') + word.toLowerCase();
  }, '');
};

exports.default = kebabCase;

//# sourceMappingURL=kebabCase.js.map