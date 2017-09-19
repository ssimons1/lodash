'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upperFirst = require('./upperFirst.js');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _words = require('./words.js');

var _words2 = _interopRequireDefault(_words);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @see camelCase, lowerCase, kebabCase, snakeCase, upperCase, upperFirst
 * @example
 *
 * startCase('--foo-bar--')
 * // => 'Foo Bar'
 *
 * startCase('fooBar')
 * // => 'Foo Bar'
 *
 * startCase('__FOO_BAR__')
 * // => 'FOO BAR'
 */
var startCase = function startCase(string) {
  return (0, _words2.default)(('' + string).replace(/['\u2019]/g, '')).reduce(function (result, word, index) {
    return result + (index ? ' ' : '') + (0, _upperFirst2.default)(word);
  }, '');
};

exports.default = startCase;

//# sourceMappingURL=startCase.js.map