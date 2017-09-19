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

var _last = require('./last.js');

var _last2 = _interopRequireDefault(_last);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `intersection` except that it accepts `comparator`
 * which is invoked to compare elements of `arrays`. The order and references
 * of result values are determined by the first array. The comparator is
 * invoked with two arguments: (arrVal, othVal).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * intersectionWith(objects, others, isEqual)
 * // => [{ 'x': 1, 'y': 2 }]
 */
function intersectionWith() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var comparator = (0, _last2.default)(arrays);
  var mapped = (0, _map2.default)(arrays, _castArrayLikeObject2.default);

  comparator = typeof comparator == 'function' ? comparator : undefined;
  if (comparator) {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0] ? (0, _baseIntersection2.default)(mapped, undefined, comparator) : [];
}

exports.default = intersectionWith;

//# sourceMappingURL=intersectionWith.js.map