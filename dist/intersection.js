'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = require('./map.js');

var _map2 = _interopRequireDefault(_map);

var _baseIntersection = require('./.internal/baseIntersection.js');

var _baseIntersection2 = _interopRequireDefault(_baseIntersection);

var _castArrayLikeObject = require('./.internal/castArrayLikeObject.js');

var _castArrayLikeObject2 = _interopRequireDefault(_castArrayLikeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * intersection([2, 1], [2, 3])
 * // => [2]
 */
function intersection() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var mapped = (0, _map2.default)(arrays, _castArrayLikeObject2.default);
  return mapped.length && mapped[0] === arrays[0] ? (0, _baseIntersection2.default)(mapped) : [];
}

exports.default = intersection;

//# sourceMappingURL=intersection.js.map