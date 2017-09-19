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

var _last = require('./last.js');

var _last2 = _interopRequireDefault(_last);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * **Note:** Unlike `pullAllBy`, this method returns a new array.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2]
 */
function differenceBy(array) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var iteratee = (0, _last2.default)(values);
  if ((0, _isArrayLikeObject2.default)(iteratee)) {
    iteratee = undefined;
  }
  return (0, _isArrayLikeObject2.default)(array) ? (0, _baseDifference2.default)(array, (0, _baseFlatten2.default)(values, 1, _isArrayLikeObject2.default, true), iteratee) : [];
}

exports.default = differenceBy;

//# sourceMappingURL=differenceBy.js.map