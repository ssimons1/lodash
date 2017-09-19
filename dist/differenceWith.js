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
 * This method is like `difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `pullAllWith`, this method returns a new array.
 *
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 *
 * differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)
 * // => [{ 'x': 2, 'y': 1 }]
 */
function differenceWith(array) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  var comparator = (0, _last2.default)(values);
  if ((0, _isArrayLikeObject2.default)(comparator)) {
    comparator = undefined;
  }
  return (0, _isArrayLikeObject2.default)(array) ? (0, _baseDifference2.default)(array, (0, _baseFlatten2.default)(values, 1, _isArrayLikeObject2.default, true), undefined, comparator) : [];
}

exports.default = differenceWith;

//# sourceMappingURL=differenceWith.js.map