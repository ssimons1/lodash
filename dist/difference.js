'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseDifference = require('./.internal/baseDifference.js');

var _baseDifference2 = _interopRequireDefault(_baseDifference);

var _baseFlatten = require('./.internal/baseFlatten.js');

var _baseFlatten2 = _interopRequireDefault(_baseFlatten);

var _isArrayLikeObject = require('./isArrayLikeObject.js');

var _isArrayLikeObject2 = _interopRequireDefault(_isArrayLikeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return (0, _isArrayLikeObject2.default)(array) ? (0, _baseDifference2.default)(array, (0, _baseFlatten2.default)(values, 1, _isArrayLikeObject2.default, true)) : [];
}

exports.default = difference;

//# sourceMappingURL=difference.js.map