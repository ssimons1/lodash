'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _capitalize = require('./capitalize.js');

var _capitalize2 = _interopRequireDefault(_capitalize);

var _words = require('./words.js');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */
var camelCase = function camelCase(string) {
  return (0, _words2.default)(('' + string).replace(/['\u2019]/g, '')).reduce(function (result, word, index) {
    word = word.toLowerCase();
    return result + (index ? (0, _capitalize2.default)(word) : word);
  }, '');
};

exports.default = camelCase;

//# sourceMappingURL=camelCase.js.map