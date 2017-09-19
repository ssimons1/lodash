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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, without, xorBy, xorWith
 * @example
 *
 * xor([2, 1], [2, 3])
 * // => [1, 3]
 */
function xor() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  return (0, _baseXor2.default)((0, _filter2.default)(arrays, _isArrayLikeObject2.default));
}

exports.default = xor;

//# sourceMappingURL=xor.js.map