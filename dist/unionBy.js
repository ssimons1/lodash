'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFlatten = require('./.internal/baseFlatten.js');

var _baseFlatten2 = _interopRequireDefault(_baseFlatten);

var _baseUniq = require('./.internal/baseUniq.js');

var _baseUniq2 = _interopRequireDefault(_baseUniq);

var _isArrayLikeObject = require('./isArrayLikeObject.js');

var _isArrayLikeObject2 = _interopRequireDefault(_isArrayLikeObject);

var _last = require('./last.js');

var _last2 = _interopRequireDefault(_last);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `union` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which uniqueness is computed. Result values are chosen from the first
 * array in which the value occurs. The iteratee is invoked with one argument:
 * (value).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @see difference, union, unionWith, without, xor, xorBy
 * @example
 *
 * unionBy([2.1], [1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
function unionBy() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var iteratee = (0, _last2.default)(arrays);
  if ((0, _isArrayLikeObject2.default)(iteratee)) {
    iteratee = undefined;
  }
  return (0, _baseUniq2.default)((0, _baseFlatten2.default)(arrays, 1, _isArrayLikeObject2.default, true), iteratee);
}

exports.default = unionBy;

//# sourceMappingURL=unionBy.js.map