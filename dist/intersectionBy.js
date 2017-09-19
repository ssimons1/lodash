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
 * This method is like `intersection` except that it accepts `iteratee`
 * which is invoked for each element of each `arrays` to generate the criterion
 * by which they're compared. The order and references of result values are
 * determined by the first array. The iteratee is invoked with one argument:
 * (value).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [2.1]
 */
function intersectionBy() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var iteratee = (0, _last2.default)(arrays);
  var mapped = (0, _map2.default)(arrays, _castArrayLikeObject2.default);

  if (iteratee === (0, _last2.default)(mapped)) {
    iteratee = undefined;
  } else {
    mapped.pop();
  }
  return mapped.length && mapped[0] === arrays[0] ? (0, _baseIntersection2.default)(mapped, iteratee) : [];
}

exports.default = intersectionBy;

//# sourceMappingURL=intersectionBy.js.map