'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pullAll = require('./pullAll.js');

var _pullAll2 = _interopRequireDefault(_pullAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Removes all given values from `array` using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `without`, this method mutates `array`. Use `remove`
 * to remove elements from an array by predicate.
 *
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @see pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pull(array, 'a', 'c')
 * console.log(array)
 * // => ['b', 'b']
 */
function pull(array) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return (0, _pullAll2.default)(array, values);
}

exports.default = pull;

//# sourceMappingURL=pull.js.map