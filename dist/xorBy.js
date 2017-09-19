'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('./filter.js');

var _filter2 = _interopRequireDefault(_filter);

var _baseXor = require('./.internal/baseXor.js');

var _baseXor2 = _interopRequireDefault(_baseXor);

var _isArrayLikeObject = require('./isArrayLikeObject.js');

var _isArrayLikeObject2 = _interopRequireDefault(_isArrayLikeObject);

var _last = require('./last.js');

var _last2 = _interopRequireDefault(_last);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `xor` except that it accepts `iteratee` which is
 * invoked for each element of each `arrays` to generate the criterion by
 * which by which they're compared. The order of result values is determined
 * by the order they occur in the arrays. The iteratee is invoked with one
 * argument: (value).
 *
 * @since 4.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, without, xor, xorWith
 * @example
 *
 * xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2, 3.4]
 */
function xorBy() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var iteratee = (0, _last2.default)(arrays);
  if ((0, _isArrayLikeObject2.default)(iteratee)) {
    iteratee = undefined;
  }
  return (0, _baseXor2.default)((0, _filter2.default)(arrays, _isArrayLikeObject2.default), iteratee);
}

exports.default = xorBy;

//# sourceMappingURL=xorBy.js.map